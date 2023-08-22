import { takeUntil, tap } from 'rxjs/operators';

import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { mediumModalOptions } from '../../../../../app.constants';
import { AnimeCommands } from '../../../../anime/commands/anime.commands';
import { MangaCommands } from '../../../../manga/commands/manga.commands';
import {
  WithObservableOnDestroy,
} from '../../../../shared/components/with-observable-on-destroy/with-observable-on-destroy.component';
import { ListEntry, ListEntryStatus } from '../../../../shared/types/anilist/listEntry.types';
import { Media } from '../../../../shared/types/anilist/media.types';
import { ModalOrigin } from '../../../../shared/types/modal.types';
import { MediaCommands } from '../../../commands/media.commands.interface';
import { isAnime } from '../../../domain/media.domain';
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
export class MtMediaDetailModalComponent
  extends WithObservableOnDestroy
  implements OnInit
{
  readonly origin: ModalOrigin;
  media: Media;
  mediaCommands: MediaCommands;

  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<MtMediaDetailModalComponent>,
    private router: Router,
    private animeCommands: AnimeCommands,
    private mangaCommands: MangaCommands,
    @Inject(MAT_DIALOG_DATA) protected data: MediaDetailModalParameters
  ) {
    super();

    this.origin = data.origin;
    this.media = data.media;
  }

  ngOnInit() {
    this.mediaCommands = isAnime(this.media)
      ? this.animeCommands
      : this.mangaCommands;
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
      ...mediumModalOptions,
      data: {
        origin: this.origin || 'edit',
        listEntry: { ...this.media.mediaListEntry, media: this.media },
        media: this.media,
      },
    });
  }

  setAsPlanning() {
    this.mediaCommands
      .saveMediaWithStatus(this.media, ListEntryStatus.PLANNING)
      .pipe(
        tap((savedListEntry) => {
          const success = savedListEntry.id !== undefined;
          if (success) {
            this.dismiss();
          }
        }),
        takeUntil(this.destroyed$)
      )
      .subscribe();
  }

  onListEntryChanges(listEntry: ListEntry) {
    this.media = listEntry.media;
  }
}
