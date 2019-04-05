import { Component } from '@angular/core';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Media } from '../../../shared/types/anilist/media.types';
import { AuthStore } from '../../../shared/store/auth.store';
import { AnimeService } from '../../services/anime.service';

@Component({
  selector: 'mt-list-related-media',
  templateUrl: './mt-list-related-media.component.html',
  styleUrls: ['./mt-list-related-media.component.scss'],
})
export class MtListRelatedMediaComponent {
  mediaList: Media[];
  maxEntries: number = 20;

  ready: boolean;
  error: Error;

  constructor(private animeService: AnimeService, private authStore: AuthStore) {
    this.animeService
      .getRelatedAnimeMedia(this.authStore.getUser())
      .pipe(
        tap(relatedMediaList => {
          this.mediaList = relatedMediaList;
        }),
        catchError(error => {
          this.error = error;
          this.ready = true;

          return of();
        })
      )
      .subscribe();
  }
}
