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
  standalone: false,
})
export class MtHeaderComponent extends WithObservableOnDestroy {
  animeSearchUrl = animeSearchUrl;
  apiLoginUrl = apiLoginUrl;
  animeUserListUrl = animeUserListUrl;

  loginAvailable: boolean;
  routes: (Route | undefined)[];
  user?: User;

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
        class: 'inline',
        icon: ANIME_ICON,
        literal: 'media.sourceValues.ANIME',
      },
      {
        icon: 'search',
        literal: 'media.search.title',
        path: animeSearchUrl,
      },
      {
        enabled: !!this.user,
        icon: 'th-list',
        literal: 'media.list',
        path: animeUserListUrl,
      },
      {
        enabled: !!this.user,
        icon: 'columns',
        literal: 'media.board',
        path: animeDashboardUrl,
      },
      undefined,
      {
        enabled: !!this.user,
        icon: 'columns',
        literal: 'media.board',
        path: mangaDashboardUrl,
      },
      {
        enabled: !!this.user,
        icon: 'th-list',
        literal: 'media.list',
        path: mangaUserListUrl,
      },
      {
        icon: 'search',
        literal: 'media.search.title',
        path: mangaSearchUrl,
      },
      {
        class: 'inline reverse',
        icon: MANGA_ICON,
        literal: 'media.sourceValues.MANGA',
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
    window.open(`https://anilist.co/user/${this.user?.name}`);
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
  class?: string;
  enabled?: boolean;
  icon?: string;
  literal: string;
  path?: string;
};
