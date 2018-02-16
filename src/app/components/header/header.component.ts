import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimeService } from '../../providers/anime.service';
import { User } from '../../models/anilist/user';
import { environment } from '../../../environments/environment';
import { apiLoginUrl } from '../../app.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  rootUrl: string = '/anime-search';
  userListUrl: string = '/user-list';
  tokenPrefix: string = '#access_token=';
  apiLoginUrl: string;

  user: User;
  onRoot: boolean;
  loginAvailable: boolean;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private animeService: AnimeService
  ) {
    this.checkAndStoreAccessToken();
    this.subscribeToNavigation();

    this.apiLoginUrl = apiLoginUrl;
    this.user = this.animeService.getUser();
    this.loginAvailable = environment.anilist_client_id >= 0;
  }

  ngOnInit(): void {

  }

  private navigateToProfile(): void {
    window.open(`https://anilist.co/user/${this.user.name}`);
  }

  private navigateToUserList(): void {
    this.router.navigate([this.userListUrl]);
  }

  private logout(): void {
    this.animeService.removeAccessToken();
    this.animeService.removeUser();
    this.user = undefined;
    this.loginAvailable = !this.user && environment.anilist_client_id >= 0;
    this.router.navigate([this.rootUrl]);
  }

  private subscribeToNavigation(): void {
    this.router.events.subscribe(() => {
      this.onRoot = location.href.indexOf(this.rootUrl) >= 0;
    });
  }

  private checkAndStoreAccessToken(): void {
    if (location.href.indexOf(this.tokenPrefix) >= 0) {
      const locationParts: string[] = location.href.split('&')[0].split(this.tokenPrefix);
      this.animeService.setAccessToken(locationParts[1]);
      history.replaceState({}, 'Login success', locationParts[0]);
      this.updateUserData();
    }
  }

  private updateUserData(): void {
    this.animeService.queryUser().subscribe((response: any) => {
      this.animeService.setUser(response.Viewer);
      this.user = this.animeService.getUser();
      this.navigateToUserList();
    });
  }

}
