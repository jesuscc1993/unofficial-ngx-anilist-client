import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { rootUrl } from '../../app.constants';
import { AnimeService } from '../../services/anime.service';
import { AuthStore } from '../../store/auth.store';
import { ListEntry, ListEntryStatus } from '../../types/anilist/listEntry.types';
import { User } from '../../types/anilist/user.types';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  user: User;
  statusObjects: { [Status in ListEntryStatus]?: ListEntry[] };
  statuses: ListEntryStatus[];
  favouriteIDs: number[];

  loggedIn: boolean;
  ready: boolean;
  error: Error;

  reloadOnUpdate: boolean = true;
  filter: string;

  constructor(private router: Router, private animeService: AnimeService, private authStore: AuthStore) {
    this.user = this.authStore.getUser();
    this.loggedIn = this.user !== undefined;

    if (!this.loggedIn) {
      this.router.navigate([rootUrl]);
    }

    this.updateListData();
  }

  private getUserList() {
    if (this.user) {
      this.animeService.getAnimeList(this.user).subscribe(
        response => {
          this.statusObjects = response;
          this.statuses = Object.keys(response)
            .sort()
            .map(status => status as ListEntryStatus);
          this.ready = true;
        },
        error => {
          this.error = error;
          this.ready = true;
        }
      );
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
    return this.statusObjects && this.statusObjects[status] && this.statusObjects[status].length > 0;
  }

  applyFilter(filterValue: string) {
    this.filter = filterValue.trim().toLowerCase();
  }

  getListAsString(): string {
    return JSON.stringify(this.statusObjects, undefined, 2);
  }

  onEntryUpdate(listEntry?: ListEntry) {
    if (this.reloadOnUpdate) {
      this.updateListData();
    }
  }

  private updateListData() {
    this.statusObjects = undefined;
    this.statuses = undefined;
    this.favouriteIDs = undefined;
    this.ready = false;

    this.getUserList();
    this.getListFavouriteIDs();
  }
}
