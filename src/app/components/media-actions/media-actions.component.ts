import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';

import { AnimeService } from '../../providers/anime.service';
import { ListEntry } from '../../models/anilist/listEntry';
import { Media } from '../../models/anilist/media';
import { ListEntryFormModalComponent } from '../../modals/list-entry-form-modal/list-entry-form-modal.component';
import { User } from '../../models/anilist/user';
import { MediaDetailModalComponent } from '../../modals/media-detail-modal/media-detail-modal.component';
import { modalConfig } from '../../app.constants';

@Component({
  selector: 'app-media-actions',
  templateUrl: './media-actions.component.html',
  styleUrls: ['./media-actions.component.scss']
})
export class MediaActionsComponent implements OnInit, OnDestroy {
  @Input() listEntry?: ListEntry;
  @Input() media: Media;
  @Output() onUpdate?: EventEmitter<ListEntry> = new EventEmitter<ListEntry>();

  user: User;

  private userChangeSubscription: any;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private animeService: AnimeService
  ) {
    this.user = this.animeService.getUser();

    this.userChangeSubscription = this.animeService.userChange.subscribe((user: User) => {
      this.user = user;
    });
  }

  ngOnInit(): void {
    if (this.media && this.media.mediaListEntry && !this.listEntry) {
      this.listEntry = this.media.mediaListEntry;
    }
  }

  ngOnDestroy(): void {
    this.userChangeSubscription.unsubscribe();
  }

  saveToList(): void {
    this.showFormModal().afterClosed().subscribe((result) => {
      if (result) {
        if (result.savedEntry) {
          this.showSavedEntryToast(result.savedEntry);
        }
        if (result.deletedEntry) {
          this.showDeletedEntryToast(result.deletedEntry);
        }

        this.onUpdate.emit(result.savedEntry || result.deletedEntry);
      }
    });
  }

  toggleFavourite(): void {
    const targetEntry: ListEntry = this.getListEntry();

    this.animeService.toggleFavouriteEntry(targetEntry).subscribe((response) => {
      const success: boolean = response.data.ToggleFavourite !== undefined;
      if (success) {
        this.showToggledFavouriteToast(targetEntry);
        this.onUpdate.emit(targetEntry);
      }
    });
  }

  deleteEntry(): void {
    const targetEntry: ListEntry = this.getListEntry();

    this.animeService.deleteListEntry(targetEntry).subscribe((response) => {
      const success: boolean = response.data.DeleteMediaListEntry.deleted === true;
      if (success) {
        this.showDeletedEntryToast(targetEntry);
        this.onUpdate.emit(targetEntry);
      }
    });
  }

  showDetail(): void {
    let config: any = Object.assign({}, modalConfig);
    config.maxWidth = '800px';
    config.data = {
      media: this.media
    };

    this.dialog.open(MediaDetailModalComponent, config);
  }

  viewOnAniList(): void {
    window.open(`https://anilist.co/anime/${this.media.id}`);
  }

  isUpdateAvailable(): boolean {
    return !!this.listEntry && !!this.user;
  }

  private getListEntry(): ListEntry {
    const mediaCopy: Media = Object.assign({}, this.media);
    mediaCopy.mediaListEntry = undefined;

    const listEntryCopy: ListEntry = Object.assign({}, this.listEntry);
    listEntryCopy.media = mediaCopy;

    return listEntryCopy;
  }

  private showFormModal(): MatDialogRef<ListEntryFormModalComponent> {
    let config: any = Object.assign({}, modalConfig);
    config.data = {
      listEntry: this.listEntry,
      media: this.media
    };

    return this.dialog.open(ListEntryFormModalComponent, config);
  }

  private showSavedEntryToast(listEntry: ListEntry): void {
    this.showToast(`Updated list entry for "${listEntry.media.title.romaji}"`);
  }

  private showToggledFavouriteToast(listEntry: ListEntry): void {
    this.showToast(`Toggled entry "${listEntry.media.title.romaji}" as favourite`);
  }

  private showDeletedEntryToast(listEntry: ListEntry): void {
    this.showToast(`Deleted list entry for "${listEntry.media.title.romaji}"`);
  }

  private showToast(message: string): void {
    this.matSnackBar.open(message, undefined, {
      duration: 10000,
    });
  }

}
