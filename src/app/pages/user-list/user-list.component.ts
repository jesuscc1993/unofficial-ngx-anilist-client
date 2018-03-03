import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AnimeService } from '../../providers/anime.service';
import { User } from '../../models/anilist/user';
import { ListEntry } from '../../models/anilist/listEntry';
import { apiLoginUrl } from '../../app.constants';
import { MediaStatus } from '../../models/anilist/mediaStatus';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  user: User;
  statusObjects: any;
  statuses: MediaStatus[];
  favouriteIDs: number[];

  apiLoginUrl: string;
  loggedIn: boolean;
  ready: boolean;
  errorGotten: boolean;

  reloadOnUpdate: boolean = true;
  filter: string;

  constructor(
    private router: Router,
    private animeService: AnimeService
  ) {
    this.apiLoginUrl = apiLoginUrl;
    this.user = this.animeService.getUser();
    this.loggedIn = this.user !== undefined;

    this.updateListData();
  }

  private getUserList(): void {
    if (this.user) {
      this.animeService.getList(this.user).subscribe((response) => {
        this.statusObjects = response;

        const statusValues: string[] = Object.keys(response).sort();
        const statuses: MediaStatus[] = [];
        statusValues.forEach((statusValue) => {
          let status: any = new MediaStatus(statusValue);
          status.shown = true;
          statuses.push(status);
        });
        this.statuses = statuses;

        this.ready = true;

      }, (error) => {
        this.errorGotten = true;
        this.ready = true;
      });
    }
  }

  private getListFavouriteIDs(): void {
    if (this.user) {
      this.animeService.getListFavouriteIDs(this.user, (favouriteIDs) => {
        this.favouriteIDs = favouriteIDs;
      });
    }
  }

  hasDataOfStatus(status: string): boolean {
    return this.statusObjects &&
           this.statusObjects[status] &&
           this.statusObjects[status].length > 0;
  }

  applyFilter(filterValue: string): void {
    this.filter = filterValue.trim().toLowerCase();
  }

  getListAsString(): string {
    return JSON.stringify(this.statusObjects, undefined, 2);
  }

  onEntryUpdate(listEntry?: ListEntry): void {
    if (this.reloadOnUpdate) {
      this.updateListData();
    }
  }

  private updateListData(): void {
    this.statusObjects = undefined;
    this.statuses = undefined;
    this.favouriteIDs = undefined;
    this.ready = false;

    this.getUserList();
    this.getListFavouriteIDs();
  }
}
