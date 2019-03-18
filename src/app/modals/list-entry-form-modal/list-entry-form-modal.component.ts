import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { AnimeService } from '../../services/anime.service';
import { ListEntryStatus } from '../../types/anilist/enums/listEntryStatus';
import { ListEntry } from '../../types/anilist/listEntry.types';
import { Media } from '../../types/anilist/media.types';

type ListEntryFormModalParameters = {
  listEntry: ListEntry;
  media: Media;
};

@Component({
  selector: 'app-list-entry-form-modal',
  templateUrl: './list-entry-form-modal.component.html',
  styleUrls: ['./list-entry-form-modal.component.scss']
})
export class ListEntryFormModalComponent {
  originalEntry: ListEntry;
  listEntry: ListEntry;
  media: Media;
  listEntryForm: FormGroup;
  liestEntryStatusList = ListEntryStatus.LIST;

  constructor(
    private animeService: AnimeService,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ListEntryFormModalComponent>,
    @Inject(MAT_DIALOG_DATA) protected data: ListEntryFormModalParameters
  ) {
    this.listEntry = data.listEntry;
    this.media = data.media;
    this.setupForm();
  }

  private setupForm() {
    if (this.listEntry) {
      this.originalEntry = { ...this.listEntry };
    }

    this.listEntryForm = this.formBuilder.group({
      status: [this.originalEntry && this.originalEntry.status ? this.originalEntry.status : ListEntryStatus.COMPLETED, [Validators.required]],
      score: [this.originalEntry && this.originalEntry.scoreRaw ? this.originalEntry.scoreRaw / 10 : undefined, [Validators.max(10), Validators.min(0)]]
    });
  }

  saveEntry() {
    const entryToSave: ListEntry = this.getFormEntry();

    this.animeService.saveAnimeListEntry(entryToSave).subscribe(response => {
      const success: boolean = response.data.SaveMediaListEntry.id !== undefined;
      if (success) {
        if (this.listEntry) {
          this.listEntry.scoreRaw = entryToSave.scoreRaw;
          this.listEntry.status = entryToSave.status;
        }

        this.dialogRef.close(this.listEntry);
      }
    });
  }

  deleteEntry(event?: Event) {
    this.preventDefault(event);

    this.animeService.deleteAnimeListEntry(this.listEntry).subscribe(response => {
      const success: boolean = response.data.DeleteMediaListEntry.deleted === true;
      if (success) {
        this.dialogRef.close({
          deletedEntry: this.listEntry
        });
      }
    });
  }

  dismiss(event?: Event) {
    this.preventDefault(event);

    this.dialogRef.close();
  }

  isSubmitEnabled(): boolean {
    return !this.originalEntry || this.getFormEntry() !== this.originalEntry;
  }

  private getFormEntry(): ListEntry {
    return {
      media: this.media,
      scoreRaw: this.listEntryForm.value.score * 10,
      status: this.listEntryForm.value.status
    };
  }

  private preventDefault(event: Event) {
    if (event) {
      event.preventDefault();
    }
  }
}
