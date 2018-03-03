import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { AnimeService } from '../../providers/anime.service';
import { ListEntry } from '../../models/anilist/listEntry';
import { Media } from '../../models/anilist/media';
import { MediaStatus } from '../../models/anilist/mediaStatus';

@Component({
  selector: 'app-list-entry-form-modal',
  templateUrl: './list-entry-form-modal.component.html',
  styleUrls: ['./list-entry-form-modal.component.scss']
})
export class ListEntryFormModalComponent {
  listEntryStatus: string;
  listEntry: ListEntry;
  media: Media;
  listEntryForm: FormGroup;
  mediaStatusList: any[] = MediaStatus.LIST;

  constructor(
    private animeService: AnimeService,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ListEntryFormModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    this.listEntry = data.listEntry;
    this.listEntryStatus = data.listEntryStatus;
    this.media = data.media;
    this.setupForm();
  }

  private setupForm(): void {
    this.listEntryForm = this.formBuilder.group({
      statusValue: [this.listEntryStatus || MediaStatus.COMPLETED, [Validators.required]],
      score: [undefined, [Validators.required, Validators.max(10), Validators.min(0)]]
    });
  }

  saveEntry(): void {
    const listEntry: ListEntry = {
      media: this.media,
      scoreRaw: this.listEntryForm.value.score * 10
    };
    const listEntryRequest: any = Object.assign({}, listEntry);
    listEntryRequest.statusValue = this.listEntryForm.value.statusValue;

    this.animeService.saveListEntry(listEntryRequest).subscribe((response) => {
      const success: boolean = response.data.SaveMediaListEntry.id !== undefined;
      if (success) {
        listEntry.media = this.media;
        this.dialogRef.close({
          savedEntry: listEntry
        });
      }
    });
  }

  deleteEntry(event?: Event): void {
    this.preventDefault(event);

    this.animeService.deleteListEntry(this.listEntry).subscribe((response) => {
      const success: boolean = response.data.DeleteMediaListEntry.deleted === true;
      if (success) {
        this.dialogRef.close({
          deletedEntry: this.listEntry
        });
      }
    });
  }

  dismiss(event?: Event): void {
    this.preventDefault(event);

    this.dialogRef.close();
  }

  private preventDefault(event: Event): void {
    if (event) {
      event.preventDefault();
    }
  }

}
