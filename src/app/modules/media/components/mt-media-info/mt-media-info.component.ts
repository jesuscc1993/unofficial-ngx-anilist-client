import { Component, Input } from '@angular/core';

import { getFormattedAnimeDuration } from '../../../anime/domain/anime.domain';
import { staffRoles } from '../../../shared/constants/media.constants';
import { Media } from '../../../shared/types/anilist/media.types';
import {
  getFormattedFuzzyDate,
  getMediaProgress,
  getMediaTitle,
  getMediaTypeProgressLiteral,
  getSanitizedMediaDescription,
  getSourceLiteral,
} from '../../domain/media.domain';

@Component({
  selector: 'mt-media-info',
  templateUrl: './mt-media-info.component.html',
  styleUrls: ['./mt-media-info.component.scss'],
})
export class MtMediaInfoComponent {
  @Input() fullDetail? = true;
  @Input() generalInfoOnly?: boolean;
  @Input() media: Media;
  @Input() showAsColumns?: boolean;

  readonly staffRoles = staffRoles;

  readonly getFormattedAnimeDuration = getFormattedAnimeDuration;
  readonly getFormattedFuzzyDate = getFormattedFuzzyDate;
  readonly getMediaProgress = getMediaProgress;
  readonly getMediaTitle = getMediaTitle;
  readonly getMediaTypeProgressLiteral = getMediaTypeProgressLiteral;
  readonly getSourceLiteral = getSourceLiteral;

  sanitizeDescription() {
    return getSanitizedMediaDescription(this.media);
  }
}
