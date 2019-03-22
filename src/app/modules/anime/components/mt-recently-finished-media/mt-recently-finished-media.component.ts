import { Component } from '@angular/core';

import { Tab } from '../../../../types/tab.types';

@Component({
  selector: 'mt-recently-finished-media',
  templateUrl: './mt-recently-finished-media.component.html',
  styleUrls: ['./mt-recently-finished-media.component.scss'],
})
export class MtRecentlyFinishedMediaComponent {
  tabs: Tab[];
  activeTab: Tab;

  constructor() {
    this.tabs = [
      {
        label: 'Series',
        formatIn: ['TV'],
      },
      {
        label: 'Movies',
        formatIn: ['MOVIE'],
      },
      {
        label: 'Other',
        formatNotIn: ['TV', 'MOVIE'],
      },
    ];

    this.activeTab = this.tabs[0];
  }

  activateTab(tab: Tab) {
    this.activeTab = tab;
  }
}
