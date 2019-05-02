import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { defaultModalOptions } from '../../../../app.constants';
import { ListEntry } from '../../../shared/types/anilist/listEntry.types';
import { Media } from '../../../shared/types/anilist/media.types';
import { MtListEntryFormModalComponent } from '../modals/mt-list-entry-form-modal/mt-list-entry-form-modal.component';
import { MtMediaDetailModalComponent } from '../modals/mt-media-detail-modal/mt-media-detail-modal.component';

@Component({
  selector: 'mt-media-cover',
  templateUrl: './mt-media-cover.component.html',
  styleUrls: ['./mt-media-cover.component.scss'],
})
export class MtMediaCoverComponent implements OnInit {
  @Input() listEntry?: ListEntry;
  @Input() media: Media;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    if (!this.media && this.listEntry) {
      const { media, ...mediaListEntry } = this.listEntry;
      this.media = {
        ...media,
        mediaListEntry,
      } as Media;
    }
  }

  doOpenDetailModal() {
    this.dialog.open(MtMediaDetailModalComponent, {
      ...defaultModalOptions,
      maxWidth: '800px',
      data: {
        media: this.media,
      },
    });
  }

  doOpenEditionModal() {
    this.dialog.open(MtListEntryFormModalComponent, {
      ...defaultModalOptions,
      data: {
        listEntry: { ...this.listEntry, media: this.media },
        media: this.media,
      },
    });
  }
}
