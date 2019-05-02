import { Component } from '@angular/core';
import { filter, tap } from 'rxjs/operators';

import { MediaStore } from '../../../shared/store/media.store';
import { ListEntry, ListEntryStatus, listEntryStatuses } from '../../../shared/types/anilist/listEntry.types';

@Component({
  selector: 'mt-recently-updated-list-entries',
  templateUrl: './mt-recently-updated-list-entries.component.html',
  styleUrls: ['./mt-recently-updated-list-entries.component.scss'],
})
export class MtRecentlyUpdatedListEntriesComponent {
  private listEntries: ListEntry[];
  filteredEntries: ListEntry[];

  listEntryStatuses: ListEntryStatus[];
  selectedStatuses: ListEntryStatus[] = [];

  ready: boolean;

  constructor(private mediaStore: MediaStore) {
    this.mediaStore
      .asObservable()
      .pipe(
        filter(({ animeListEntries }) => !!animeListEntries),
        tap(({ animeListEntries }) => {
          this.listEntries = animeListEntries.sort((a, b) => (a.updatedAt > b.updatedAt ? -1 : 1));
          this.listEntryStatuses = listEntryStatuses.filter(
            status => !!animeListEntries.find(entry => entry.status === status)
          );
          this.filterEntries();
          this.ready = true;
        })
      )
      .subscribe();
  }

  selectedStatusChanged(selectedStatuses: ListEntryStatus[]) {
    this.selectedStatuses = selectedStatuses;
    this.filterEntries();
  }

  private filterEntries() {
    this.filteredEntries = this.selectedStatuses.length
      ? this.listEntries.filter(entry => this.selectedStatuses.includes(entry.status))
      : this.listEntries;
  }
}
