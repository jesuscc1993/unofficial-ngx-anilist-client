import { takeUntil, tap } from 'rxjs/operators';

import { Component } from '@angular/core';

import {
  WithObservableOnDestroy,
} from '../../../shared/components/with-observable-on-destroy/with-observable-on-destroy.component';
import { basicMediaSorts, mediaFormats } from '../../../shared/constants/media.constants';
import { ListEntry } from '../../../shared/types/anilist/listEntry.types';
import { MediaFormat, MediaSort } from '../../../shared/types/anilist/media.types';
import { AnimeCommands } from '../../commands/anime.commands';
import {
  sortListEntriesByMediaEndDate, sortListEntriesByMediaScore, sortListEntriesByMediaTitle,
} from '../../domain/media.domain';
import { StorageKeys, storageService } from '../../services/storage.service';

@Component({
  selector: 'mt-recently-finished-media',
  templateUrl: './mt-recently-finished-media.component.html',
  styleUrls: ['./mt-recently-finished-media.component.scss'],
})
export class MtRecentlyFinishedMediaComponent extends WithObservableOnDestroy {
  readonly mediaSorts = basicMediaSorts;

  filteredEntries: ListEntry[];
  loading = true;
  mediaFormats: MediaFormat[];

  selectedFormats = storageService.getItem<MediaFormat[]>(
    StorageKeys.RecentlyFinished.Format,
    []
  );

  selectedSort = storageService.getItem<MediaSort>(
    StorageKeys.RecentlyFinished.Sort,
    MediaSort.END_DATE_DESC
  );

  private listEntries: ListEntry[];

  constructor(private animeCommands: AnimeCommands) {
    super();

    this.animeCommands
      .getPendingMedia()
      .pipe(
        takeUntil(this.destroyed$),
        tap((animeListEntries) => {
          this.listEntries = animeListEntries;
          this.mediaFormats = mediaFormats.filter(
            (format) =>
              !!animeListEntries.find((entry) => entry.media.format === format)
          );
          this.sortEntries();
          this.loading = false;
        })
      )
      .subscribe();
  }

  sortBy(selectedSort: MediaSort) {
    this.selectedSort = selectedSort;
    this.sortEntries();
    storageService.setItem(StorageKeys.RecentlyFinished.Sort, selectedSort);
  }

  selectedFormatChanged(selectedFormats: MediaFormat[]) {
    this.selectedFormats = selectedFormats;
    this.filterEntries();
    storageService.setItem(
      StorageKeys.RecentlyFinished.Format,
      selectedFormats
    );
  }

  private filterEntries() {
    this.filteredEntries = this.selectedFormats.length
      ? this.listEntries.filter((entry) =>
          this.selectedFormats.includes(entry.media.format)
        )
      : this.listEntries;
  }

  private sortEntries() {
    const sort = {
      [MediaSort.END_DATE_DESC]: sortListEntriesByMediaEndDate,
      [MediaSort.SCORE_DESC]: sortListEntriesByMediaScore,
      [MediaSort.TITLE_ROMAJI]: sortListEntriesByMediaTitle,
    }[this.selectedSort];

    this.listEntries = sort(this.listEntries);

    this.filterEntries();
  }
}
