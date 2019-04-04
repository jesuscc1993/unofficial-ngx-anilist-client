import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { tap } from 'rxjs/operators';

import { Tab } from '../../../../types/tab.types';

@Component({
  selector: 'mt-recently-finished-media',
  templateUrl: './mt-recently-finished-media.component.html',
  styleUrls: ['./mt-recently-finished-media.component.scss'],
})
export class MtRecentlyFinishedMediaComponent {
  tabs: Tab[];
  activeTab: Tab;

  constructor(private translateService: TranslateService) {
    const tabs = [
      { label: 'anime.dashboard.finishedAiring.series', formatIn: ['TV'] },
      { label: 'anime.dashboard.finishedAiring.movies', formatIn: ['MOVIE'] },
      { label: 'anime.dashboard.finishedAiring.other', formatNotIn: ['TV', 'MOVIE'] },
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

  activateTab(tab: Tab) {
    this.activeTab = tab;
  }
}
