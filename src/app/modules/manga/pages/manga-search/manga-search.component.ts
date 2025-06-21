import { Component } from '@angular/core';

import { TitleService } from '../../../shared/services/title.service';
import { AuthStore } from '../../../shared/store/auth.store';
import { User } from '../../../shared/types/anilist/user.types';

@Component({
  selector: 'mt-manga-search',
  templateUrl: './manga-search.component.html',
  styleUrls: ['./manga-search.component.scss'],
})
export class MangaSearchPageComponent {
  user: User;

  constructor(
    private authStore: AuthStore,
    private titleService: TitleService
  ) {
    this.titleService.setTranslatedTitle('manga.search.title');

    this.user = this.authStore.getUser();
  }
}
