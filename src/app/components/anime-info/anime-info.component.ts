import { Component, Input } from '@angular/core';

import { getFormattedMediaDuration } from '../../domain/anime.domain';
import { Anime } from '../../types/anilist/anime.types';
import { Media } from '../../types/anilist/media.types';

@Component({
  selector: 'app-anime-info',
  templateUrl: './anime-info.component.html',
  styleUrls: ['./anime-info.component.scss']
})
export class AnimeInfoComponent {
  @Input() anime: Anime;
  @Input() showAsColumns?: boolean;
  @Input() generalInfoOnly?: boolean;

  getFormattedMediaDuration(media: Media) {
    return getFormattedMediaDuration(media);
  }
}
