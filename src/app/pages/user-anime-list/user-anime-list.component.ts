import { of } from 'rxjs';
import { catchError, filter, takeUntil, tap } from 'rxjs/operators';

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { rootUrl } from '../../app.constants';
import { AnimeCommands } from '../../modules/anime/commands/anime.commands';
import {
  WithObservableOnDestroy,
} from '../../modules/shared/components/with-observable-on-destroy/with-observable-on-destroy.component';
import { TitleService } from '../../modules/shared/services/title.service';
import { AuthStore } from '../../modules/shared/store/auth.store';
import {
  ListEntriesByStatus, ListEntryStatus,
} from '../../modules/shared/types/anilist/listEntry.types';
import { User } from '../../modules/shared/types/anilist/user.types';
import { ScrollUtil } from '../../utils/generic.util';

type Status = {
  value: ListEntryStatus;
  shown: boolean;
};

@Component({
  selector: 'mt-user-anime-list',
  templateUrl: './user-anime-list.component.html',
  styleUrls: ['./user-anime-list.component.scss'],
})
export class UserAnimeListPageComponent extends WithObservableOnDestroy {
  user: User;
  listEntriesByStatus: ListEntriesByStatus;
  statuses: Status[];
  favouriteIDs: number[];

  loggedIn: boolean;
  ready: boolean;
  error: Error;

  filter: string;

  constructor(
    private router: Router,
    private titleService: TitleService,
    private translateService: TranslateService,
    private animeCommands: AnimeCommands,
    private authStore: AuthStore
  ) {
    super();

    this.titleService.setTitle(
      this.translateService.instant('anime.userList.title')
    );

    this.user = this.authStore.getUser();
    this.loggedIn = this.user !== undefined;

    if (!this.loggedIn) {
      this.router.navigate([rootUrl]);
    }

    this.updateListData();
  }

  hasDataOfStatus(status: string): boolean {
    return (
      this.listEntriesByStatus &&
      this.listEntriesByStatus[status] &&
      this.listEntriesByStatus[status].length > 0
    );
  }

  scrollToStatus(status: string) {
    ScrollUtil.scrollIntoView(document.getElementById(status));
  }

  applyFilter(filterValue: string) {
    this.filter = filterValue.trim().toLowerCase();
  }

  getListAsString(): string {
    return JSON.stringify(this.listEntriesByStatus, undefined, 2);
  }

  private getListFavouriteIDs() {
    if (this.user) {
      this.animeCommands.getAnimeListFavouriteIDs(this.user, (favouriteIDs) => {
        this.favouriteIDs = favouriteIDs;
      });
    }
  }

  private getUserList() {
    if (this.user) {
      this.animeCommands
        .getListEntriesGroupedByStatus()
        .pipe(
          takeUntil(this.destroyed$),
          tap((listEntriesByStatus) => {
            this.listEntriesByStatus = listEntriesByStatus;
            this.statuses = Object.keys(this.listEntriesByStatus)
              .sort()
              .map((status) => ({
                value: status as ListEntryStatus,
                shown: true,
              }));
            this.ready = true;
          }),
          catchError((error) => {
            this.error = error;
            this.ready = true;

            return of();
          })
        )
        .subscribe();
    }
  }

  private updateListData() {
    this.listEntriesByStatus = undefined;
    this.statuses = undefined;
    this.favouriteIDs = undefined;
    this.ready = false;

    this.getUserList();
    this.getListFavouriteIDs();
  }
}
