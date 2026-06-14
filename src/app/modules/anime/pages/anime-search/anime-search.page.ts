import { Component, inject } from '@angular/core';

import { TitleService } from '../../../shared/services/title.service';
import { AuthStore } from '../../../shared/store/auth.store';
import { User } from '../../../shared/types/anilist/user.types';

@Component({
  selector: 'mt-anime-search',
  templateUrl: './anime-search.page.html',
  styleUrls: ['./anime-search.page.scss'],
  standalone: false,
})
export class AnimeSearchPage {
  private authStore = inject(AuthStore);
  private titleService = inject(TitleService);

  user?: User;

  constructor() {
    this.titleService.setTranslatedTitle(
      'media.sourceValues.ANIME',
      'media.search.title'
    );

    this.user = this.authStore.getUser();
  }
}
