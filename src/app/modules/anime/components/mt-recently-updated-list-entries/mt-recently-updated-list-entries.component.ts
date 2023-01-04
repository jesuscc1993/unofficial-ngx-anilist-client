import { takeUntil, tap } from 'rxjs/operators';

import { Component } from '@angular/core';

import {
  WithObservableOnDestroy,
} from '../../../shared/components/with-observable-on-destroy/with-observable-on-destroy.component';
import { listEntryStatuses } from '../../../shared/constants/listEntry.constants';
import { mediaFormats } from '../../../shared/constants/media.constants';
import { ListEntry, ListEntryStatus } from '../../../shared/types/anilist/listEntry.types';
import { MediaFormat } from '../../../shared/types/anilist/media.types';
import { AnimeCommands } from '../../commands/anime.commands';
import { StorageKeys, storageService } from '../../services/storage.service';

@Component({
  selector: 'mt-recently-updated-list-entries',
  templateUrl: './mt-recently-updated-list-entries.component.html',
  styleUrls: ['./mt-recently-updated-list-entries.component.scss'],
})
export class MtRecentlyUpdatedListEntriesComponent extends WithObservableOnDestroy {
  filteredEntries: ListEntry[];
  listEntryStatuses: ListEntryStatus[];
  mediaFormats: MediaFormat[];
  searching = true;

  selectedStatuses = storageService.getItem<ListEntryStatus[]>(
    StorageKeys.RecentlyUpdated.Status,
    []
  );

  selectedFormats = storageService.getItem<MediaFormat[]>(
    StorageKeys.RecentlyUpdated.Format,
    []
  );

  private listEntries: ListEntry[];

  constructor(private animeCommands: AnimeCommands) {
    super();

    this.animeCommands
      .getListEntriesByDateUpdated()
      .pipe(
        takeUntil(this.destroyed$),
        tap((animeListEntries) => {
          this.listEntries = animeListEntries.sort((a, b) =>
            a.updatedAt > b.updatedAt ? -1 : 1
          );
          this.listEntryStatuses = listEntryStatuses.filter(
            (status) =>
              !!animeListEntries.find((entry) => entry.status === status)
          );
          this.mediaFormats = mediaFormats.filter(
            (format) =>
              !!animeListEntries.find((entry) => entry.media.format === format)
          );
          this.filterEntries();
          this.searching = false;
        })
      )
      .subscribe();
  }

  selectedStatusChanged(selectedStatuses: ListEntryStatus[]) {
    this.selectedStatuses = selectedStatuses;
    this.filterEntries();
    storageService.setItem(
      StorageKeys.RecentlyUpdated.Status,
      selectedStatuses
    );
  }

  selectedFormatChanged(selectedFormats: MediaFormat[]) {
    this.selectedFormats = selectedFormats;
    this.filterEntries();
    storageService.setItem(StorageKeys.RecentlyUpdated.Format, selectedFormats);
  }

  private filterEntries() {
    this.filteredEntries = this.listEntries.filter(
      (entry) =>
        (!this.selectedFormats.length ||
          this.selectedFormats.includes(entry.media.format)) &&
        (!this.selectedStatuses.length ||
          this.selectedStatuses.includes(entry.status))
    );
  }
}
