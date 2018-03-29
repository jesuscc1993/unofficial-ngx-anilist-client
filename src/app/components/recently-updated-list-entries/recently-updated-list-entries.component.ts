import { Component } from '@angular/core';

import { AnimeService } from '../../providers/anime.service';
import { ListEntry } from '../../models/anilist/listEntry';
import { User } from '../../models/anilist/user';

@Component({
  selector: 'app-recently-updated-list-entries',
  templateUrl: './recently-updated-list-entries.component.html',
  styleUrls: ['./recently-updated-list-entries.component.scss']
})
export class RecentlyUpdatedListEntriesComponent {

  listEntries: ListEntry[];
  maxEntries: number = 16;

  ready: boolean;
  errorGotten: boolean;

  constructor(
    private animeService: AnimeService
  ) {
    const user: User = this.animeService.getUser();
    if (user) {
      this.animeService.getRecentlyUpdated(user, {
        perPage: this.maxEntries

      }).subscribe((listEntries) => {
        this.listEntries = listEntries;
        this.ready = true;

      }, (error) => {
        this.errorGotten = true;
        this.ready = true;
      });
    }
  }

}