import { takeUntil, tap } from 'rxjs/operators';

import { Component, inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { Router } from '@angular/router';

import { mediumModalOptions } from '../../../../../app.constants';
import { AnimeCommands } from '../../../../anime/commands/anime.commands';
import { MangaCommands } from '../../../../manga/commands/manga.commands';
import { WithObservableOnDestroy } from '../../../../shared/components/with-observable-on-destroy/with-observable-on-destroy.component';
import {
  ListEntry,
  ListEntryStatus,
} from '../../../../shared/types/anilist/listEntry.types';
import { Media } from '../../../../shared/types/anilist/media.types';
import { ModalOrigin } from '../../../../shared/types/modal.types';
import { MediaCommands } from '../../../commands/media.commands.interface';
import { getMediaTitle, isAnime } from '../../../domain/media.domain';
import { MtListEntryFormModalComponent } from '../mt-list-entry-form-modal/mt-list-entry-form-modal.component';

type MediaDetailModalParameters = {
  media: Media;
  origin: ModalOrigin;
};

@Component({
  selector: 'mt-media-detail-modal',
  templateUrl: './mt-media-detail-modal.component.html',
  styleUrls: ['./mt-media-detail-modal.component.scss'],
  standalone: false,
})
export class MtMediaDetailModalComponent
  extends WithObservableOnDestroy
  implements OnInit
{
  private animeCommands = inject(AnimeCommands);
  private dialog = inject(MatDialog);
  private dialogRef =
    inject<MatDialogRef<MtMediaDetailModalComponent>>(MatDialogRef);
  private mangaCommands = inject(MangaCommands);
  private router = inject(Router);
  protected data = inject<MediaDetailModalParameters>(MAT_DIALOG_DATA);

  readonly getMediaTitle = getMediaTitle;
  readonly origin: ModalOrigin;

  media: Media;
  mediaCommands!: MediaCommands;

  constructor() {
    super();

    this.origin = this.data.origin;
    this.media = this.data.media;
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
