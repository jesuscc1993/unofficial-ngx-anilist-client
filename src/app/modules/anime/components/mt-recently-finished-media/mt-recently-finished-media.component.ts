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
  private listEntries: ListEntry[];
  filteredEntries: ListEntry[];

  mediaFormats: MediaFormat[];
  selectedFormats: MediaFormat[] = [];

  ready: boolean;

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
        tap(animeListEntries => {
          this.listEntries = animeListEntries;
          this.mediaFormats = mediaFormats.filter(
            format => !!animeListEntries.find(entry => entry.media.format === format)
          );
          this.filterEntries();
          this.ready = true;
        })
      )
      .subscribe();
  }

  selectedFormatChanged(selectedFormats: MediaFormat[]) {
    this.selectedFormats = selectedFormats;
    this.filterEntries();
  }

  private filterEntries() {
    this.filteredEntries = this.selectedFormats.length
      ? this.listEntries.filter(entry => this.selectedFormats.includes(entry.media.format))
      : this.listEntries;
  }
}
