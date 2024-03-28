import { takeUntil, tap } from 'rxjs/operators';

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { WithObservableOnDestroy } from '../../../shared/components/with-observable-on-destroy/with-observable-on-destroy.component';
import { TitleService } from '../../../shared/services/title.service';
import { Media } from '../../../shared/types/anilist/media.types';
import { MangaCommands } from '../../commands/manga.commands';

@Component({
  selector: 'mt-manga-detail',
  templateUrl: './manga-detail.component.html',
  styleUrls: ['./manga-detail.component.scss'],
})
export class MangaDetailPageComponent extends WithObservableOnDestroy {
  media: Media;

  searching: boolean;
  errorGotten: boolean;

  constructor(
    private titleService: TitleService,
    private activatedRoute: ActivatedRoute,
    private mangaCommands: MangaCommands
  ) {
    super();

    this.titleService.setTitle();

    const mediaId = this.activatedRoute.snapshot.params.id as number;
    if (mediaId && mediaId > 0) {
      this.getEntry(mediaId);
    }
  }

  private getEntry(mediaId: number) {
    this.searching = true;
    this.errorGotten = false;

    this.mangaCommands
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
