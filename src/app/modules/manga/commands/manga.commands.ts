import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';

import { defaultModalOptions } from '../../../app.constants';
import { SearchFilters } from '../../media/api/media.types';
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
export class MangaCommands {
  constructor(
    private mangaService: MangaService,
    private authStore: AuthStore,
    private dialog: MatDialog,
    private toastService: ToastService,
    private translateService: TranslateService
  ) {
    this._deleteMangaListEntry = this._deleteMangaListEntry.bind(this);
  }

  getMangaFromIds(
    mediaIds: number[],
    query: SearchFilters,
    pageQuery?: PageQuery
  ) {
    return this.mangaService.getMediaFromIds(mediaIds, query, pageQuery);
  }

  getMangaGenres() {
    return this.mangaService.getGenres();
  }

  getMangaListEntries() {
    return this.mangaService.getListEntries(this.authStore.getUser());
  }

  getMangaListFavouriteIDs(
    user: User,
    callback: (favouriteIDs: number[]) => void
  ) {
    return this.mangaService.getFavouriteIDs(user, callback);
  }

  getRelatedMangaMediaIds() {
    return this.mangaService.getRelatedMediaIds(this.authStore.getUser());
  }

  deleteMangaListEntry(listEntry: ListEntry) {
    return new Observable((observer) => {
      const confirm = () => {
        this._deleteMangaListEntry(listEntry)
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
            'manga.actions.deleteDescription',
            {
              mediaTitle: listEntry.media.title.romaji,
            }
          ),
        } as PromptData,
      });
    });
  }

  saveMangaListEntry(listEntry: ListEntry) {
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
    return this.saveMangaListEntry({
      ...(media.mediaListEntry || ({} as ListEntry)),
      media,
      status,
    });
  }

  searchManga(query: SearchFilters, pageQuery?: PageQuery) {
    return this.mangaService.searchMedia(query, pageQuery);
  }

  toggleFavouriteManga(manga: Media) {
    return this.mangaService.toggleFavourite(manga).pipe(
      tap((mediaId) => {
        const success = mediaId !== undefined;
        if (success) {
          this.toastService.showToast(
            this.translateService.instant('listEntry.favouriteToggle.success', {
              mediaTitle: manga.title.romaji,
            })
          );
        }
      })
    );
  }

  getListEntriesGroupedByStatus() {
    return this.mangaService.getListEntriesGroupedByStatus();
  }

  getListEntriesByDateUpdated() {
    return this.mangaService.getListEntriesByDateUpdated();
  }

  getListEntriesExport() {
    return this.mangaService.getListEntriesByDateUpdated().pipe(
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

  private _deleteMangaListEntry(listEntry: ListEntry) {
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
