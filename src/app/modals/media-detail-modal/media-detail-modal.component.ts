import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

import { Media } from '../../types/anilist/media.types';

type MediaDetailModalParameters = {
  media: Media;
};

@Component({
  selector: 'mt-media-detail-modal',
  templateUrl: './media-detail-modal.component.html',
  styleUrls: ['./media-detail-modal.component.scss']
})
export class MediaDetailModalComponent {
  media: Media;

  constructor(
    private dialogRef: MatDialogRef<MediaDetailModalComponent>,
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
