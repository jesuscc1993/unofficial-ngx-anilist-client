import { Component } from '@angular/core';
import { filter, map, tap } from 'rxjs/operators';

import { MediaStore } from '../../../shared/store/media.store';
import { ListEntry } from '../../../shared/types/anilist/listEntry.types';
import { Tab } from '../../../shared/types/tab.types';
import { fuzzyDateToDate } from '../../domain/media.domain';

type TabDataType = ListEntry[];

@Component({
  selector: 'mt-recently-finished-media',
  templateUrl: './mt-recently-finished-media.component.html',
  styleUrls: ['./mt-recently-finished-media.component.scss'],
})
export class MtRecentlyFinishedMediaComponent {
  tabs: Tab<TabDataType>[];
  activeTab: Tab<TabDataType>;
  ready: boolean;

  constructor(private mediaStore: MediaStore) {
    this.tabs = [
      {
        label: 'anime.dashboard.finishedAiring.series',
        data: [],
      },
      {
        label: 'anime.dashboard.finishedAiring.movies',
        data: [],
      },
      {
        label: 'anime.dashboard.finishedAiring.other',
        data: [],
      },
    ];
    this.activeTab = this.tabs[0];

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
        tap(animeListEntries => {
          this.tabs[0].data = animeListEntries.filter(listEntry => listEntry.media.format === 'TV');
          this.tabs[1].data = animeListEntries.filter(listEntry => listEntry.media.format === 'MOVIE');
          this.tabs[2].data = animeListEntries.filter(listEntry => !['TV', 'MOVIE'].includes(listEntry.media.format));
          this.ready = true;
        })
      )
      .subscribe();
  }

  activateTab(tab: Tab<TabDataType>) {
    this.activeTab = tab;
  }
}
