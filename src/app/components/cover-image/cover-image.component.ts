import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';

import { AnimeService } from '../../providers/anime.service';
import { ListEntry } from '../../models/anilist/listEntry';
import { Media } from '../../models/anilist/media';
import { ListEntryFormModalComponent } from '../list-entry-form-modal/list-entry-form-modal.component';

@Component({
  selector: 'app-cover-image',
  templateUrl: './cover-image.component.html',
  styleUrls: ['./cover-image.component.scss']
})
export class CoverImageComponent {
  @Input() listEntryStatus?: string;
  @Input() listEntry?: ListEntry;
  @Input() media: Media;
  @Output() onUpdate?: EventEmitter<ListEntry> = new EventEmitter<ListEntry>();

  userListUrl: string = '/user-list';

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private animeService: AnimeService
  ) {

  }

  viewOnAniList(): void {
    window.open(`https://anilist.co/anime/${this.media.id}`);
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
    this.animeService.toggleFavouriteEntry(this.listEntry).subscribe((response) => {
      const success: boolean = response.data.ToggleFavourite !== undefined;
      if (success) {
        this.showToggledFavouriteToast(this.listEntry);
        this.onUpdate.emit(this.listEntry);
      }
    });
  }

  deleteEntry(): void {
    this.animeService.deleteListEntry(this.listEntry).subscribe((response) => {
      const success: boolean = response.data.DeleteMediaListEntry.deleted === true;
      if (success) {
        this.showDeletedEntryToast(this.listEntry);
        this.onUpdate.emit(this.listEntry);
      }
    });
  }

  private showFormModal(): MatDialogRef<ListEntryFormModalComponent> {
    return this.dialog.open(ListEntryFormModalComponent, {
      width: 'auto',
      maxWidth: '672px',
      data: {
        listEntryStatus: this.listEntryStatus,
        listEntry: this.listEntry,
        media: this.media
      }
    });
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
