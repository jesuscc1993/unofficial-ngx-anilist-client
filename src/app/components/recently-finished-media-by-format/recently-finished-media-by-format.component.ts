import { Component, Input } from '@angular/core';
import { PageEvent } from '@angular/material';

import { AnimeService } from '../../providers/anime.service';

import { Media } from '../../models/anilist/media';
import { PageQuery } from '../../models/anilist/pageInfo';

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
  errorGotten: boolean;

  constructor(
    private animeService: AnimeService
  ) {
    this.animeService.getListMediaIds(this.animeService.getUser()).subscribe((listMediaIds) => {
      this.blacklistedIds = listMediaIds.completed.concat(listMediaIds.dropped);

      this.getRecentlyFinishedAiring();

    }, (error) => {
      this.onError();
    });
  }

  changePage(pageEvent: PageEvent): void {
    this.pagination.pageIndex = pageEvent.pageIndex + 1;
    this.getRecentlyFinishedAiring();
  }

  private getRecentlyFinishedAiring(): void {
    this.animeService.getRecentlyFinishedAiring({
      idNotIn: this.blacklistedIds,
      format_in: this.formatIn,
      format_not_in: this.formatNotIn
    }, {
      perPage: this.maxEntries,
      pageIndex: this.pagination ? this.pagination.pageIndex : undefined

    }).subscribe((response) => {
      this.mediaList = response.media;
      this.pagination = response.pageInfo;
      this.ready = true;

    }, (error) => {
      this.onError();
    });
  }

  private onError(): void {
    this.errorGotten = true;
    this.ready = true;
  }

}
