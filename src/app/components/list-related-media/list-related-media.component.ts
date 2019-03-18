import { Component } from '@angular/core';

import { AnimeService } from '../../services/anime.service';
import { AuthStore } from '../../store/auth.store';
import { Media } from '../../types/anilist/media.types';

@Component({
  selector: 'app-list-related-media',
  templateUrl: './list-related-media.component.html',
  styleUrls: ['./list-related-media.component.scss']
})
export class ListRelatedMediaComponent {
  mediaList: Media[];
  maxEntries: number = 20;

  ready: boolean;
  error: Error;

  constructor(private animeService: AnimeService, private authStore: AuthStore) {
    this.animeService.getRelatedAnimeMedia(this.authStore.getUser()).subscribe(
      relatedMediaList => {
        this.mediaList = relatedMediaList;
      },
      error => {
        this.error = error;
        this.ready = true;
      }
    );
  }
}
