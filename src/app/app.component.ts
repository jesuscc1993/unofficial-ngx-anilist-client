import { tap } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';

import { AnimeCommands } from './modules/anime/commands/anime.commands';
import { AuthStore } from './modules/shared/store/auth.store';

@Component({
  selector: 'mt-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(
    private animeCommands: AnimeCommands,
    private authStore: AuthStore
  ) {}

  ngOnInit() {
    this.authStore
      .onUserChange()
      .pipe(
        tap((user) => {
          if (user) {
            this.animeCommands.getAnimeListEntries().subscribe();
          }
        })
      )
      .subscribe();
  }
}
