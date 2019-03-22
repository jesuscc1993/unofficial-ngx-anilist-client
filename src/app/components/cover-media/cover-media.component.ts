import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { defaultModalOptions } from '../../app.constants';
import { MediaDetailModalComponent } from '../../modals/media-detail-modal/media-detail-modal.component';
import { ListEntry } from '../../types/anilist/listEntry.types';
import { Media } from '../../types/anilist/media.types';

@Component({
  selector: 'mt-cover-media',
  templateUrl: './cover-media.component.html',
  styleUrls: ['./cover-media.component.scss']
})
export class CoverMediaComponent implements OnInit {
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

  showDetail() {
    this.dialog.open(MediaDetailModalComponent, {
      ...defaultModalOptions,
      maxWidth: '800px',
      data: {
        media: this.media
      }
    });
  }
}
