import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { tap } from 'rxjs/operators';

import { ToastService } from '../../../../shared/services/toast.service';
import { Media } from '../../../../shared/types/anilist/media.types';
import { ModalOrigin } from '../../../../shared/types/modal.types';
import { AnimeService } from '../../../services/anime.service';

type MediaDetailModalParameters = {
  media: Media;
  origin: ModalOrigin;
};

@Component({
  selector: 'mt-media-detail-modal',
  templateUrl: './mt-media-detail-modal.component.html',
  styleUrls: ['./mt-media-detail-modal.component.scss'],
})
export class MtMediaDetailModalComponent {
  readonly origin: ModalOrigin;
  readonly media: Media;

  constructor(
    private dialogRef: MatDialogRef<MtMediaDetailModalComponent>,
    private router: Router,
    private translateService: TranslateService,
    private toastService: ToastService,
    private animeService: AnimeService,
    @Inject(MAT_DIALOG_DATA) protected data: MediaDetailModalParameters
  ) {
    this.origin = data.origin;
    this.media = data.media;
  }

  dismiss() {
    this.dialogRef.close();
  }

  doNavigateToDetail() {
    this.router.navigate(['anime-detail/', this.media.id]);
    this.dismiss();
  }

  doSetAsPlanning() {
    this.animeService
      .saveWithStatus(this.media, 'PLANNING')
      .pipe(
        tap(savedListEntry => {
          const success: boolean = savedListEntry.id !== undefined;
          if (success) {
            this.toastService.showToast(
              this.translateService.instant('listEntry.update.success', {
                mediaTitle: savedListEntry.media.title.romaji,
              })
            );
          }
          this.dismiss();
        })
      )
      .subscribe();
  }
}
