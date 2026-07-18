import { Component, Input, OnChanges } from '@angular/core';

import { Anime, Manga, Media } from '../../../shared/types/anilist/media.types';
import {
  getMediaLength,
  getMediaTypeProgressLiteral,
  isAnime,
} from '../../domain/media.domain';

@Component({
  selector: 'mt-media-length',
  templateUrl: './mt-media-length.component.html',
  styleUrls: ['./mt-media-length.component.scss'],
  standalone: false,
})
export class MtMediaLengthComponent implements OnChanges {
  @Input() media!: Media;

  readonly getMediaLength = getMediaLength;
  readonly getMediaTypeProgressLiteral = getMediaTypeProgressLiteral;

  anime?: Anime;
  manga?: Manga;

  ngOnChanges() {
    this.anime = isAnime(this.media) ? (this.media as Anime) : undefined;
    this.manga = isAnime(this.media) ? undefined : (this.media as Manga);
  }
}
