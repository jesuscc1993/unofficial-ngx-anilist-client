import { Component, Input } from '@angular/core';
import { PageEvent } from '@angular/material';
import { of } from 'rxjs/observable/of';
import { catchError, tap } from 'rxjs/operators';

import { AnimeService } from '../../services/anime.service';
import { AuthStore } from '../../store/auth.store';
import { Media } from '../../types/anilist/media.types';
import { PageQuery } from '../../types/anilist/pageInfo.types';

@Component({
  selector: 'app-recently-finished-media-by-format',
  templateUrl: './recently-finished-media-by-format.component.html',
  styleUrls: ['./recently-finished-media-by-format.component.scss'],
})
export class RecentlyFinishedMediaByFormatComponent {
  @Input() formatIn?: string[];
  @Input() formatNotIn?: string[];
  @Input() title: string;

  whitelistedIds: number[];
  mediaList: Media[];
  pagination: PageQuery;
  maxEntries: number = 16;

  ready: boolean;
  error: Error;

  constructor(private animeService: AnimeService, private authStore: AuthStore) {
    this.whitelistedIds = [];

    this.animeService
      .getAnimeListMediaIdsByStatus(this.authStore.getUser())
      .pipe(
        tap(listMediaIdsByStatus => {
          this.whitelistedIds = [...(listMediaIdsByStatus.CURRENT || []), ...(listMediaIdsByStatus.PLANNING || [])];
          this.getRecentlyFinishedAiring();
        }),
        catchError(error => of(this.onError(error)))
      )
      .subscribe();
  }

  changePage(pageEvent: PageEvent) {
    this.pagination.pageIndex = pageEvent.pageIndex + 1;
    this.getRecentlyFinishedAiring();
  }

  private getRecentlyFinishedAiring() {
    this.animeService
      .getRecentlyFinishedAiringAnime(
        {
          idIn: this.whitelistedIds,
          format_in: this.formatIn,
          format_not_in: this.formatNotIn,
        },
        {
          perPage: this.maxEntries,
          pageIndex: this.pagination && this.pagination.pageIndex,
        }
      )
      .pipe(
        tap(response => {
          this.mediaList = response.media;
          this.pagination = response.pageInfo;
          this.ready = true;
        }),
        catchError(error => of(this.onError(error)))
      )
      .subscribe();
  }

  private onError(error: Error) {
    this.error = error;
    this.ready = true;
  }
}
