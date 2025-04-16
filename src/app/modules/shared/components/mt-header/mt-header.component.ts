import { takeUntil, tap } from 'rxjs/operators';

import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../../../../../environments/environment';
import { apiLoginUrl, apiTokenPrefix } from '../../../../app.constants';
import { AuthCommands } from '../../commands/auth.commands';
import {
  animeDashboardUrl, animeSearchUrl, animeUserListUrl, mangaDashboardUrl, mangaSearchUrl,
  mangaUserListUrl, rootUrl,
} from '../../constants/navigation.constants';
import { AuthStore } from '../../store/auth.store';
import { User } from '../../types/anilist/user.types';
import {
  WithObservableOnDestroy,
} from '../with-observable-on-destroy/with-observable-on-destroy.component';

@Component({
  selector: 'mt-header',
  templateUrl: './mt-header.component.html',
  styleUrls: ['./mt-header.component.scss'],
})
export class MtHeaderComponent extends WithObservableOnDestroy {
  animeSearchUrl = animeSearchUrl;
  apiLoginUrl = apiLoginUrl;
  animeUserListUrl = animeUserListUrl;

  user: User;
  page: string;
  loginAvailable: boolean;

  routes = [
    {
      path: animeUserListUrl,
      literal: 'anime.userList.title',
      icon: 'tv',
      iconb: 'th-list',
    },
    {
      path: animeSearchUrl,
      literal: 'anime.search.title',
      icon: 'tv',
      iconb: 'search',
    },
    {
      path: animeDashboardUrl,
      literal: 'anime.dashboard.title',
      icon: 'tv',
      iconb: 'columns',
    },
    undefined,
    {
      path: mangaDashboardUrl,
      literal: 'manga.dashboard.title',
      icon: 'book-open',
      iconb: 'columns',
    },
    {
      path: mangaUserListUrl,
      literal: 'manga.userList.title',
      icon: 'book-open',
      iconb: 'th-list',
    },
    {
      path: mangaSearchUrl,
      literal: 'manga.search.title',
      icon: 'book-open',
      iconb: 'search',
    },
  ];

  constructor(
    private router: Router,
    private authCommands: AuthCommands,
    private authStore: AuthStore
  ) {
    super();

    if (location.href.includes(apiTokenPrefix)) {
      const locationParts: string[] = location.href
        .split('&')[0]
        .split(apiTokenPrefix);

      history.replaceState({}, 'Login success', locationParts[0]);

      this.authCommands
        .logIn(locationParts[1])
        .pipe(takeUntil(this.destroyed$))
        .subscribe();

      this.navigateToHomePage(true);
    }

    this.loginAvailable = environment.anilistClientId >= 0;
    this.user = this.authStore.getUser();

    this.authCommands
      .onUserChange()
      .pipe(
        tap((user) => (this.user = user)),
        takeUntil(this.destroyed$)
      )
      .subscribe();
  }

  onPage(url: string) {
    return location.href.includes(url);
  }

  openAnilistProfile() {
    window.open(`https://anilist.co/user/${this.user.name}`);
  }

  logOut() {
    this.authCommands.logOut().pipe(takeUntil(this.destroyed$)).subscribe();
    this.user = undefined;
    this.loginAvailable = environment.anilistClientId >= 0;
    this.navigateToHomePage();
  }

  private navigateToHomePage(replaceUrl?: boolean) {
    this.router.navigate([rootUrl], {
      replaceUrl,
    });
  }
}
