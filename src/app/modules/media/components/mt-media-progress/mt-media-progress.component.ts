import { Component, Input } from '@angular/core';

import { ListEntry } from '../../../shared/types/anilist/listEntry.types';
import { Media } from '../../../shared/types/anilist/media.types';
import {
  getMediaLength,
  getMediaTypeProgressLiteral,
} from '../../domain/media.domain';

@Component({
  selector: 'mt-media-progress',
  templateUrl: './mt-media-progress.component.html',
  styleUrls: ['./mt-media-progress.component.scss'],
  host: {
    '[class.float]': 'shouldFloat',
  },
  standalone: false,
})
export class MtMediaProgressComponent {
  @Input() isPill = false;
  @Input() listEntry?: ListEntry;
  @Input() media!: Media;
  @Input() shouldFloat = false;

  readonly getMediaLength = getMediaLength;
  readonly getMediaTypeProgressLiteral = getMediaTypeProgressLiteral;

  getProgress() {
    const current = this.listEntry?.progress;
    const total = this.getMediaLength(this.media);
    if (current === total) {
      return `<strong>${current}</strong>`;
    } else {
      return `<span ${total >= 100 ? 'class="small-text"' : ''}>${current ?? ''}/${total}</span>`;
    }
  }
}
