import { of } from 'rxjs';
import { catchError, takeUntil, tap } from 'rxjs/operators';

import { Component, Input, OnInit } from '@angular/core';

import { downloadFile } from '../../../../utils/file.util';
import { ScrollUtil } from '../../../../utils/generic.util';
import { AnimeCommands } from '../../../anime/commands/anime.commands';
import { MangaCommands } from '../../../manga/commands/manga.commands';
import {
  WithObservableOnDestroy,
} from '../../../shared/components/with-observable-on-destroy/with-observable-on-destroy.component';
import { AuthStore } from '../../../shared/store/auth.store';
import {
  ListEntriesByStatus, ListEntryStatus,
} from '../../../shared/types/anilist/listEntry.types';
import { MediaType } from '../../../shared/types/anilist/media.types';
import { User } from '../../../shared/types/anilist/user.types';
import { MediaCommands } from '../../commands/media.commands';
import { isAnime } from '../../domain/media.domain';

type Status = {
  value: ListEntryStatus;
  shown: boolean;
};

@Component({
  selector: 'mt-user-media-list',
  templateUrl: './mt-user-media-list.component.html',
  styleUrls: ['./mt-user-media-list.component.scss'],
})
export class MtUserMediaListComponent
  extends WithObservableOnDestroy
  implements OnInit
{
  @Input() mediaType: MediaType;

  favouriteIDs: number[];
  listEntriesByStatus: ListEntriesByStatus;
  mediaCommands: MediaCommands;
  statuses: Status[];
  user: User;

  ready: boolean;
  error: Error;

  filter: string;

  constructor(
    private animeCommands: AnimeCommands,
    private authStore: AuthStore,
    private mangaCommands: MangaCommands
  ) {
    super();
  }

  ngOnInit(): void {
    if (isAnime(this.mediaType)) {
      this.mediaCommands = this.animeCommands;
    } else {
      this.mediaCommands = this.mangaCommands;
    }

    this.user = this.authStore.getUser();

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
      this.mediaCommands
        .getListEntriesExport()
        .pipe(
          tap((listEntries) => {
            const mediaType = this.mediaType.toLowerCase();
            const name = this.user.name;
            const time = Date.now();

            downloadFile(
              JSON.stringify(listEntries, null, 2),
              `${mediaType}_list_${name}_${time}.json`,
              'application/json'
            );
          }),
          catchError((error) => of(alert(error))),
          takeUntil(this.destroyed$)
        )
        .subscribe();
    }
  }

  private getListFavouriteIDs() {
    this.mediaCommands
      .getFavouriteIDs()
      .pipe(
        tap((favouriteIDs) => {
          this.favouriteIDs = favouriteIDs;
        }),
        takeUntil(this.destroyed$)
      )
      .subscribe();

    this.mediaCommands
      .queryFavouriteIDs()
      .pipe(takeUntil(this.destroyed$))
      .subscribe();
  }

  private getUserList() {
    if (this.user) {
      this.mediaCommands
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
    this.favouriteIDs = undefined;
    this.ready = false;

    this.getUserList();
    this.getListFavouriteIDs();
  }

  private preventDefault(event: Event) {
    if (event) {
      event.preventDefault();
    }
  }
}
