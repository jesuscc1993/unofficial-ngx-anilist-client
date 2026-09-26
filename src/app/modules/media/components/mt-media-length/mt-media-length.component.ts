import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { ListEntry } from '../../../shared/types/anilist/listEntry.types';
import { Anime, Manga, Media } from '../../../shared/types/anilist/media.types';
import { getMediaLength, getMediaTypeProgressLiteral, isAnime } from '../../domain/media.domain';

@Component({
  selector: 'mt-media-length',
  templateUrl: './mt-media-length.component.html',
  styleUrls: ['./mt-media-length.component.scss'],
  host: {
    '[class.float]': 'shouldFloat',
  },
  standalone: false,
})
export class MtMediaLengthComponent implements OnChanges {
  @Input() isPill = false;
  @Input() listEntry?: ListEntry;
  @Input() media!: Media;
  @Input() shouldFloat = false;
  @Input() showProgress = true;

  readonly getMediaLength = getMediaLength;
  readonly getMediaTypeProgressLiteral = getMediaTypeProgressLiteral;

  anime?: Anime;
  manga?: Manga;
  length?: number;
  progress?: number;
  lengthText = '';
  smallText = false;

  ngOnChanges(changes: SimpleChanges) {
    this.anime = isAnime(this.media) ? (this.media as Anime) : undefined;
    this.manga = isAnime(this.media) ? undefined : (this.media as Manga);

    this.length = this.getMediaLength(this.media);

    if (changes['listEntry'] || changes['media'] || changes['showProgress']) {
      this.progress = this.showProgress ? (this.listEntry?.progress ?? 0) : 0;
      this.lengthText = this.length
        ? this.progress === this.length
          ? `${this.progress}`
          : `${this.progress ? `${this.progress}/` : ''}${this.length}`
        : '';

      this.smallText = this.lengthText.length > 5;
    }
  }
}
