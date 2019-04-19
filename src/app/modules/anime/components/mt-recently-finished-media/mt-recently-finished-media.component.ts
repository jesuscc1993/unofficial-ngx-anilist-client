import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
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

  constructor(private translateService: TranslateService, private mediaStore: MediaStore) {
    this.tabs = [
      {
        label: this.translateService.instant('anime.dashboard.finishedAiring.television'),
        icon: 'tv',
        data: [],
      },
      {
        label: this.translateService.instant('anime.dashboard.finishedAiring.movies'),
        icon: 'film',
        data: [],
      },
      {
        label: this.translateService.instant('anime.dashboard.finishedAiring.other'),
        icon: 'compact-disc',
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
          this.tabs[0].data = animeListEntries.filter(listEntry => ['TV', 'TV_SHORT'].includes(listEntry.media.format));
          this.tabs[1].data = animeListEntries.filter(listEntry => listEntry.media.format === 'MOVIE');
          this.tabs[2].data = animeListEntries.filter(
            listEntry => !['TV', 'TV_SHORT', 'MOVIE'].includes(listEntry.media.format)
          );
          this.ready = true;
        })
      )
      .subscribe();
  }

  activateTab(tab: Tab<TabDataType>) {
    this.activeTab = tab;
  }
}
