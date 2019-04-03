import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { defaultModalOptions } from '../../../../app.constants';
import { ListEntry } from '../../../../types/anilist/listEntry.types';
import { Media } from '../../../../types/anilist/media.types';
import { MtMediaDetailModalComponent } from '../modals/mt-media-detail-modal/mt-media-detail-modal.component';

@Component({
  selector: 'mt-cover-media',
  templateUrl: './mt-cover-media.component.html',
  styleUrls: ['./mt-cover-media.component.scss'],
})
export class MtCoverMediaComponent implements OnInit {
  @Input() listEntry?: ListEntry;
  @Input() media: Media;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    if (!this.media && this.listEntry) {
      this.media = this.listEntry.media;
      delete this.listEntry.media;
      this.media.mediaListEntry = this.listEntry;
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
}
