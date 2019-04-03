import { Component, Input } from '@angular/core';

import { Anime, Media } from '../../../../types/anilist/media.types';
import { getFormattedMediaDuration } from '../../domain/anime.domain';

@Component({
  selector: 'mt-anime-info',
  templateUrl: './mt-anime-info.component.html',
  styleUrls: ['./mt-anime-info.component.scss'],
})
export class MtAnimeInfoComponent {
  @Input() anime: Anime;
  @Input() showAsColumns?: boolean;
  @Input() generalInfoOnly?: boolean;

  getFormattedMediaDuration(media: Media) {
    return getFormattedMediaDuration(media);
  }
}
