import { takeUntil, tap } from 'rxjs/operators';

import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import {
  defaultMediumModalOptions,
  defaultModalOptions,
} from '../../../../app.constants';
import { AnimeCommands } from '../../../anime/commands/anime.commands';
import { WithObservableOnDestroy } from '../../../shared/components/with-observable-on-destroy/with-observable-on-destroy.component';
import { getSizedCoverImage } from '../../../shared/domain/shared.domain';
import { ListEntry } from '../../../shared/types/anilist/listEntry.types';
import { Media } from '../../../shared/types/anilist/media.types';
import { ModalOrigin } from '../../../shared/types/modal.types';
import { MtListEntryFormModalComponent } from '../modals/mt-list-entry-form-modal/mt-list-entry-form-modal.component';
import { MtMediaDetailModalComponent } from '../modals/mt-media-detail-modal/mt-media-detail-modal.component';

@Component({
  selector: 'mt-media-cover',
  templateUrl: './mt-media-cover.component.html',
  styleUrls: ['./mt-media-cover.component.scss'],
})
export class MtMediaCoverComponent
  extends WithObservableOnDestroy
  implements OnInit
{
  @Input() listEntry?: ListEntry;
  @Input() media: Media;
  @Input() showStatusBadge?: boolean;

  getSizedCoverImage = getSizedCoverImage;

  constructor(private dialog: MatDialog, private animeCommands: AnimeCommands) {
    super();

    this.openDetailModal = this.openDetailModal.bind(this);
    this.openEditionModal = this.openEditionModal.bind(this);
  }

  ngOnInit() {
    if (!this.media && this.listEntry) {
      const { media, ...mediaListEntry } = this.listEntry;
      this.media = {
        ...media,
        mediaListEntry,
      } as Media;
    }
  }

  openDetailModal(event: Event) {
    event.stopPropagation();

    this.dialog.open(MtMediaDetailModalComponent, {
      ...defaultModalOptions,
      data: {
        origin: ModalOrigin.View,
        media: this.media,
      },
    });
  }

  openEditionModal(event: Event) {
    event.stopPropagation();

    this.dialog.open(MtListEntryFormModalComponent, {
      ...defaultMediumModalOptions,
      data: {
        origin: 'edit',
        listEntry: { ...this.listEntry, media: this.media },
        media: this.media,
      },
    });
  }

  deleteEntry(event: Event) {
    event.stopPropagation();

    this.animeCommands
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
