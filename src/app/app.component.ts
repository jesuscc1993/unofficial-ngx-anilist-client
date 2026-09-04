import { forkJoin, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Component, inject, OnInit } from '@angular/core';

import { apiTokenError } from './app.constants';
import { AnimeCommands } from './modules/anime/commands/anime.commands';
import { MangaCommands } from './modules/manga/commands/manga.commands';
import { AuthCommands } from './modules/shared/commands/auth.commands';
import { AuthStore } from './modules/shared/store/auth.store';
import { User } from './modules/shared/types/anilist/user.types';

@Component({
  selector: 'mt-root',
  templateUrl: './app.component.html',
  standalone: false,
})
export class AppComponent implements OnInit {
  private authCommands = inject(AuthCommands);
  private animeCommands = inject(AnimeCommands);
  private mangaCommands = inject(MangaCommands);
  private authStore = inject(AuthStore);

  error?: Error;

  ngOnInit() {
    this.authStore
      .onUserChange()
      .pipe(tap((user?: User) => this.onUserChange(user)))
      .subscribe();

    this.authCommands
      .validateToken()
      .pipe(catchError((error) => this.onValidateError(error)))
      .subscribe();
  }

  private onUserChange(user?: User) {
    if (user) {
      forkJoin([
        this.animeCommands.queryListEntries(),
        this.mangaCommands.queryListEntries(),
      ])
        .pipe(catchError((error) => this.onError(error)))
        .subscribe();
    }
  }

  private onValidateError(error: Error) {
    if (error.message === apiTokenError) {
      this.authCommands.logOut();
    }

    return this.onError(error);
  }

  private onError(error: Error) {
    this.error = error;
    return of();
  }
}
