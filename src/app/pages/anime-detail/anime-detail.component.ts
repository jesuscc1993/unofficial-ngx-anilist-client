import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AnimeService } from '../../providers/anime.service';
import { Anime } from '../../models/anilist/anime';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.scss']
})
export class AnimeDetailComponent {

  anime: Anime;

  searching: boolean;
  errorGotten: boolean;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private animeService: AnimeService
  ) {
    const animeId: number = this.activatedRoute.snapshot.params.id;
    if (animeId && animeId > 0) {
      this.getEntry(animeId);
    }
  }

  private getEntry(animeId: number): void {
    this.searching = true;
    this.errorGotten = false;

    this.animeService.search({ id: animeId }).subscribe((response: any) => {
      this.anime = response.media.length > 0 ? response.media[0] : undefined;
      this.searching = false;

    }, () => {
      this.errorGotten = true;
      this.searching = false;
    });
  }

}
