import { Component } from '@angular/core';

import { AnimeService } from '../../providers/anime.service';
import { DateUtil } from '../../utils/date.util';
import { Media } from '../../models/anilist/media';

@Component({
  selector: 'app-recently-finished-media',
  templateUrl: './recently-finished-media.component.html',
  styleUrls: ['./recently-finished-media.component.scss']
})
export class RecentlyFinishedMediaComponent {

  mediaList: Media[];
  maxEntries: number = 20;

  ready: boolean;
  errorGotten: boolean;

  constructor(
    private animeService: AnimeService,
    private dateUtil: DateUtil
  ) {
    this.animeService.getListMediaIds(this.animeService.getUser()).subscribe((listMediaIds) => {

      this.animeService.getRecentlyFinishedAiring({
        idNotIn: listMediaIds.completed
      }, {
        perPage: this.maxEntries

      }).subscribe((listEntries) => {
        this.mediaList = listEntries;
        this.ready = true;

      }, (error) => {
        this.onError();
      });

    }, (error) => {
      this.onError();
    });
  }

  private onError(): void {
    this.errorGotten = true;
    this.ready = true;
  }

}
