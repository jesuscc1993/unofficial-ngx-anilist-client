import { of } from 'rxjs';
import { catchError, takeUntil, tap } from 'rxjs/operators';

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { rootUrl } from '../../../../app.constants';
import { downloadFile } from '../../../../utils/file.util';
import { ScrollUtil } from '../../../../utils/generic.util';
import { WithObservableOnDestroy } from '../../../shared/components/with-observable-on-destroy/with-observable-on-destroy.component';
import { TitleService } from '../../../shared/services/title.service';
import { AuthStore } from '../../../shared/store/auth.store';
import {
  ListEntriesByStatus,
  ListEntryStatus,
} from '../../../shared/types/anilist/listEntry.types';
import { User } from '../../../shared/types/anilist/user.types';
import { AnimeCommands } from '../../commands/anime.commands';

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
  favoriteIDs: number[];

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

  exportList(event?: Event) {
    this.preventDefault(event);

    if (this.user) {
      this.animeCommands
        .getListEntriesExport()
        .pipe(
          tap((listEntries) => {
            downloadFile(
              JSON.stringify(listEntries, null, 2),
              `anime_list_${this.user.name}_${new Date().getTime()}.json`,
              'application/json'
            );
          }),
          catchError((error) => of(alert(error))),
          takeUntil(this.destroyed$)
        )
        .subscribe();
    }
  }

  private getListFavoriteIDs() {
    if (this.user) {
      this.animeCommands
        .getFavoriteIDs()
        .pipe(
          tap((favoriteIDs) => {
            this.favoriteIDs = favoriteIDs;
          }),
          takeUntil(this.destroyed$)
        )
        .subscribe();

      this.animeCommands.queryFavoriteIDs(this.user);
    }
  }

  private getUserList() {
    if (this.user) {
      this.animeCommands
        .getListEntriesGroupedByStatus()
        .pipe(
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
          }),
          takeUntil(this.destroyed$)
        )
        .subscribe();
    }
  }

  private updateListData() {
    this.listEntriesByStatus = undefined;
    this.statuses = undefined;
    this.favoriteIDs = undefined;
    this.ready = false;

    this.getUserList();
    this.getListFavoriteIDs();
  }

  private preventDefault(event: Event) {
    if (event) {
      event.preventDefault();
    }
  }
}
