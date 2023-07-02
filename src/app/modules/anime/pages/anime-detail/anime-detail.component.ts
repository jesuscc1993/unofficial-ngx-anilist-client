import { takeUntil, tap } from 'rxjs/operators';

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {
  WithObservableOnDestroy,
} from '../../../shared/components/with-observable-on-destroy/with-observable-on-destroy.component';
import { TitleService } from '../../../shared/services/title.service';
import { Media } from '../../../shared/types/anilist/media.types';
import { AnimeCommands } from '../../commands/anime.commands';

@Component({
  selector: 'mt-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.scss'],
})
export class AnimeDetailPageComponent extends WithObservableOnDestroy {
  media: Media;

  searching: boolean;
  errorGotten: boolean;

  constructor(
    private titleService: TitleService,
    private activatedRoute: ActivatedRoute,
    private animeCommands: AnimeCommands
  ) {
    super();

    this.titleService.setTitle();

    const animeId = this.activatedRoute.snapshot.params.id as number;
    if (animeId && animeId > 0) {
      this.getEntry(animeId);
    }
  }

  private getEntry(animeId: number) {
    this.searching = true;
    this.errorGotten = false;

    this.animeCommands
      .queryMedia({ id: animeId })
      .pipe(
        tap(
          (response) => {
            this.media = response.media.length > 0 && response.media[0];
            this.titleService.setTitle(this.media.title.romaji);
            this.searching = false;
          },
          () => {
            this.errorGotten = true;
            this.searching = false;
          }
        ),
        takeUntil(this.destroyed$)
      )
      .subscribe();
  }
}
