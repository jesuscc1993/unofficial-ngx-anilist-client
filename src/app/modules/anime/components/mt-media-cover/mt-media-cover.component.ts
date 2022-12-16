import { takeUntil, tap } from 'rxjs/operators';

import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { defaultModalOptions } from '../../../../app.constants';
import {
  WithObservableOnDestroy,
} from '../../../shared/components/with-observable-on-destroy/with-observable-on-destroy.component';
import { ListEntry } from '../../../shared/types/anilist/listEntry.types';
import { Media } from '../../../shared/types/anilist/media.types';
import { ModalOrigin } from '../../../shared/types/modal.types';
import { AnimeCommands } from '../../commands/anime.commands';
import {
  MtListEntryFormModalComponent,
} from '../modals/mt-list-entry-form-modal/mt-list-entry-form-modal.component';
import {
  MtMediaDetailModalComponent,
} from '../modals/mt-media-detail-modal/mt-media-detail-modal.component';

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
      maxWidth: '800px',
      data: {
        origin: ModalOrigin.View,
        media: this.media,
      },
    });
  }

  openEditionModal(event: Event) {
    event.stopPropagation();

    this.dialog.open(MtListEntryFormModalComponent, {
      ...defaultModalOptions,
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
      .deleteAnimeListEntry(this.listEntry)
      .pipe(
        takeUntil(this.destroyed$),
        tap((success) => {
          if (success) {
            this.dialog.closeAll();
          }
        })
      )
      .subscribe();
  }
}
