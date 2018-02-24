import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { AnimeService } from '../../providers/anime.service';
import { ListEntry } from '../../models/anilist/listEntry';
import { Media } from '../../models/anilist/media';

@Component({
  selector: 'app-list-entry-form-modal',
  templateUrl: './list-entry-form-modal.component.html',
  styleUrls: ['./list-entry-form-modal.component.scss']
})
export class ListEntryFormModalComponent {
  media: Media;
  listEntry: ListEntry;
  listEntryForm: FormGroup;

  constructor(
    private animeService: AnimeService,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ListEntryFormModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    this.media = data.media;
    this.listEntry = data.listEntry;
    this.setupForm();
  }

  private setupForm(): void {
    this.listEntryForm = this.formBuilder.group({
      score: [undefined, [Validators.max(100), Validators.min(0)]],
      favourite: [false]
    });
  }

  saveEntry(): void {
    const listEntry: ListEntry = {
      media: this.media,
      scoreRaw: this.listEntryForm.value.score
    };

    this.animeService.saveListEntry(listEntry).subscribe((response) => {
      const success: boolean = response.data.SaveMediaListEntry.id !== undefined;
      if (success) {
        listEntry.media = this.media;
        this.dialogRef.close({
          savedEntry: listEntry
        });
      }
    });
  }

  deleteEntry(event: Event): void {
    event.preventDefault();

    this.animeService.deleteListEntry(this.listEntry).subscribe((response) => {
      const success: boolean = response.data.DeleteMediaListEntry.deleted === true;
      if (success) {
        this.dialogRef.close({
          deletedEntry: this.listEntry
        });
      }
    });
  }

  dismiss(event: Event): void {
    event.preventDefault();
    this.dialogRef.close();
  }

}
