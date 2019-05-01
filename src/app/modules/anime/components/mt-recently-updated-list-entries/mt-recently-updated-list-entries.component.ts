import { Component } from '@angular/core';
import { filter, tap } from 'rxjs/operators';

import { MediaStore } from '../../../shared/store/media.store';
import { ListEntry, ListEntryStatus, listEntryStatusList } from '../../../shared/types/anilist/listEntry.types';

@Component({
  selector: 'mt-recently-updated-list-entries',
  templateUrl: './mt-recently-updated-list-entries.component.html',
  styleUrls: ['./mt-recently-updated-list-entries.component.scss'],
})
export class MtRecentlyUpdatedListEntriesComponent {
  listEntryStatusList = listEntryStatusList;

  listEntries: ListEntry[];
  ready: boolean;
  selectedStatusList: ListEntryStatus[] = [];

  constructor(private mediaStore: MediaStore) {
    this.mediaStore
      .asObservable()
      .pipe(
        filter(({ animeListEntries }) => !!animeListEntries),
        tap(({ animeListEntries }) => this.setEntries(animeListEntries))
      )
      .subscribe();
  }

  selectedStatusChanged(selectedStatusList: ListEntryStatus[]) {
    this.selectedStatusList = selectedStatusList;
    this.setEntries(this.mediaStore.getAnimeListEntries());
  }

  private setEntries(animeListEntries?: ListEntry[]) {
    const filteredEntries = this.selectedStatusList.length
      ? animeListEntries.filter(entry => this.selectedStatusList.includes(entry.status))
      : animeListEntries;
    this.listEntries = filteredEntries.sort((a, b) => (a.updatedAt > b.updatedAt ? -1 : 1));
    this.ready = true;
  }
}
