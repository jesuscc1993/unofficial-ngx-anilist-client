import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ListEntry } from '../../models/anilist/listEntry';
import { Media } from '../../models/anilist/media';
import { MediaDetailModalComponent } from '../../modals/media-detail-modal/media-detail-modal.component';
import { modalConfig } from '../../app.constants';

@Component({
  selector: 'app-cover-media',
  templateUrl: './cover-media.component.html',
  styleUrls: ['./cover-media.component.scss']
})
export class CoverMediaComponent implements OnInit {
  @Input() listEntry?: ListEntry;
  @Input() media: Media;

  constructor(
    private dialog: MatDialog
  ) {

  }

  ngOnInit(): void {
    if (!this.media && this.listEntry) {
      this.media = this.listEntry.media;
      delete this.listEntry.media;
      this.media.mediaListEntry = this.listEntry;
    }
  }

  showDetail(): void {
    let config: any = Object.assign({}, modalConfig);
    config.maxWidth = '800px';
    config.data = {
      media: this.media
    };

    this.dialog.open(MediaDetailModalComponent, config);
  }

}
