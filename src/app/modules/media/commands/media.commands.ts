import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';

import { largeModalOptions } from '../../../app.constants';
import { ToastService } from '../../shared/services/toast.service';
import { AuthStore } from '../../shared/store/auth.store';
import {
  ListEntry,
  ListEntryStatus,
} from '../../shared/types/anilist/listEntry.types';
import { Media } from '../../shared/types/anilist/media.types';
import { PageQuery } from '../../shared/types/anilist/pageInfo.types';
import { User } from '../../shared/types/anilist/user.types';
import { MediaExportEntry } from '../../shared/types/media.types';
import { SearchFilters } from '../api/media.types';
import {
  MtPromptComponent,
  PromptData,
} from '../components/modals/mt-prompt/mt-prompt.component';
import {
  getMediaTitle,
  sortListEntriesByMediaTitle,
} from '../domain/media.domain';
import { MediaService } from '../services/media.service';

@Injectable()
export abstract class MediaCommands {
  protected authStore = inject(AuthStore);
  protected dialog = inject(MatDialog);
  protected toastService = inject(ToastService);
  protected translateService = inject(TranslateService);
  protected abstract mediaService: MediaService;

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

  queryTags() {
    return this.mediaService.queryTags();
  }

  queryListEntries() {
    return this.mediaService.queryListEntries(this.authStore.getUser()!);
  }

  queryFavouriteIDs() {
    return this.mediaService.queryFavouriteIDs(this.authStore.getUser()!);
  }

  queryRelatedMediaIds() {
    return this.mediaService.queryRelatedMediaIds(this.authStore.getUser()!);
  }

  queryRecommendationsForMediaId(mediaId: number, pageQuery: PageQuery) {
    return this.mediaService.queryRecommendationsForMediaId(mediaId, pageQuery);
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
          confirmColor: 'warn',
          hasCancel: true,
          hasConfirm: true,
          title: this.translateService.instant(
            'media.userList.deleteDescription',
            { mediaTitle: getMediaTitle(listEntry.media) }
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
              mediaTitle: getMediaTitle(savedListEntry.media),
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
              mediaTitle: getMediaTitle(media),
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
            title: getMediaTitle(media),
          } as MediaExportEntry;
        })
      )
    );
  }

  getPendingMedia(maxEndDate?: Date) {
    return this.mediaService.getPendingMedia(maxEndDate);
  }

  private _deleteListEntry(listEntry: ListEntry) {
    return this.mediaService.deleteListEntry(listEntry).pipe(
      map(({ deleted }) => deleted),
      tap((deleted) => {
        if (deleted) {
          this.toastService.showToast(
            this.translateService.instant('listEntry.deletion.success', {
              mediaTitle: getMediaTitle(listEntry.media),
            })
          );
        }
      })
    );
  }
}
