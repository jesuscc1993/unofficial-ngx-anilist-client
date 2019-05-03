import { Component } from '@angular/core';
import { takeUntil, tap } from 'rxjs/operators';

import {
  WithObservableOnDestroy,
} from '../../../shared/components/with-observable-on-destroy/with-observable-on-destroy.component';
import { ListEntry, ListEntryStatus, listEntryStatuses } from '../../../shared/types/anilist/listEntry.types';
import { AnimeService } from '../../services/anime.service';

@Component({
  selector: 'mt-recently-updated-list-entries',
  templateUrl: './mt-recently-updated-list-entries.component.html',
  styleUrls: ['./mt-recently-updated-list-entries.component.scss'],
})
export class MtRecentlyUpdatedListEntriesComponent extends WithObservableOnDestroy {
  private listEntries: ListEntry[];
  filteredEntries: ListEntry[];

  listEntryStatuses: ListEntryStatus[];
  selectedStatuses: ListEntryStatus[] = [];

  ready: boolean;

  constructor(private animeService: AnimeService) {
    super();

    this.animeService
      .getListEntriesByDateUpdated()
      .pipe(
        takeUntil(this.destroyed$),
        tap(animeListEntries => {
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
