import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
import { catchError, filter, map, tap } from 'rxjs/operators';

import { rootUrl } from '../../app.constants';
import { getListEntriesByStatus } from '../../modules/anime/domain/media.domain';
import { AnimeService } from '../../modules/anime/services/anime.service';
import { TitleService } from '../../modules/shared/services/title.service';
import { AuthStore } from '../../modules/shared/store/auth.store';
import { MediaStore } from '../../modules/shared/store/media.store';
import { ListEntriesByStatus, ListEntryStatus } from '../../modules/shared/types/anilist/listEntry.types';
import { User } from '../../modules/shared/types/anilist/user.types';
import { ScrollUtil } from '../../utils/generic.util';

@Component({
  selector: 'mt-user-anime-list',
  templateUrl: './user-anime-list.component.html',
  styleUrls: ['./user-anime-list.component.scss'],
})
export class UserAnimeListPageComponent {
  user: User;
  listEntryListByStatus: ListEntriesByStatus;
  statuses: { value: ListEntryStatus; shown: boolean }[];
  favouriteIDs: number[];

  loggedIn: boolean;
  ready: boolean;
  error: Error;

  filter: string;

  constructor(
    private router: Router,
    private titleService: TitleService,
    private translateService: TranslateService,
    private animeService: AnimeService,
    private authStore: AuthStore,
    private mediaStore: MediaStore
  ) {
    this.titleService.setTitle(this.translateService.instant('anime.userList.title'));

    this.user = this.authStore.getUser();
    this.loggedIn = this.user !== undefined;

    if (!this.loggedIn) {
      this.router.navigate([rootUrl]);
    }

    this.updateListData();
  }

  private getUserList() {
    if (this.user) {
      this.mediaStore
        .asObservable()
        .pipe(
          filter(({ animeListEntries }) => !!animeListEntries),
          map(({ animeListEntries }) => getListEntriesByStatus(animeListEntries)),
          tap(listEntryListByStatus => {
            this.listEntryListByStatus = listEntryListByStatus;
            this.statuses = Object.keys(this.listEntryListByStatus)
              .sort()
              .map(status => ({
                value: status as ListEntryStatus,
                shown: true,
              }));
            this.ready = true;
          }),
          catchError(error => {
            this.error = error;
            this.ready = true;

            return of();
          })
        )
        .subscribe();
    }
  }

  private getListFavouriteIDs() {
    if (this.user) {
      this.animeService.getAnimeListFavouriteIDs(this.user, favouriteIDs => {
        this.favouriteIDs = favouriteIDs;
      });
    }
  }

  hasDataOfStatus(status: string): boolean {
    return (
      this.listEntryListByStatus && this.listEntryListByStatus[status] && this.listEntryListByStatus[status].length > 0
    );
  }

  scrollToStatus(status: string) {
    ScrollUtil.scrollIntoView(document.getElementById(status));
  }

  applyFilter(filterValue: string) {
    this.filter = filterValue.trim().toLowerCase();
  }

  getListAsString(): string {
    return JSON.stringify(this.listEntryListByStatus, undefined, 2);
  }

  private updateListData() {
    this.listEntryListByStatus = undefined;
    this.statuses = undefined;
    this.favouriteIDs = undefined;
    this.ready = false;

    this.getUserList();
    this.getListFavouriteIDs();
  }
}
