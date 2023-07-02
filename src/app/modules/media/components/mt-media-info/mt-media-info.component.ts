import { Component, Input } from '@angular/core';

import { getFormattedAnimeDuration } from '../../../anime/domain/anime.domain';
import { FuzzyDate } from '../../../shared/types/anilist/dataTypes.types';
import { Anime, Media, MediaType } from '../../../shared/types/anilist/media.types';
import {
  getFormattedFuzzyDate, getMediaProgress, getMediaTypeProgressLiteral,
  getSanitizedMediaDescription,
} from '../../domain/media.domain';

@Component({
  selector: 'mt-media-info',
  templateUrl: './mt-media-info.component.html',
  styleUrls: ['./mt-media-info.component.scss'],
})
export class MtMediaInfoComponent {
  @Input() media: Media;
  @Input() showAsColumns?: boolean;
  @Input() generalInfoOnly?: boolean;

  getFormattedAnimeDuration(anime: Anime) {
    return getFormattedAnimeDuration(anime);
  }

  getFormattedFuzzyDate(fuzzyDatemedia: FuzzyDate) {
    return getFormattedFuzzyDate(fuzzyDatemedia);
  }

  getMediaTypeProgressLiteral(mediaType: MediaType) {
    return getMediaTypeProgressLiteral(mediaType);
  }

  getMediaProgress(media: Media) {
    return getMediaProgress(media);
  }

  sanitizeDescription() {
    return getSanitizedMediaDescription(this.media);
  }
}
