import { takeUntil, tap } from 'rxjs/operators';

import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import {
  largeModalOptions,
  mediumModalOptions,
} from '../../../../app.constants';
import { AnimeCommands } from '../../../anime/commands/anime.commands';
import { MangaCommands } from '../../../manga/commands/manga.commands';
import { WithObservableOnDestroy } from '../../../shared/components/with-observable-on-destroy/with-observable-on-destroy.component';
import { subtractDays } from '../../../shared/domain/dates.domain';
import { sanitizeClassname } from '../../../shared/domain/shared.domain';
import { ListEntry } from '../../../shared/types/anilist/listEntry.types';
import { Media, MediaStatus } from '../../../shared/types/anilist/media.types';
import { ModalOrigin } from '../../../shared/types/modal.types';
import { MediaCommands } from '../../commands/media.commands.interface';
import {
  fuzzyDateToDate,
  getMediaProgress,
  getMediaTitle,
  getMediaTypeProgressLiteral,
  getSizedCoverImage,
  isAnime,
} from '../../domain/media.domain';
import { MtListEntryFormModalComponent } from '../modals/mt-list-entry-form-modal/mt-list-entry-form-modal.component';
import { MtMediaDetailModalComponent } from '../modals/mt-media-detail-modal/mt-media-detail-modal.component';

@Component({
  selector: 'mt-media-cover',
  templateUrl: './mt-media-cover.component.html',
  styleUrls: ['./mt-media-cover.component.scss'],
  standalone: false,
})
export class MtMediaCoverComponent
  extends WithObservableOnDestroy
  implements OnInit
{
  @Input() listEntry?: ListEntry;
  @Input() media: Media;
  @Input() showListEntryStatus?: boolean;
  @Input() showMediaStatus?: boolean;

  readonly getMediaProgress = getMediaProgress;
  readonly getMediaTitle = getMediaTitle;
  readonly getMediaTypeProgressLiteral = getMediaTypeProgressLiteral;
  readonly getSizedCoverImage = getSizedCoverImage;
  readonly sanitizeClassname = sanitizeClassname;

  mediaCommands: MediaCommands;
  daysToFinish?: number;

  constructor(
    private dialog: MatDialog,
    private animeCommands: AnimeCommands,
    private mangaCommands: MangaCommands
  ) {
    super();

    this.openDetailModal = this.openDetailModal.bind(this);
    this.openEditionModal = this.openEditionModal.bind(this);
  }

  ngOnInit() {
    if (isAnime(this.media)) {
      this.mediaCommands = this.animeCommands;
    } else {
      this.mediaCommands = this.mangaCommands;
    }

    if (!this.media && this.listEntry) {
      const { media, ...mediaListEntry } = this.listEntry;
      this.media = {
        ...media,
        mediaListEntry,
      } as Media;
    }

    if (this.showMediaStatus && this.media.status !== MediaStatus.FINISHED) {
      this.daysToFinish = subtractDays(
        fuzzyDateToDate(this.media.endDate),
        new Date()
      );
    }
  }

  openDetailModal(event: Event) {
    event.stopPropagation();

    this.dialog.open(MtMediaDetailModalComponent, {
      ...largeModalOptions,
      data: {
        origin: ModalOrigin.View,
        media: this.media,
      },
    });
  }

  openEditionModal(event: Event) {
    event.stopPropagation();

    this.dialog.open(MtListEntryFormModalComponent, {
      ...mediumModalOptions,
      data: {
        origin: 'edit',
        listEntry: { ...this.listEntry, media: this.media },
        media: this.media,
      },
    });
  }

  deleteEntry(event: Event) {
    event.stopPropagation();

    this.mediaCommands
      .deleteListEntry(this.listEntry)
      .pipe(
        tap((success) => {
          if (success) {
            this.dialog.closeAll();
          }
        }),
        takeUntil(this.destroyed$)
      )
      .subscribe();
  }
}
