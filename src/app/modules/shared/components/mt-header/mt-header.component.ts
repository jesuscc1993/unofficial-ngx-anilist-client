import { takeUntil, tap } from 'rxjs/operators';

import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../../../../../environments/environment';
import { apiLoginUrl, apiTokenPrefix } from '../../../../app.constants';
import { AuthCommands } from '../../commands/auth.commands';
import {
  animeDashboardUrl,
  animeSearchUrl,
  animeUserListUrl,
  mangaDashboardUrl,
  mangaSearchUrl,
  mangaUserListUrl,
  rootUrl,
} from '../../constants/navigation.constants';
import { AuthStore } from '../../store/auth.store';
import { User } from '../../types/anilist/user.types';
import { WithObservableOnDestroy } from '../with-observable-on-destroy/with-observable-on-destroy.component';

const ANIME_ICON = 'display';
const MANGA_ICON = 'lines-leaning';

@Component({
    selector: 'mt-header',
    templateUrl: './mt-header.component.html',
    styleUrls: ['./mt-header.component.scss'],
    standalone: false
})
export class MtHeaderComponent extends WithObservableOnDestroy {
  animeSearchUrl = animeSearchUrl;
  apiLoginUrl = apiLoginUrl;
  animeUserListUrl = animeUserListUrl;

  loginAvailable: boolean;
  page: string;
  routes: Route[];
  user: User;

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

    this.routes = [
      {
        path: animeSearchUrl,
        literal: 'anime.search.title',
        icon: ANIME_ICON,
        iconb: 'search',
      },
      {
        path: animeUserListUrl,
        literal: 'anime.userList.title',
        icon: ANIME_ICON,
        iconb: 'th-list',
        enabled: !!this.user,
      },
      {
        path: animeDashboardUrl,
        literal: 'anime.dashboard.title',
        icon: ANIME_ICON,
        iconb: 'columns',
        enabled: !!this.user,
      },
      undefined,
      {
        path: mangaDashboardUrl,
        literal: 'manga.dashboard.title',
        icon: MANGA_ICON,
        iconb: 'columns',
        enabled: !!this.user,
      },
      {
        path: mangaUserListUrl,
        literal: 'manga.userList.title',
        icon: MANGA_ICON,
        iconb: 'th-list',
        enabled: !!this.user,
      },
      {
        path: mangaSearchUrl,
        literal: 'manga.search.title',
        icon: MANGA_ICON,
        iconb: 'search',
      },
    ];

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

type Route = {
  path: string;
  literal: string;
  icon: string;
  iconb: string;
  enabled?: boolean;
};
