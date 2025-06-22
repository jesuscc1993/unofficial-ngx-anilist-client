import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { rootUrl } from '../../../shared/constants/navigation.constants';
import { TitleService } from '../../../shared/services/title.service';
import { AuthStore } from '../../../shared/store/auth.store';
import { User } from '../../../shared/types/anilist/user.types';

@Component({
  selector: 'mt-user-manga-list',
  templateUrl: './user-manga-list.page.html',
  styleUrls: ['./user-manga-list.page.scss'],
})
export class UserMangaListPage {
  user: User;
  loggedIn: boolean;

  constructor(
    private authStore: AuthStore,
    private router: Router,
    private titleService: TitleService
  ) {
    this.titleService.setTranslatedTitle('manga.userList.title');

    this.user = this.authStore.getUser();
    this.loggedIn = this.user !== undefined;

    if (!this.loggedIn) {
      this.router.navigate([rootUrl]);
    }
  }
}
