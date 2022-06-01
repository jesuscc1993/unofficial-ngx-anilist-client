import { Component, Input } from '@angular/core';

import { FuzzyDate } from '../../../shared/types/anilist/dataTypes.types';
import { Anime, Media } from '../../../shared/types/anilist/media.types';
import {
  getFormattedFuzzyDate, getFormattedMediaDuration, getSanitizedMediaDescription,
} from '../../domain/media.domain';

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

  getFormattedFuzzyDate(fuzzyDatemedia: FuzzyDate) {
    return getFormattedFuzzyDate(fuzzyDatemedia);
  }

  sanitizeDescription() {
    return getSanitizedMediaDescription(this.anime);
  }
}
