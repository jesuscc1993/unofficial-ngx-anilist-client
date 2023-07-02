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
import { AnimeService } from '../services/anime.service';

@Injectable()
export class AnimeCommands {
  constructor(
    private animeService: AnimeService,
    private authStore: AuthStore,
    private dialog: MatDialog,
    private toastService: ToastService,
    private translateService: TranslateService
  ) {
    this._deleteAnimeListEntry = this._deleteAnimeListEntry.bind(this);
  }

  getAnimeFromIds(
    mediaIds: number[],
    query: SearchFilters,
    pageQuery?: PageQuery
  ) {
    return this.animeService.getMediaFromIds(mediaIds, query, pageQuery);
  }

  getAnimeGenres() {
    return this.animeService.getGenres();
  }

  getAnimeListEntries() {
    return this.animeService.getListEntries(this.authStore.getUser());
  }

  getAnimeListFavouriteIDs(user: User) {
    return this.animeService.getFavouriteIDs(user);
  }

  getRelatedAnimeMediaIds() {
    return this.animeService.getRelatedMediaIds(this.authStore.getUser());
  }

  deleteAnimeListEntry(listEntry: ListEntry) {
    return new Observable((observer) => {
      const confirm = () => {
        this._deleteAnimeListEntry(listEntry)
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
            'anime.actions.deleteDescription',
            {
              mediaTitle: listEntry.media.title.romaji,
            }
          ),
        } as PromptData,
      });
    });
  }

  saveAnimeListEntry(listEntry: ListEntry) {
    return this.animeService.saveListEntry(listEntry).pipe(
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
    return this.saveAnimeListEntry({
      ...(media.mediaListEntry || ({} as ListEntry)),
      media,
      status,
    });
  }

  searchAnime(query: SearchFilters, pageQuery?: PageQuery) {
    return this.animeService.searchMedia(query, pageQuery);
  }

  toggleFavouriteAnime(user: User, media: Media) {
    return this.animeService.toggleFavourite(user, media).pipe(
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
    return this.animeService.getListEntriesGroupedByStatus();
  }

  getFavouriteIDs() {
    return this.animeService.getFavouriteIDs$();
  }

  getListEntriesByDateUpdated() {
    return this.animeService.getListEntries$();
  }

  getListEntriesExport() {
    return this.animeService.getListEntries$().pipe(
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
    return this.animeService.getPendingMedia();
  }

  private _deleteAnimeListEntry(listEntry: ListEntry) {
    return this.animeService.deleteListEntry(listEntry).pipe(
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
