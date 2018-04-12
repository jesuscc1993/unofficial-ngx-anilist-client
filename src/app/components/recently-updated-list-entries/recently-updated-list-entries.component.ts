import { Component } from '@angular/core';

import { AnimeService } from '../../providers/anime.service';
import { ListEntry } from '../../models/anilist/listEntry';
import { User } from '../../models/anilist/user';
import { PageQuery } from '../../models/anilist/pageInfo';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-recently-updated-list-entries',
  templateUrl: './recently-updated-list-entries.component.html',
  styleUrls: ['./recently-updated-list-entries.component.scss']
})
export class RecentlyUpdatedListEntriesComponent {

  user: User;
  listEntries: ListEntry[];
  pagination: PageQuery;
  maxEntries: number = 16;

  ready: boolean;
  errorGotten: boolean;

  constructor(
    private animeService: AnimeService
  ) {
    this.user = this.animeService.getUser();
    this.getRecentlyUpdated();
  }

  changePage(pageEvent: PageEvent): void {
    this.pagination.pageIndex = pageEvent.pageIndex + 1;
    this.getRecentlyUpdated();
  }

  private getRecentlyUpdated(): void {
    if (this.user) {
      this.animeService.getRecentlyUpdated(this.user, {
        perPage: this.maxEntries,
        pageIndex: this.pagination ? this.pagination.pageIndex : undefined

      }).subscribe((response) => {
        this.listEntries = response.mediaList;
        this.pagination = response.pageInfo;
        this.ready = true;

      }, (error) => {
        this.errorGotten = true;
        this.ready = true;
      });
    }
  }
}