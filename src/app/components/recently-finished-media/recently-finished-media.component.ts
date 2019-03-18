import { Component } from '@angular/core';

import { MediaFormat } from '../../types/anilist/enums/mediaFormats';
import { Tab } from '../../types/tab.types';

@Component({
  selector: 'app-recently-finished-media',
  templateUrl: './recently-finished-media.component.html',
  styleUrls: ['./recently-finished-media.component.scss']
})
export class RecentlyFinishedMediaComponent {
  tabs: Tab[];
  activeTab: Tab;

  constructor() {
    this.tabs = [
      {
        label: 'Series',
        formatIn: [MediaFormat.TV]
      },
      {
        label: 'Movies',
        formatIn: [MediaFormat.MOVIE]
      },
      {
        label: 'Other',
        formatNotIn: [MediaFormat.TV, MediaFormat.MOVIE]
      }
    ];

    this.activeTab = this.tabs[0];
  }

  activateTab(tab: Tab) {
    this.activeTab = tab;
  }
}
