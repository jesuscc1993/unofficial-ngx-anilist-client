import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Media } from '../../models/anilist/media';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnimeService } from '../../providers/anime.service';

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
    this.animeService.saveListEntry({
      mediaId: this.media.id,
      scoreRaw: this.listEntryForm.value.score

    }).subscribe((response) => {
      this.dialogRef.close();
    });
  }

}
