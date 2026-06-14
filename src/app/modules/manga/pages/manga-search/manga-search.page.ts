import { Component, inject } from '@angular/core';

import { TitleService } from '../../../shared/services/title.service';
import { AuthStore } from '../../../shared/store/auth.store';
import { User } from '../../../shared/types/anilist/user.types';

@Component({
  selector: 'mt-manga-search',
  templateUrl: './manga-search.page.html',
  styleUrls: ['./manga-search.page.scss'],
  standalone: false,
})
export class MangaSearchPage {
  private authStore = inject(AuthStore);
  private titleService = inject(TitleService);

  user?: User;

  constructor() {
    this.titleService.setTranslatedTitle(
      'media.sourceValues.MANGA',
      'media.search.title'
    );

    this.user = this.authStore.getUser();
  }
}
