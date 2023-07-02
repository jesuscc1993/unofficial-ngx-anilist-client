import { Component, Input } from '@angular/core';

import { getFormattedAnimeDuration } from '../../../anime/domain/anime.domain';
import { Media } from '../../../shared/types/anilist/media.types';
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

  readonly getFormattedAnimeDuration = getFormattedAnimeDuration;
  readonly getFormattedFuzzyDate = getFormattedFuzzyDate;
  readonly getMediaProgress = getMediaProgress;
  readonly getMediaTypeProgressLiteral = getMediaTypeProgressLiteral;

  sanitizeDescription() {
    return getSanitizedMediaDescription(this.media);
  }
}
