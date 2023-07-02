import { takeUntil, tap } from 'rxjs/operators';

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { defaultModalOptions } from '../../../../../app.constants';
import { AnimeCommands } from '../../../../anime/commands/anime.commands';
import {
  WithObservableOnDestroy,
} from '../../../../shared/components/with-observable-on-destroy/with-observable-on-destroy.component';
import { ListEntry, ListEntryStatus } from '../../../../shared/types/anilist/listEntry.types';
import { Media } from '../../../../shared/types/anilist/media.types';
import { ModalOrigin } from '../../../../shared/types/modal.types';
import {
  MtListEntryFormModalComponent,
} from '../mt-list-entry-form-modal/mt-list-entry-form-modal.component';

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
    private dialog: MatDialog,
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

  openEditionModal() {
    this.dialog.open(MtListEntryFormModalComponent, {
      ...defaultModalOptions,
      data: {
        origin: this.origin || 'edit',
        listEntry: { ...this.media.mediaListEntry, media: this.media },
        media: this.media,
      },
    });
  }

  setAsPlanning() {
    this.animeCommands
      .saveMediaWithStatus(this.media, ListEntryStatus.PLANNING)
      .pipe(
        takeUntil(this.destroyed$),
        tap((savedListEntry) => {
          const success = savedListEntry.id !== undefined;
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
