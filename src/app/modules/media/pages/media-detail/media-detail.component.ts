import { takeUntil, tap } from 'rxjs/operators';

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AnimeCommands } from '../../../anime/commands/anime.commands';
import { MangaCommands } from '../../../manga/commands/manga.commands';
import {
  WithObservableOnDestroy,
} from '../../../shared/components/with-observable-on-destroy/with-observable-on-destroy.component';
import { TitleService } from '../../../shared/services/title.service';
import { Media, MediaType } from '../../../shared/types/anilist/media.types';
import { MediaCommands } from '../../commands/media.commands';
import { isAnime } from '../../domain/media.domain';

@Component({
  selector: 'mt-media-detail',
  templateUrl: './media-detail.component.html',
  styleUrls: ['./media-detail.component.scss'],
})
export class MediaDetailPageComponent extends WithObservableOnDestroy {
  media: Media;
  mediaCommands: MediaCommands;

  searching: boolean;
  errorGotten: boolean;

  constructor(
    private titleService: TitleService,
    private activatedRoute: ActivatedRoute,
    private animeCommands: AnimeCommands,
    private mangaCommands: MangaCommands
  ) {
    super();

    const params = this.activatedRoute.snapshot.params as MediaDetailPageParams;
    const { id, type } = params;

    this.mediaCommands = isAnime(type.toUpperCase() as MediaType)
      ? this.animeCommands
      : this.mangaCommands;

    this.titleService.setTitle();

    if (id && id > 0) {
      this.getEntry(id);
    }
  }

  private getEntry(mediaId: number) {
    this.searching = true;
    this.errorGotten = false;

    this.mediaCommands
      .queryMedia({ id: mediaId })
      .pipe(
        tap(
          (response) => {
            this.media =
              response.media.length > 0 ? response.media[0] : undefined;
            if (this.media) this.titleService.setTitle(this.media.title.romaji);
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

type MediaDetailPageParams = { id: number; type: MediaType };
