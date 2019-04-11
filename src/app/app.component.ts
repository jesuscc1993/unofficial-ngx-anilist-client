import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';

import { AnimeService } from './modules/anime/services/anime.service';
import { AuthStore } from './modules/shared/store/auth.store';

@Component({
  selector: 'mt-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private authStore: AuthStore, private animeService: AnimeService) {}

  ngOnInit() {
    this.authStore
      .getObservable()
      .pipe(
        tap(({ user }) => {
          if (user) {
            this.animeService.getAnimeList(this.authStore.getUser()).subscribe();
          }
        })
      )
      .subscribe();
  }
}
