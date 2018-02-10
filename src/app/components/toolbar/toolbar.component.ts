import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../../providers/anime.service';
import { User } from '../../models/anilist/user';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  private gitHubUrl: string = 'https://github.com/jesuscc1993/angular-material-demo';
  private tokenPrefix: string = '#access_token=';

  user: User;
  loginAvailable: boolean;

  constructor(
    private animeService: AnimeService
  ) {
    this.checkAndStoreAccessToken();

    this.user = this.animeService.getUser();
    // this.user = undefined;
    this.loginAvailable = !this.user && environment.anilist_client_id >= 0;
  }

  ngOnInit() {

  }

  viewOnGitHub(): void {
    window.open(this.gitHubUrl);
  }

  viewProfile(): void {
    window.open(`https://anilist.co/user/${this.user.name}`);
  }

  logout(): void {
    this.animeService.removeAccessToken();
    this.animeService.removeUser();
    this.user = undefined;
    this.loginAvailable = !this.user && environment.anilist_client_id >= 0;
  }

  getApiLoginUrl(): string {
    return `https://anilist.co/api/v2/oauth/authorize?client_id=${ environment.anilist_client_id }&response_type=token`;
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
    })
  }

}
