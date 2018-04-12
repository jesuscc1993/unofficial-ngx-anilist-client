import { Component } from '@angular/core';

import { AnimeService } from '../../providers/anime.service';
import { Media } from '../../models/anilist/media';
import { PageQuery } from '../../models/anilist/pageInfo';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-recently-finished-media',
  templateUrl: './recently-finished-media.component.html',
  styleUrls: ['./recently-finished-media.component.scss']
})
export class RecentlyFinishedMediaComponent {

  listMediaIds: any;
  mediaList: Media[];
  pagination: PageQuery;
  maxEntries: number = 16;

  ready: boolean;
  errorGotten: boolean;

  constructor(
    private animeService: AnimeService
  ) {
    this.animeService.getListMediaIds(this.animeService.getUser()).subscribe((listMediaIds) => {
      this.listMediaIds = listMediaIds;

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
      idNotIn: this.listMediaIds ? this.listMediaIds.completed : undefined
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
