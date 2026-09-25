import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { ListEntry } from '../../../shared/types/anilist/listEntry.types';
import { Media } from '../../../shared/types/anilist/media.types';
import { getMediaLength, getMediaTypeProgressLiteral } from '../../domain/media.domain';

@Component({
  selector: 'mt-media-progress',
  templateUrl: './mt-media-progress.component.html',
  styleUrls: ['./mt-media-progress.component.scss'],
  host: {
    '[class.float]': 'shouldFloat',
  },
  standalone: false,
})
export class MtMediaProgressComponent implements OnChanges {
  @Input() isPill = false;
  @Input() listEntry?: ListEntry;
  @Input() media!: Media;
  @Input() shouldFloat = false;

  readonly getMediaLength = getMediaLength;
  readonly getMediaTypeProgressLiteral = getMediaTypeProgressLiteral;

  mediaLength?: number;
  progress = '';
  smallText = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['listEntry'] || changes['media']) {
      this.mediaLength = this.getMediaLength(this.media);

      const current = this.listEntry?.progress;
      const text =
        current === this.mediaLength
          ? `${current}`
          : `${current ? `${current}/` : ''}${this.mediaLength}`;

      this.progress =
        current === this.mediaLength
          ? `<strong>${text}</strong>`
          : `<span>${text}</span>`;

      this.smallText = text.length > 5;
    }
  }
}
