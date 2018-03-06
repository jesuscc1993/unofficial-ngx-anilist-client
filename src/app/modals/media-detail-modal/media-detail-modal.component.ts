import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Media } from '../../models/anilist/media';

@Component({
  selector: 'app-media-detail-modal',
  templateUrl: './media-detail-modal.component.html',
  styleUrls: ['./media-detail-modal.component.scss']
})
export class MediaDetailModalComponent {
  media: Media;

  constructor(
    private dialogRef: MatDialogRef<MediaDetailModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    this.media = data.media;
  }

  dismiss(event?: Event): void {
    this.dialogRef.close();
  }

}
