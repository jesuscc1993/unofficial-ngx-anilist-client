import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { tap } from 'rxjs/operators';

import { Tab } from '../../../shared/types/tab.types';

type TabDataType = {
  formatIn?: string[];
  formatNotIn?: string[];
};

@Component({
  selector: 'mt-recently-finished-media',
  templateUrl: './mt-recently-finished-media.component.html',
  styleUrls: ['./mt-recently-finished-media.component.scss'],
})
export class MtRecentlyFinishedMediaComponent {
  tabs: Tab<TabDataType>[];
  activeTab: Tab<TabDataType>;

  constructor(private translateService: TranslateService) {
    const tabs: Tab<TabDataType>[] = [
      {
        label: 'anime.dashboard.finishedAiring.series',
        data: {
          formatIn: ['TV'],
        },
      },
      {
        label: 'anime.dashboard.finishedAiring.movies',
        data: {
          formatIn: ['MOVIE'],
        },
      },
      {
        label: 'anime.dashboard.finishedAiring.other',
        data: {
          formatNotIn: ['TV', 'MOVIE'],
        },
      },
    ];

    this.translateService
      .get(tabs.map(tab => tab.label))
      .pipe(
        tap(translations => {
          this.tabs = tabs.map(tab => ({ ...tab, label: translations[tab.label] }));
          this.activeTab = this.tabs[0];
        })
      )
      .subscribe();
  }

  activateTab(tab: Tab<TabDataType>) {
    this.activeTab = tab;
  }
}
