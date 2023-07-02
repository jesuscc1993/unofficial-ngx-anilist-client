import { takeUntil, tap } from 'rxjs/operators';

import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../../../../../environments/environment';
import {
  animeSearchUrl, apiLoginUrl, apiTokenPrefix, dashboardUrl, rootUrl, userListUrl,
} from '../../../../app.constants';
import { AuthCommands } from '../../commands/auth.commands';
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
  apiLoginUrl = apiLoginUrl;
  dashboardUrl = dashboardUrl;
  animeSearchUrl = animeSearchUrl;
  userListUrl = userListUrl;

  user: User;
  onRoot: boolean;
  onDashboard: boolean;
  onAnimeSearch: boolean;
  onUserList: boolean;
  loginAvailable: boolean;

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

    this.router.events
      .pipe(
        tap(() => {
          this.onRoot = location.href.includes(rootUrl);
          this.onDashboard = location.href.includes(dashboardUrl);
          this.onAnimeSearch = location.href.includes(animeSearchUrl);
          this.onUserList = location.href.includes(userListUrl);
        }),
        takeUntil(this.destroyed$)
      )
      .subscribe();

    this.authCommands
      .onUserChange()
      .pipe(
        tap((user) => (this.user = user)),
        takeUntil(this.destroyed$)
      )
      .subscribe();
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
