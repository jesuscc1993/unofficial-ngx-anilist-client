import { Component, Input } from '@angular/core';
import { PageEvent } from '@angular/material';

import { AnimeService } from '../../services/anime.service';
import { AuthStore } from '../../store/auth.store';
import { Media } from '../../types/anilist/media.types';
import { PageQuery } from '../../types/anilist/pageInfo.types';

@Component({
  selector: 'app-recently-finished-media-by-format',
  templateUrl: './recently-finished-media-by-format.component.html',
  styleUrls: ['./recently-finished-media-by-format.component.scss']
})
export class RecentlyFinishedMediaByFormatComponent {
  @Input() formatIn?: string[];
  @Input() formatNotIn?: string[];
  @Input() title: string;

  blacklistedIds: number[];
  mediaList: Media[];
  pagination: PageQuery;
  maxEntries: number = 16;

  ready: boolean;
  error: Error;

  constructor(private animeService: AnimeService, private authStore: AuthStore) {
    this.blacklistedIds = [];

    this.animeService.getAnimeListMediaIds(this.authStore.getUser()).subscribe(
      listMediaIds => {
        if (listMediaIds.completed && listMediaIds.completed.length) {
          this.blacklistedIds = this.blacklistedIds.concat(listMediaIds.completed);
        }

        if (listMediaIds.dropped && listMediaIds.dropped.length) {
          this.blacklistedIds = this.blacklistedIds.concat(listMediaIds.dropped);
        }

        this.getRecentlyFinishedAiring();
      },
      error => {
        this.onError(error);
      }
    );
  }

  changePage(pageEvent: PageEvent) {
    this.pagination.pageIndex = pageEvent.pageIndex + 1;
    this.getRecentlyFinishedAiring();
  }

  private getRecentlyFinishedAiring() {
    this.animeService
      .getRecentlyFinishedAiringAnime(
        {
          idNotIn: this.blacklistedIds,
          format_in: this.formatIn,
          format_not_in: this.formatNotIn
        },
        {
          perPage: this.maxEntries,
          pageIndex: this.pagination ? this.pagination.pageIndex : undefined
        }
      )
      .subscribe(
        response => {
          this.mediaList = response.media;
          this.pagination = response.pageInfo;
          this.ready = true;
        },
        error => {
          this.onError(error);
        }
      );
  }

  private onError(error: Error) {
    this.error = error;
    this.ready = true;
  }
}
