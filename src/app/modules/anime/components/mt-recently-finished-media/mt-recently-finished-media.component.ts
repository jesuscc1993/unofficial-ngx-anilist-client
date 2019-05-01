import { Component } from '@angular/core';
import { filter, map, tap } from 'rxjs/operators';

import { MediaStore } from '../../../shared/store/media.store';
import { ListEntry } from '../../../shared/types/anilist/listEntry.types';
import { MediaFormat, mediaFormats } from '../../../shared/types/anilist/media.types';
import { fuzzyDateToDate } from '../../domain/media.domain';

@Component({
  selector: 'mt-recently-finished-media',
  templateUrl: './mt-recently-finished-media.component.html',
  styleUrls: ['./mt-recently-finished-media.component.scss'],
})
export class MtRecentlyFinishedMediaComponent {
  mediaFormats = mediaFormats;

  listEntries: ListEntry[];
  ready: boolean;
  selectedFormats: MediaFormat[] = [];

  constructor(private mediaStore: MediaStore) {
    this.mediaStore
      .asObservable()
      .pipe(
        filter(({ animeListEntries }) => !!animeListEntries),
        map(({ animeListEntries }) =>
          animeListEntries
            .filter(
              listEntry => ['PLANNING', 'CURRENT'].includes(listEntry.status) && listEntry.media.status === 'FINISHED'
            )
            .sort(({ media: a }, { media: b }) => (fuzzyDateToDate(a.endDate) > fuzzyDateToDate(b.endDate) ? -1 : 1))
        ),
        tap(animeListEntries => this.setEntries(animeListEntries))
      )
      .subscribe();
  }

  selectedFormatChanged(selectedFormats: MediaFormat[]) {
    this.selectedFormats = selectedFormats;
    this.setEntries(this.mediaStore.getAnimeListEntries());
  }

  private setEntries(animeListEntries?: ListEntry[]) {
    const filteredEntries = this.selectedFormats.length
      ? animeListEntries.filter(entry => this.selectedFormats.includes(entry.media.format))
      : animeListEntries;
    this.listEntries = filteredEntries.sort((a, b) => (a.updatedAt > b.updatedAt ? -1 : 1));
    this.ready = true;
  }
}
