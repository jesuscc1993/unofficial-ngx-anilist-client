import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';

import { AnimeService } from '../../services/anime.service';
import { Anime } from '../../types/anilist/anime.types';

@Component({
  selector: 'mt-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.scss'],
})
export class AnimeDetailComponent {
  anime: Anime;

  searching: boolean;
  errorGotten: boolean;

  constructor(private activatedRoute: ActivatedRoute, private animeService: AnimeService) {
    const animeId: number = this.activatedRoute.snapshot.params.id;
    if (animeId && animeId > 0) {
      this.getEntry(animeId);
    }
  }

  private getEntry(animeId: number) {
    this.searching = true;
    this.errorGotten = false;

    this.animeService
      .searchAnime({ id: animeId })
      .pipe(
        tap(
          response => {
            this.anime = response.media.length > 0 && response.media[0];
            this.searching = false;
          },
          () => {
            this.errorGotten = true;
            this.searching = false;
          }
        )
      )
      .subscribe();
  }
}
