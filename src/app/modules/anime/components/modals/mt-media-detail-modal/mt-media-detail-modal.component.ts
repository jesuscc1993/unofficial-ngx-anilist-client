import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

import { Media } from '../../../../shared/types/anilist/media.types';

type MediaDetailModalParameters = {
  media: Media;
};

@Component({
  selector: 'mt-media-detail-modal',
  templateUrl: './mt-media-detail-modal.component.html',
  styleUrls: ['./mt-media-detail-modal.component.scss'],
})
export class MtMediaDetailModalComponent {
  media: Media;

  constructor(
    private dialogRef: MatDialogRef<MtMediaDetailModalComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) protected data: MediaDetailModalParameters
  ) {
    this.media = data.media;
  }

  dismiss() {
    this.dialogRef.close();
  }

  goToDetail() {
    this.router.navigate(['anime-detail/', this.media.id]);
    this.dismiss();
  }
}
