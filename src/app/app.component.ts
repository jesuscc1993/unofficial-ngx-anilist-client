import { tap } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';

import { AnimeCommands } from './modules/anime/commands/anime.commands';
import { AuthStore } from './modules/shared/store/auth.store';
import { MangaCommands } from './modules/manga/commands/manga.commands';

@Component({
  selector: 'mt-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(
    private animeCommands: AnimeCommands,
    private mangaCommands: MangaCommands,
    private authStore: AuthStore
  ) {}

  ngOnInit() {
    this.authStore
      .onUserChange()
      .pipe(
        tap((user) => {
          if (user) {
            this.animeCommands.queryListEntries().subscribe();
            this.mangaCommands.queryListEntries().subscribe();
          }
        })
      )
      .subscribe();
  }
}
