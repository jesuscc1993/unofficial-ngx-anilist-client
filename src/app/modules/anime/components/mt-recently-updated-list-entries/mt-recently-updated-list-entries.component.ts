import { Component } from '@angular/core';
import { PageEvent } from '@angular/material';
import { tap } from 'rxjs/operators';

import { AnimeService } from '../../../../services/anime.service';
import { AuthService } from '../../../../services/auth.service';
import { AuthStore } from '../../../../store/auth.store';
import { ListEntry } from '../../../../types/anilist/listEntry.types';
import { PageQuery } from '../../../../types/anilist/pageInfo.types';
import { User } from '../../../../types/anilist/user.types';

@Component({
  selector: 'mt-recently-updated-list-entries',
  templateUrl: './mt-recently-updated-list-entries.component.html',
  styleUrls: ['./mt-recently-updated-list-entries.component.scss'],
})
export class MtRecentlyUpdatedListEntriesComponent {
  user: User;
  listEntries: ListEntry[];
  pagination: PageQuery;
  maxEntries: number = 16;

  ready: boolean;
  error: Error;

  constructor(private animeService: AnimeService, private authService: AuthService, private authStore: AuthStore) {
    this.user = this.authStore.getUser();
    this.getRecentlyUpdatedAnime();
  }

  changePage(pageEvent: PageEvent) {
    this.pagination.pageIndex = pageEvent.pageIndex + 1;
    this.getRecentlyUpdatedAnime();
  }

  private getRecentlyUpdatedAnime() {
    if (this.user) {
      this.animeService
        .getRecentlyUpdatedAnime(this.user, {
          perPage: this.maxEntries,
          pageIndex: this.pagination && this.pagination.pageIndex,
        })
        .pipe(
          tap(
            response => {
              this.listEntries = response.mediaList;
              this.pagination = response.pageInfo;
              this.ready = true;
            },
            error => {
              this.error = error;
              this.ready = true;
            }
          )
        )
        .subscribe();
    }
  }
}