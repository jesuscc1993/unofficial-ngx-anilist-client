import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Media } from '../../models/anilist/media';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    this.media = data.media;
    this.setupForm();
  }

  private setupForm(): void {
    this.listEntryForm = this.formBuilder.group({
      score: [undefined],
      favourite: [false]
    });
  }

  submit(): void {

  }

}
