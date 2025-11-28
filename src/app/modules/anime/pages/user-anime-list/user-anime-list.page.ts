import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { rootUrl } from '../../../shared/constants/navigation.constants';
import { TitleService } from '../../../shared/services/title.service';
import { AuthStore } from '../../../shared/store/auth.store';
import { User } from '../../../shared/types/anilist/user.types';

@Component({
    selector: 'mt-user-anime-list',
    templateUrl: './user-anime-list.page.html',
    styleUrls: ['./user-anime-list.page.scss'],
    standalone: false
})
export class UserAnimeListPage {
  user: User;
  loggedIn: boolean;

  constructor(
    private authStore: AuthStore,
    private router: Router,
    private titleService: TitleService
  ) {
    this.titleService.setTranslatedTitle('anime.userList.title');

    this.user = this.authStore.getUser();
    this.loggedIn = this.user !== undefined;

    if (!this.loggedIn) {
      this.router.navigate([rootUrl]);
    }
  }
}
