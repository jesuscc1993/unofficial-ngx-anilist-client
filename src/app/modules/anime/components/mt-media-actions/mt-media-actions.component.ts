import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { takeUntil, tap } from 'rxjs/operators';

import { defaultModalOptions } from '../../../../app.constants';
import { AnimeService } from '../../services/anime.service';
import { AuthService } from '../../../shared/services/auth.service';
import { ToastService } from '../../../shared/services/toast.service';
import { AuthStore } from '../../../shared/store/auth.store';
import { ListEntry } from '../../../shared/types/anilist/listEntry.types';
import { Media } from '../../../shared/types/anilist/media.types';
import { User } from '../../../shared/types/anilist/user.types';
import {
  WithObservableOnDestroy,
} from '../../../shared/components/with-observable-on-destroy/with-observable-on-destroy.component';
import { MtListEntryFormModalComponent } from '../modals/mt-list-entry-form-modal/mt-list-entry-form-modal.component';
import { MtMediaDetailModalComponent } from '../modals/mt-media-detail-modal/mt-media-detail-modal.component';

@Component({
  selector: 'mt-media-actions',
  templateUrl: './mt-media-actions.component.html',
  styleUrls: ['./mt-media-actions.component.scss'],
})
export class MtMediaActionsComponent extends WithObservableOnDestroy implements OnInit {
  @Input() listEntry?: ListEntry;
  @Input() media: Media;
  @Input() fromModal?: boolean;
  @Output() onUpdate?: EventEmitter<ListEntry> = new EventEmitter<ListEntry>();

  user: User;

  constructor(
    private dialog: MatDialog,
    private translateService: TranslateService,
    private animeService: AnimeService,
    private authService: AuthService,
    private authStore: AuthStore,
    private toastService: ToastService
  ) {
    super();

    this.user = this.authStore.getUser();

    this.authService.userChange
      .pipe(
        takeUntil(this.destroyed$),
        tap((user: User) => {
          this.user = user;
        })
      )
      .subscribe();
  }

  ngOnInit() {
    if (this.media && this.media.mediaListEntry && !this.listEntry) {
      this.listEntry = this.media.mediaListEntry;
    }
  }

  saveToList() {
    this.showFormModal()
      .afterClosed()
      .pipe(
        tap(result => {
          if (result) {
            if (result.savedListEntry) {
              this.showSavedListEntryToast(result.savedListEntry);
            }
            if (result.deletedListEntry) {
              this.showDeletedListEntryToast(result.deletedListEntry);
            }

            this.onUpdate.emit(result.savedListEntry || result.deletedListEntry);
          }
        })
      )
      .subscribe();
  }

  toggleFavourite() {
    const targetlistEntry: ListEntry = this.getListEntry();

    this.animeService
      .toggleFavouriteAnimeListEntry(targetlistEntry)
      .pipe(
        tap(listEntryId => {
          const success: boolean = listEntryId !== undefined;
          if (success) {
            this.showToggledFavouriteToast(targetlistEntry);
            this.onUpdate.emit(targetlistEntry);
          }
        })
      )
      .subscribe();
  }

  deleteEntry() {
    const targetlistEntry: ListEntry = this.getListEntry();

    this.animeService
      .deleteAnimeListEntry(targetlistEntry)
      .pipe(
        tap(deletedListEntry => {
          const success: boolean = deletedListEntry.deleted === true;
          if (success) {
            this.showDeletedListEntryToast(targetlistEntry);
            this.onUpdate.emit(targetlistEntry);
          }
        })
      )
      .subscribe();
  }

  showDetail() {
    this.dialog.open(MtMediaDetailModalComponent, {
      ...defaultModalOptions,
      maxWidth: '800px',
      data: {
        media: this.media,
      },
    });
  }

  viewOnAniList() {
    window.open(`https://anilist.co/anime/${this.media.id}`);
  }

  isUpdateAvailable(): boolean {
    return !!this.listEntry && !!this.user;
  }

  private getListEntry(): ListEntry {
    const mediaCopy: Media = { ...this.media };
    mediaCopy.mediaListEntry = undefined;

    const listEntryCopy: ListEntry = { ...this.listEntry };
    listEntryCopy.media = mediaCopy;

    return listEntryCopy;
  }

  private showFormModal() {
    return this.dialog.open(MtListEntryFormModalComponent, {
      ...defaultModalOptions,
      data: {
        listEntry: this.listEntry,
        media: this.media,
      },
    });
  }

  private showSavedListEntryToast(listEntry: ListEntry) {
    this.toastService.showToast(
      this.translateService.instant('listEntry.update.success', { mediaTitle: listEntry.media.title.romaji })
    );
  }

  private showToggledFavouriteToast(listEntry: ListEntry) {
    this.toastService.showToast(
      this.translateService.instant('listEntry.favouriteToggle.success', { mediaTitle: listEntry.media.title.romaji })
    );
  }

  private showDeletedListEntryToast(listEntry: ListEntry) {
    this.toastService.showToast(
      this.translateService.instant('listEntry.deletion.success', { mediaTitle: listEntry.media.title.romaji })
    );
  }
}
