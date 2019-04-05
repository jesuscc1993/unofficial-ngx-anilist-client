import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntil, tap } from 'rxjs/operators';

import { environment } from '../../../../../environments/environment';
import {
  animeSearchUrl,
  apiLoginUrl,
  apiTokenPrefix,
  dashboardUrl,
  rootUrl,
  userListUrl,
} from '../../../../app.constants';
import { AuthService } from '../../../../modules/shared/services/auth.service';
import { User } from '../../types/anilist/user.types';
import { AuthStore } from '../../store/auth.store';
import { WithObservableOnDestroy } from '../with-observable-on-destroy/with-observable-on-destroy.component';

@Component({
  selector: 'mt-header',
  templateUrl: './mt-header.component.html',
  styleUrls: ['./mt-header.component.scss'],
})
export class MtHeaderComponent extends WithObservableOnDestroy {
  apiLoginUrl: string = apiLoginUrl;
  dashboardUrl: string = dashboardUrl;
  animeSearchUrl: string = animeSearchUrl;
  userListUrl: string = userListUrl;

  user: User;
  onRoot: boolean;
  onDashboard: boolean;
  onAnimeSearch: boolean;
  onUserList: boolean;
  loginAvailable: boolean;

  constructor(private router: Router, private authService: AuthService, private authStore: AuthStore) {
    super();

    if (location.href.indexOf(apiTokenPrefix) >= 0) {
      const locationParts: string[] = location.href.split('&')[0].split(apiTokenPrefix);
      history.replaceState({}, 'Login success', locationParts[0]);
      this.authService.logIn(locationParts[1]);
      this.navigateToHomePage(true);
    }

    this.loginAvailable = environment.anilist_client_id >= 0;
    this.user = this.authStore.getUser();

    this.router.events
      .pipe(
        tap(() => {
          this.onRoot = location.href.indexOf(rootUrl) >= 0;
          this.onDashboard = location.href.indexOf(dashboardUrl) >= 0;
          this.onAnimeSearch = location.href.indexOf(animeSearchUrl) >= 0;
          this.onUserList = location.href.indexOf(userListUrl) >= 0;
        })
      )
      .subscribe();

    this.authService.userChange
      .pipe(
        takeUntil(this.destroyed$),
        tap((user: User) => {
          this.user = user;
        })
      )
      .subscribe();
  }

  navigateToAnilistProfile() {
    window.open(`https://anilist.co/user/${this.user.name}`);
  }

  navigateToUserList(replaceUrl?: boolean) {
    this.router.navigate([userListUrl], {
      replaceUrl: replaceUrl,
    });
  }

  private navigateToHomePage(replaceUrl?: boolean) {
    this.router.navigate([rootUrl], {
      replaceUrl: replaceUrl,
    });
  }

  protected logOut() {
    this.authService.logOut();
    this.user = undefined;
    this.loginAvailable = environment.anilist_client_id >= 0;
    this.navigateToHomePage();
  }
}
