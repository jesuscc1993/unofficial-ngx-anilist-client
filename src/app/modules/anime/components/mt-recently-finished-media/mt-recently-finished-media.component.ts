import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { filter, map, tap } from 'rxjs/operators';

import { MediaStore } from '../../../shared/store/media.store';
import { ListEntry } from '../../../shared/types/anilist/listEntry.types';
import { MediaFormat, mediaFormats } from '../../../shared/types/anilist/media.types';
import { fuzzyDateToDate } from '../../domain/media.domain';

type TabDataType = ListEntry[];

@Component({
  selector: 'mt-recently-finished-media',
  templateUrl: './mt-recently-finished-media.component.html',
  styleUrls: ['./mt-recently-finished-media.component.scss'],
})
export class MtRecentlyFinishedMediaComponent {
  mediaFormats: MediaFormat[] = [undefined, ...mediaFormats];

  listEntries: ListEntry[];
  ready: boolean;
  selectedFormat?: MediaFormat;

  constructor(private translateService: TranslateService, private mediaStore: MediaStore) {
    this.mediaStore
      .asObservable()
      .pipe(
        filter(({ animeListEntries }) => !!animeListEntries),
        map(({ animeListEntries }) =>
          animeListEntries
            .filter(listEntry => ['PLANNING', 'CURRENT'].includes(listEntry.status))
            .filter(({ media }) => media.status === 'FINISHED')
            .sort(({ media: a }, { media: b }) => (fuzzyDateToDate(a.endDate) > fuzzyDateToDate(b.endDate) ? -1 : 1))
        ),
        tap(animeListEntries => this.setEntries(animeListEntries))
      )
      .subscribe();
  }

  selectedFormatChanged(selectedFormat?: MediaFormat) {
    this.selectedFormat = selectedFormat;
    this.setEntries(this.mediaStore.getAnimeListEntries());
  }

  private setEntries(animeListEntries?: ListEntry[]) {
    const filteredEntries = this.selectedFormat
      ? animeListEntries.filter(entry => entry.media.format === this.selectedFormat)
      : animeListEntries;
    this.listEntries = filteredEntries.sort((a, b) => (a.updatedAt > b.updatedAt ? -1 : 1));
    this.ready = true;
  }
}
