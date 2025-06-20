import { forkJoin, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';

import { apiTokenError } from './app.constants';
import { AnimeCommands } from './modules/anime/commands/anime.commands';
import { MangaCommands } from './modules/manga/commands/manga.commands';
import { AuthCommands } from './modules/shared/commands/auth.commands';
import { AuthStore } from './modules/shared/store/auth.store';
import { User } from './modules/shared/types/anilist/user.types';

@Component({
  selector: 'mt-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  error: Error;

  constructor(
    private authCommands: AuthCommands,
    private animeCommands: AnimeCommands,
    private mangaCommands: MangaCommands,
    private authStore: AuthStore
  ) {}

  ngOnInit() {
    this.authStore.onUserChange().pipe(this.handleUserChange()).subscribe();
    this.authCommands.validateToken().pipe(this.handleTokenError()).subscribe();
  }

  private handleUserChange() {
    return tap((user?: User) => {
      if (user) {
        forkJoin([
          this.animeCommands.queryListEntries(),
          this.mangaCommands.queryListEntries(),
        ])
          .pipe(catchError(this.onError))
          .subscribe();
      }
    });
  }

  private handleTokenError() {
    return catchError((error) => {
      if (error.message === apiTokenError) {
        this.authCommands.logOut();
      }

      return this.onError(error);
    });
  }

  private onError(error: Error) {
    this.error = error;
    return of();
  }
}
