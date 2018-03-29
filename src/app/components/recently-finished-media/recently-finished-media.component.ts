import { Component } from '@angular/core';

import { AnimeService } from '../../providers/anime.service';
import { DateUtil } from '../../utils/date.util';
import { ListEntry } from '../../models/anilist/listEntry';

@Component({
  selector: 'app-recently-finished-media',
  templateUrl: './recently-finished-media.component.html',
  styleUrls: ['./recently-finished-media.component.scss']
})
export class RecentlyFinishedMediaComponent {

  mediaList: ListEntry[];
  maxEntries: number = 16;

  ready: boolean;
  errorGotten: boolean;

  constructor(
    private animeService: AnimeService,
    private dateUtil: DateUtil
  ) {
    this.animeService.getRecentlyFinishedAiring({
      perPage: this.maxEntries

    }).subscribe((listEntries) => {
      this.mediaList = listEntries;
      this.ready = true;

    }, (error) => {
      this.errorGotten = true;
      this.ready = true;
    });
  }

}
