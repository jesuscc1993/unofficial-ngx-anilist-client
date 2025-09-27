import { takeUntil, tap } from 'rxjs/operators';

import { Component, Input, OnInit } from '@angular/core';

import { AnimeCommands } from '../../../anime/commands/anime.commands';
import { MangaCommands } from '../../../manga/commands/manga.commands';
import { WithObservableOnDestroy } from '../../../shared/components/with-observable-on-destroy/with-observable-on-destroy.component';
import { TitleService } from '../../../shared/services/title.service';
import { Media, MediaType } from '../../../shared/types/anilist/media.types';
import { MediaCommands } from '../../commands/media.commands';
import { getMediaTitle, isAnime } from '../../domain/media.domain';

@Component({
  selector: 'mt-media-detail',
  templateUrl: './mt-media-detail.component.html',
  styleUrls: ['./mt-media-detail.component.scss'],
})
export class MtMediaDetailComponent
  extends WithObservableOnDestroy
  implements OnInit
{
  @Input() mediaId: number;
  @Input() mediaType: MediaType;

  readonly getMediaTitle = getMediaTitle;

  media: Media;
  mediaCommands: MediaCommands;

  searching: boolean;
  errorGotten: boolean;

  constructor(
    private titleService: TitleService,
    private animeCommands: AnimeCommands,
    private mangaCommands: MangaCommands
  ) {
    super();
  }

  ngOnInit(): void {
    if (isAnime(this.mediaType)) {
      this.mediaCommands = this.animeCommands;
    } else {
      this.mediaCommands = this.mangaCommands;
    }

    this.titleService.setTitle();

    if (this.mediaId) {
      this.getEntry(this.mediaId);
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
            if (this.media) {
              this.titleService.setTitle(getMediaTitle(this.media));
            }
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
