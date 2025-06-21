import { Component } from '@angular/core';

import { TitleService } from '../../../shared/services/title.service';
import { AuthStore } from '../../../shared/store/auth.store';
import { User } from '../../../shared/types/anilist/user.types';

@Component({
  selector: 'mt-anime-search',
  templateUrl: './anime-search.component.html',
  styleUrls: ['./anime-search.component.scss'],
})
export class AnimeSearchPage {
  user: User;

  constructor(
    private authStore: AuthStore,
    private titleService: TitleService
  ) {
    this.titleService.setTranslatedTitle('anime.search.title');

    this.user = this.authStore.getUser();
  }
}
