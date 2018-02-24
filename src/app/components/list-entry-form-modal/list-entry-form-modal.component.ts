import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Media } from '../../models/anilist/media';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnimeService } from '../../providers/anime.service';
import { ListEntry } from '../../models/anilist/listEntry';

@Component({
  selector: 'app-list-entry-form-modal',
  templateUrl: './list-entry-form-modal.component.html',
  styleUrls: ['./list-entry-form-modal.component.scss']
})
export class ListEntryFormModalComponent {
  media: Media;
  listEntryForm: FormGroup;

  constructor(
    private animeService: AnimeService,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ListEntryFormModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    this.media = data.media;
    this.setupForm();
  }

  private setupForm(): void {
    this.listEntryForm = this.formBuilder.group({
      score: [undefined, [Validators.max(100), Validators.min(0)]],
      favourite: [false]
    });
  }

  submit(): void {
    const listEntry: ListEntry = {
      mediaId: this.media.id,
      scoreRaw: this.listEntryForm.value.score
    };

    this.animeService.saveListEntry(listEntry).subscribe((response) => {
      const success: boolean = response.data.SaveMediaListEntry.id !== undefined;
      if (success) {
        listEntry.media = this.media;
        this.dialogRef.close(listEntry);
      }
    });
  }

}
