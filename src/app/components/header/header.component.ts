import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';

import { environment } from '../../../environments/environment';
import { animeSearchUrl, apiLoginUrl, apiTokenPrefix, dashboardUrl, rootUrl, userListUrl } from '../../app.constants';
import { AuthService } from '../../services/auth.service';
import { AuthStore } from '../../store/auth.store';
import { User } from '../../types/anilist/user.types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy {
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

  private userChangeSubscription: Subscription;

  constructor(private router: Router, private authService: AuthService, private authStore: AuthStore) {
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

    this.userChangeSubscription = this.authService.userChange
      .pipe(
        tap((user: User) => {
          this.user = user;
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.userChangeSubscription.unsubscribe();
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
