import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';

import { defaultModalOptions } from '../../../app.constants';
import { SearchFilters } from '../../media/api/media.types';
import { MediaCommandsInterface } from '../../media/commands/media.commands.interface';
import {
  MtPromptComponent, PromptData,
} from '../../media/components/modals/mt-prompt/mt-prompt.component';
import { sortListEntriesByMediaTitle } from '../../media/domain/media.domain';
import { ToastService } from '../../shared/services/toast.service';
import { AuthStore } from '../../shared/store/auth.store';
import { ListEntry, ListEntryStatus } from '../../shared/types/anilist/listEntry.types';
import { Media } from '../../shared/types/anilist/media.types';
import { PageQuery } from '../../shared/types/anilist/pageInfo.types';
import { User } from '../../shared/types/anilist/user.types';
import { MangaService } from '../services/manga.service';

@Injectable()
export class MangaCommands implements MediaCommandsInterface {
  constructor(
    private mangaService: MangaService,
    private authStore: AuthStore,
    private dialog: MatDialog,
    private toastService: ToastService,
    private translateService: TranslateService
  ) {
    this._deleteListEntry = this._deleteListEntry.bind(this);
  }

  getMediaFromIds(
    mediaIds: number[],
    query: SearchFilters,
    pageQuery?: PageQuery
  ) {
    return this.mangaService.getMediaFromIds(mediaIds, query, pageQuery);
  }

  queryGenres() {
    return this.mangaService.queryGenres();
  }

  queryListEntries() {
    return this.mangaService.queryListEntries(this.authStore.getUser());
  }

  queryFavouriteIDs(user: User) {
    return this.mangaService.queryFavouriteIDs(user);
  }

  queryRelatedMediaIds() {
    return this.mangaService.queryRelatedMediaIds(this.authStore.getUser());
  }

  deleteListEntry(listEntry: ListEntry) {
    return new Observable((observer) => {
      const confirm = () => {
        this._deleteListEntry(listEntry)
          .pipe(
            tap((deleted) => {
              observer.next(deleted);
              observer.complete();
            })
          )
          .subscribe();
      };

      const cancel = () => {
        observer.next();
        observer.complete();
      };

      this.dialog.open(MtPromptComponent, {
        ...defaultModalOptions,
        minWidth: '160px',
        maxWidth: '800px',
        data: {
          confirm,
          cancel,
          dismiss: cancel,
          hasCancel: true,
          hasConfirm: true,
          title: this.translateService.instant(
            'media.userList.deleteDescription',
            {
              mediaTitle: listEntry.media.title.romaji,
            }
          ),
        } as PromptData,
      });
    });
  }

  saveListEntry(listEntry: ListEntry) {
    return this.mangaService.saveListEntry(listEntry).pipe(
      tap((savedListEntry) => {
        const success = savedListEntry.id !== undefined;
        if (success) {
          this.toastService.showToast(
            this.translateService.instant('listEntry.update.success', {
              mediaTitle: savedListEntry.media.title.romaji,
            })
          );
        }
      })
    );
  }

  saveMediaWithStatus(media: Media, status: ListEntryStatus) {
    return this.saveListEntry({
      ...(media.mediaListEntry || ({} as ListEntry)),
      media,
      status,
    });
  }

  queryMedia(query: SearchFilters, pageQuery?: PageQuery) {
    return this.mangaService.queryMedia(query, pageQuery);
  }

  toggleFavourite(user: User, media: Media) {
    return this.mangaService.toggleFavourite(user, media).pipe(
      tap((mediaId) => {
        const success = mediaId !== undefined;
        if (success) {
          this.toastService.showToast(
            this.translateService.instant('listEntry.favouriteToggle.success', {
              mediaTitle: media.title.romaji,
            })
          );
        }
      })
    );
  }

  getListEntriesGroupedByStatus() {
    return this.mangaService.getListEntriesGroupedByStatus();
  }

  getFavouriteIDs() {
    return this.mangaService.getFavouriteIDs();
  }

  getListEntries() {
    return this.mangaService.getListEntries();
  }

  getListEntriesExport() {
    return this.mangaService.getListEntries().pipe(
      map((listEntries) =>
        sortListEntriesByMediaTitle(listEntries).map((listEntry) => {
          const { id, media, ...entry } = listEntry;

          return {
            entryId: id,
            mediaId: media.id,
            progress: entry.progress,
            repeat: entry.repeat,
            scoreRaw: entry.scoreRaw,
            status: entry.status,
            title: media.title.romaji,
          };
        })
      )
    );
  }

  getPendingMedia() {
    return this.mangaService.getPendingMedia();
  }

  private _deleteListEntry(listEntry: ListEntry) {
    return this.mangaService.deleteListEntry(listEntry).pipe(
      map(({ deleted }) => deleted),
      tap((deleted) => {
        if (deleted) {
          this.toastService.showToast(
            this.translateService.instant('listEntry.deletion.success', {
              mediaTitle: listEntry.media.title.romaji,
            })
          );
        }
      })
    );
  }
}
