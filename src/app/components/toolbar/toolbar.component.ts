import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AnimeService } from '../../providers/anime.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  gitHubUrl: string = 'https://github.com/jesuscc1993/angular-material-demo';

  loginAvailable: boolean;

  constructor(
      private animeService: AnimeService
  ) {
    const locationParts: string[] = location.href.split('#access_token=');
    if (locationParts.length > 1) {
      this.animeService.setAccessToken(locationParts[1]);
      history.replaceState({}, 'Login success', locationParts[0]);

    } else {
      this.loginAvailable = !this.animeService.getAccessToken() && environment.anilist_client_id >= 0;
    }

  }

  ngOnInit() {
  }

  viewOnGitHub(): void {
    window.open(this.gitHubUrl);
  }

  getApiLoginUrl(): string {
    return `https://anilist.co/api/v2/oauth/authorize?client_id=${ environment.anilist_client_id }&response_type=token`;
  }

}
