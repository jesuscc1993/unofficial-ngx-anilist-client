import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';

import { largeModalOptions } from '../../../app.constants';
import { ToastService } from '../../shared/services/toast.service';
import { AuthStore } from '../../shared/store/auth.store';
import { ListEntry, ListEntryStatus } from '../../shared/types/anilist/listEntry.types';
import { Media } from '../../shared/types/anilist/media.types';
import { PageQuery } from '../../shared/types/anilist/pageInfo.types';
import { User } from '../../shared/types/anilist/user.types';
import { SearchFilters } from '../api/media.types';
import { MtPromptComponent, PromptData } from '../components/modals/mt-prompt/mt-prompt.component';
import { sortListEntriesByMediaTitle } from '../domain/media.domain';
import { MediaService } from '../services/media.service';

@Injectable()
export class MediaCommands {
  private mediaService: MediaService;

  constructor(
    protected authStore: AuthStore,
    protected dialog: MatDialog,
    protected toastService: ToastService,
    protected translateService: TranslateService,
    mediaService: MediaService
  ) {
    this._deleteListEntry = this._deleteListEntry.bind(this);
    this.mediaService = mediaService;
  }

  getMediaFromIds(
    mediaIds: number[],
    query: SearchFilters,
    pageQuery?: PageQuery
  ) {
    return this.mediaService.getMediaFromIds(mediaIds, query, pageQuery);
  }

  queryGenres() {
    return this.mediaService.queryGenres();
  }

  queryListEntries() {
    return this.mediaService.queryListEntries(this.authStore.getUser());
  }

  queryFavouriteIDs(user: User) {
    return this.mediaService.queryFavouriteIDs(user);
  }

  queryRelatedMediaIds() {
    return this.mediaService.queryRelatedMediaIds(this.authStore.getUser());
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
        ...largeModalOptions,
        minWidth: '160px',
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
    return this.mediaService.saveListEntry(listEntry).pipe(
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
    return this.mediaService.queryMedia(query, pageQuery);
  }

  toggleFavourite(user: User, media: Media) {
    return this.mediaService.toggleFavourite(user, media).pipe(
      tap((mediaId) => {
        const success = mediaId !== undefined;
        if (success) {
          this.toastService.showToast(
            this.translateService.instant('listEntry.favoriteToggle.success', {
              mediaTitle: media.title.romaji,
            })
          );
        }
      })
    );
  }

  getListEntriesGroupedByStatus() {
    return this.mediaService.getListEntriesGroupedByStatus();
  }

  getFavouriteIDs() {
    return this.mediaService.getFavouriteIDs();
  }

  getListEntries() {
    return this.mediaService.getListEntries();
  }

  getListEntriesExport() {
    return this.mediaService.getListEntries().pipe(
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
    return this.mediaService.getPendingMedia();
  }

  private _deleteListEntry(listEntry: ListEntry) {
    return this.mediaService.deleteListEntry(listEntry).pipe(
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
