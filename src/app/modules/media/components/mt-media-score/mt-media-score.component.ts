import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ListEntry } from '../../../shared/types/anilist/listEntry.types';
import { Media } from '../../../shared/types/anilist/media.types';
import { getScoreColor } from '../../domain/media.domain';

@Component({
  selector: 'mt-media-score',
  templateUrl: './mt-media-score.component.html',
  styleUrls: ['./mt-media-score.component.scss'],
  host: {
    '[class.float]': 'shouldFloat',
  },
  standalone: false,
})
export class MtMediaScoreComponent implements OnChanges {
  private translate = inject(TranslateService);

  @Input() isPill = false;
  @Input() listEntry?: ListEntry;
  @Input() media!: Media;
  @Input() shouldFloat = false;

  score?: number;
  scoreColor = '';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['listEntry'] || changes['media']) {
      this.score = this.listEntry?.scoreRaw || this.media?.averageScore;
      this.scoreColor = this.score ? getScoreColor(this.score) : '';
    }
  }

  getTooltip() {
    const tooltipLines: string[] = [];
    if (this.listEntry?.scoreRaw) {
      tooltipLines.push(
        this.formatTooltipLine('media.userScore', this.listEntry.scoreRaw)
      );
    }
    if (this.media.averageScore) {
      tooltipLines.push(
        this.formatTooltipLine('media.averageScore', this.media.averageScore)
      );
    }
    if (this.media.meanScore) {
      tooltipLines.push(
        this.formatTooltipLine('media.meanScore', this.media.meanScore)
      );
    }
    return tooltipLines.join('\n');
  }

  private formatTooltipLine(label: string, value: number) {
    return `${this.translate.instant(label)}: ${value}`;
  }
}
