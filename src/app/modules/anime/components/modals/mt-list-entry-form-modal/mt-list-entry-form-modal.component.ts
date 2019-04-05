import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { tap } from 'rxjs/operators';

import { ListEntry, ListEntryStatus } from '../../../../shared/types/anilist/listEntry.types';
import { Media } from '../../../../shared/types/anilist/media.types';
import { AnimeService } from '../../../services/anime.service';

type ListEntryFormModalParameters = {
  listEntry: ListEntry;
  media: Media;
};

@Component({
  selector: 'mt-list-entry-form-modal',
  templateUrl: './mt-list-entry-form-modal.component.html',
  styleUrls: ['./mt-list-entry-form-modal.component.scss'],
})
export class MtListEntryFormModalComponent {
  originalEntry: ListEntry;
  listEntry: ListEntry;
  media: Media;
  listEntryForm: FormGroup;
  listEntryStatusList: ListEntryStatus[] = ['COMPLETED', 'DROPPED', 'PAUSED', 'PLANNING', 'REPEATING', 'CURRENT'];

  constructor(
    private animeService: AnimeService,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<MtListEntryFormModalComponent>,
    @Inject(MAT_DIALOG_DATA) protected data: ListEntryFormModalParameters
  ) {
    this.listEntry = data.listEntry;
    this.media = data.media;

    if (this.listEntry) {
      this.originalEntry = { ...this.listEntry };
    }

    this.listEntryForm = this.formBuilder.group({
      status: [
        this.originalEntry && this.originalEntry.status ? this.originalEntry.status : 'COMPLETED',
        [Validators.required],
      ],
      score: [
        this.originalEntry && this.originalEntry.scoreRaw && this.originalEntry.scoreRaw / 10,
        [Validators.max(10), Validators.min(0)],
      ],
    });
  }

  saveEntry() {
    const entryToSave: ListEntry = this.getFormEntry();

    this.animeService
      .saveAnimeListEntry(entryToSave)
      .pipe(
        tap(savedListEntry => {
          const success: boolean = savedListEntry.id !== undefined;
          if (success) {
            if (this.listEntry) {
              this.listEntry = { ...this.listEntry, ...savedListEntry };
            }

            this.dialogRef.close({ savedListEntry });
          }
        })
      )
      .subscribe();
  }

  deleteEntry(event?: Event) {
    this.preventDefault(event);

    this.animeService
      .deleteAnimeListEntry(this.listEntry)
      .pipe(
        tap(deletedListEntry => {
          const success: boolean = deletedListEntry.deleted === true;
          if (success) {
            this.dialogRef.close({ deletedListEntry });
          }
        })
      )
      .subscribe();
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
      scoreRaw: Math.trunc(this.listEntryForm.value.score * 10),
      status: this.listEntryForm.value.status,
    };
  }

  private preventDefault(event: Event) {
    if (event) {
      event.preventDefault();
    }
  }
}
