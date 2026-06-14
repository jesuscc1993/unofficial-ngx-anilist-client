import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { rootUrl } from '../../../shared/constants/navigation.constants';
import { TitleService } from '../../../shared/services/title.service';
import { AuthStore } from '../../../shared/store/auth.store';
import { User } from '../../../shared/types/anilist/user.types';

@Component({
  selector: 'mt-user-anime-list',
  templateUrl: './user-anime-list.page.html',
  styleUrls: ['./user-anime-list.page.scss'],
  standalone: false,
})
export class UserAnimeListPage {
  private authStore = inject(AuthStore);
  private router = inject(Router);
  private titleService = inject(TitleService);

  loggedIn?: boolean;
  user?: User;

  constructor() {
    this.titleService.setTranslatedTitle(
      'media.sourceValues.ANIME',
      'media.list'
    );

    this.user = this.authStore.getUser();
    this.loggedIn = this.user !== undefined;

    if (!this.loggedIn) {
      this.router.navigate([rootUrl]);
    }
  }
}
