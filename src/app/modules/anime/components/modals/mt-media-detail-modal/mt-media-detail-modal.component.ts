import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { takeUntil, tap } from 'rxjs/operators';

import {
  WithObservableOnDestroy,
} from '../../../../shared/components/with-observable-on-destroy/with-observable-on-destroy.component';
import { ListEntry } from '../../../../shared/types/anilist/listEntry.types';
import { Media } from '../../../../shared/types/anilist/media.types';
import { ModalOrigin } from '../../../../shared/types/modal.types';
import { AnimeCommands } from '../../../commands/anime.commands';

type MediaDetailModalParameters = {
  media: Media;
  origin: ModalOrigin;
};

@Component({
  selector: 'mt-media-detail-modal',
  templateUrl: './mt-media-detail-modal.component.html',
  styleUrls: ['./mt-media-detail-modal.component.scss'],
})
export class MtMediaDetailModalComponent extends WithObservableOnDestroy {
  readonly origin: ModalOrigin;
  media: Media;

  constructor(
    private dialogRef: MatDialogRef<MtMediaDetailModalComponent>,
    private router: Router,
    private animeCommands: AnimeCommands,
    @Inject(MAT_DIALOG_DATA) protected data: MediaDetailModalParameters
  ) {
    super();

    this.origin = data.origin;
    this.media = data.media;
  }

  dismiss() {
    this.dialogRef.close();
  }

  navigateToDetail() {
    this.router.navigate(['anime-detail/', this.media.id]);
    this.dismiss();
  }

  setAsPlanning() {
    this.animeCommands
      .saveMediaWithStatus(this.media, 'PLANNING')
      .pipe(
        takeUntil(this.destroyed$),
        tap(savedListEntry => {
          const success: boolean = savedListEntry.id !== undefined;
          if (success) {
            this.dismiss();
          }
        })
      )
      .subscribe();
  }

  onListEntryChanges(listEntry: ListEntry) {
    this.media = listEntry.media;
  }
}
