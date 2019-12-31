import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';

import { AnimeCommands } from './modules/anime/commands/anime.commands';
import { AuthStore } from './modules/shared/store/auth.store';

@Component({
  selector: 'mt-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private authStore: AuthStore, private animeCommands: AnimeCommands) {}

  ngOnInit() {
    this.authStore
      .changes('user')
      .pipe(
        tap(user => {
          if (user) {
            this.animeCommands.getAnimeListEntries().subscribe();
          }
        })
      )
      .subscribe();
  }
}
