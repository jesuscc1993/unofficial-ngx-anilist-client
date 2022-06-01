import { takeUntil, tap } from 'rxjs/operators';

import { Component } from '@angular/core';

import {
  WithObservableOnDestroy,
} from '../../../shared/components/with-observable-on-destroy/with-observable-on-destroy.component';
import { ListEntry } from '../../../shared/types/anilist/listEntry.types';
import { MediaFormat, mediaFormats } from '../../../shared/types/anilist/media.types';
import { basicMediaSorts, MediaSort } from '../../../shared/types/anilist/mediaSort.types';
import { AnimeCommands } from '../../commands/anime.commands';
import {
  sortListEntriesByMediaEndDate, sortListEntriesByMediaScore, sortListEntriesByMediaTitle,
} from '../../domain/media.domain';

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
  selectedFormats: MediaFormat[] = [];
  selectedSort: MediaSort = 'END_DATE_DESC';

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
            (format) => !!animeListEntries.find((entry) => entry.media.format === format)
          );
          this.filterEntries();
          this.loading = false;
        })
      )
      .subscribe();
  }

  sortBy(mediaSort: MediaSort) {
    this.selectedSort = mediaSort;

    const sort = {
      ['END_DATE_DESC']: sortListEntriesByMediaEndDate,
      ['SCORE_DESC']: sortListEntriesByMediaScore,
      ['TITLE_ROMAJI']: sortListEntriesByMediaTitle,
    }[mediaSort];

    this.listEntries = sort(this.listEntries);

    this.filterEntries();
  }

  selectedFormatChanged(selectedFormats: MediaFormat[]) {
    this.selectedFormats = selectedFormats;
    this.filterEntries();
  }

  private filterEntries() {
    this.filteredEntries = this.selectedFormats.length
      ? this.listEntries.filter((entry) => this.selectedFormats.includes(entry.media.format))
      : this.listEntries;
  }
}
