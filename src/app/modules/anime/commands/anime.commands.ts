import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { defaultModalOptions } from '../../../app.constants';
import { ToastService } from '../../shared/services/toast.service';
import { AuthStore } from '../../shared/store/auth.store';
import { ListEntry, ListEntryStatus } from '../../shared/types/anilist/listEntry.types';
import { Media } from '../../shared/types/anilist/media.types';
import { PageQuery } from '../../shared/types/anilist/pageInfo.types';
import { User } from '../../shared/types/anilist/user.types';
import { SearchFilters } from '../api/anime/anime-api.types';
import { MtPromptComponent, PromptData } from '../components/modals/mt-prompt/mt-prompt.component';
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

  getAnimeFromIds(mediaIds: number[], query: SearchFilters, pageQuery?: PageQuery) {
    return this.animeService.getAnimeFromIds(mediaIds, query, pageQuery);
  }

  getAnimeGenres() {
    return this.animeService.getAnimeGenres();
  }

  getAnimeListEntries() {
    return this.animeService.getAnimeListEntries(this.authStore.getUser());
  }

  getAnimeListFavouriteIDs(user: User, callback: (favouriteIDs: number[]) => void) {
    return this.animeService.getAnimeListFavouriteIDs(user, callback);
  }

  getRelatedAnimeMediaIds() {
    return this.animeService.getRelatedAnimeMediaIds(this.authStore.getUser());
  }

  deleteAnimeListEntry(listEntry: ListEntry) {
    return new Observable(observer => {
      const confirm = () => {
        this._deleteAnimeListEntry(listEntry)
          .pipe(
            tap(deleted => {
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
          title: this.translateService.instant('anime.actions.deleteDescription', {
            mediaTitle: listEntry.media.title.romaji,
          }),
        } as PromptData,
      });
    });
  }

  saveAnimeListEntry(listEntry: ListEntry) {
    return this.animeService.saveAnimeListEntry(listEntry).pipe(
      tap(savedListEntry => {
        const success: boolean = savedListEntry.id !== undefined;
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
    return this.animeService.searchAnime(query, pageQuery);
  }

  toggleFavouriteAnimeListEntry(listEntry: ListEntry) {
    return this.animeService.toggleFavouriteAnimeListEntry(listEntry).pipe(
      tap(listEntryId => {
        const success: boolean = listEntryId !== undefined;
        if (success) {
          this.toastService.showToast(
            this.translateService.instant('listEntry.favouriteToggle.success', {
              mediaTitle: listEntry.media.title.romaji,
            })
          );
        }
      })
    );
  }

  getListEntriesGroupedByStatus() {
    return this.animeService.getListEntriesGroupedByStatus();
  }

  getListEntriesByDateUpdated() {
    return this.animeService.getListEntriesByDateUpdated();
  }

  getPendingMediaByEndDate() {
    return this.animeService.getPendingMediaByEndDate();
  }

  private _deleteAnimeListEntry(listEntry: ListEntry) {
    return this.animeService.deleteAnimeListEntry(listEntry).pipe(
      map(({ deleted }) => deleted),
      tap(deleted => {
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
