import { Component, Input } from '@angular/core';

import { ListEntry } from '../../../shared/types/anilist/listEntry.types';
import { Media } from '../../../shared/types/anilist/media.types';

@Component({
  selector: 'mt-media-score',
  templateUrl: './mt-media-score.component.html',
  styleUrls: ['./mt-media-score.component.scss'],
})
export class MtMediaScoreComponent {
  @Input() listEntry?: ListEntry;
  @Input() media: Media;
}
