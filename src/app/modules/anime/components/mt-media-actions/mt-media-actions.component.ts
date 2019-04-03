import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { takeUntil, tap } from 'rxjs/operators';

import { defaultModalOptions } from '../../../../app.constants';
import { AnimeService } from '../../../../services/anime.service';
import { AuthService } from '../../../../services/auth.service';
import { AuthStore } from '../../../../store/auth.store';
import { ListEntry } from '../../../../types/anilist/listEntry.types';
import { Media } from '../../../../types/anilist/media.types';
import { User } from '../../../../types/anilist/user.types';
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
    private matSnackBar: MatSnackBar,
    private animeService: AnimeService,
    private authService: AuthService,
    private authStore: AuthStore
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
            if (result.savedEntry) {
              this.showSavedEntryToast(result.savedEntry);
            }
            if (result.deletedEntry) {
              this.showDeletedEntryToast(result.deletedEntry);
            }

            this.onUpdate.emit(result.savedEntry || result.deletedEntry);
          }
        })
      )
      .subscribe();
  }

  toggleFavourite() {
    const targetEntry: ListEntry = this.getListEntry();

    this.animeService
      .toggleFavouriteAnimeListEntry(targetEntry)
      .pipe(
        tap(response => {
          const success: boolean = response.data.ToggleFavourite !== undefined;
          if (success) {
            this.showToggledFavouriteToast(targetEntry);
            this.onUpdate.emit(targetEntry);
          }
        })
      )
      .subscribe();
  }

  deleteEntry() {
    const targetEntry: ListEntry = this.getListEntry();

    this.animeService
      .deleteAnimeListEntry(targetEntry)
      .pipe(
        tap(response => {
          const success: boolean = response.data.DeleteMediaListEntry.deleted === true;
          if (success) {
            this.showDeletedEntryToast(targetEntry);
            this.onUpdate.emit(targetEntry);
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

  private showSavedEntryToast(listEntry: ListEntry) {
    this.showToast(`Updated list entry for "${listEntry.media.title.romaji}"`);
  }

  private showToggledFavouriteToast(listEntry: ListEntry) {
    this.showToast(`Toggled entry "${listEntry.media.title.romaji}" as favourite`);
  }

  private showDeletedEntryToast(listEntry: ListEntry) {
    this.showToast(`Deleted list entry for "${listEntry.media.title.romaji}"`);
  }

  private showToast(message: string) {
    this.matSnackBar.open(message, undefined, {
      duration: 10000,
    });
  }
}
