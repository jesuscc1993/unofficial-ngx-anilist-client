import { Component, inject, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ListEntry } from '../../../shared/types/anilist/listEntry.types';
import { Media } from '../../../shared/types/anilist/media.types';
import { getScoreColor, getScoreTooltip } from '../../domain/media.domain';

@Component({
  selector: 'mt-media-score',
  templateUrl: './mt-media-score.component.html',
  styleUrls: ['./mt-media-score.component.scss'],
  host: {
    '[class.float]': 'shouldFloat',
  },
  standalone: false,
})
export class MtMediaScoreComponent {
  private translate = inject(TranslateService);

  @Input() isPill = false;
  @Input() listEntry?: ListEntry;
  @Input() media!: Media;
  @Input() shouldFloat = false;

  readonly getScoreColor = getScoreColor;

  getScore() {
    return this.listEntry?.scoreRaw || this.media.averageScore;
  }

  getTooltip() {
    return getScoreTooltip(this.translate, this.media, this.listEntry);
  }
}
