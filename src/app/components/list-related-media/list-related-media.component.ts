import { Component } from '@angular/core';
import { DateUtil } from '../../utils/date.util';
import { AnimeService } from '../../providers/anime.service';
import { Media } from '../../models/anilist/media';

@Component({
  selector: 'app-list-related-media',
  templateUrl: './list-related-media.component.html',
  styleUrls: ['./list-related-media.component.scss']
})
export class ListRelatedMediaComponent {

  mediaList: Media[];
  maxEntries: number = 20;

  ready: boolean;
  errorGotten: boolean;

  constructor(
    private animeService: AnimeService,
    private dateUtil: DateUtil
  ) {
    this.animeService.getRelatedMedia(this.animeService.getUser()).subscribe((relatedMediaList) => {
      this.mediaList = relatedMediaList;

    }, (error) => {
      this.errorGotten = true;
      this.ready = true;
    });
  }

}
