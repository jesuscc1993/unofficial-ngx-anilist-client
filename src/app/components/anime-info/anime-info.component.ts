import { Component, Input } from '@angular/core';

import { AnimeService } from '../../providers/anime.service';
import { Anime } from '../../models/anilist/anime';
import { Media } from '../../models/anilist/media';

@Component({
  selector: 'app-anime-info',
  templateUrl: './anime-info.component.html',
  styleUrls: ['./anime-info.component.scss']
})
export class AnimeInfoComponent {
  @Input() anime: Anime;
  @Input() showAsColumns?: boolean;
  @Input() generalInfoOnly?: boolean;

  constructor(
    private animeService: AnimeService
  ) {

  }

  getFormattedMediaDuration(media: Media): string {
    return this.animeService.getFormattedMediaDuration(media);
  }

}
