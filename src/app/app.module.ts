import { LOCATION_INITIALIZED } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AnimeModule } from './modules/anime/anime.module';
import {
  AnimeDashboardPageComponent,
} from './modules/anime/pages/anime-dashboard/anime-dashboard.component';
import {
  AnimeDetailPageComponent,
} from './modules/anime/pages/anime-detail/anime-detail.component';
import {
  AnimeSearchPageComponent,
} from './modules/anime/pages/anime-search/anime-search.component';
import {
  UserAnimeListPageComponent,
} from './modules/anime/pages/user-anime-list/user-anime-list.component';
import { MangaModule } from './modules/manga/manga.module';
import {
  MangaDashboardPageComponent,
} from './modules/manga/pages/manga-dashboard/manga-dashboard.component';
import {
  MangaDetailPageComponent,
} from './modules/manga/pages/manga-detail/manga-detail.component';
import {
  MangaSearchPageComponent,
} from './modules/manga/pages/manga-search/manga-search.component';
import {
  UserMangaListPageComponent,
} from './modules/manga/pages/user-manga-list/user-manga-list.component';
import { MediaModule } from './modules/media/media.module';
import {
  animeDashboardUrl, animeDetailUrl, animeSearchUrl, animeUserListUrl, loginUrl, mangaDashboardUrl,
  mangaDetailUrl, mangaSearchUrl, mangaUserListUrl, rootUrl,
} from './modules/shared/constants/navigation.constants';
import { SharedModule } from './modules/shared/shared.module';
import { LoginPageComponent } from './pages/login/login.component';
import { PageNotFoundPageComponent } from './pages/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', redirectTo: rootUrl, pathMatch: 'full' },
  { path: loginUrl, component: LoginPageComponent },
  { path: animeSearchUrl, component: AnimeSearchPageComponent },
  { path: mangaSearchUrl, component: MangaSearchPageComponent },
  { path: animeDashboardUrl, component: AnimeDashboardPageComponent },
  { path: mangaDashboardUrl, component: MangaDashboardPageComponent },
  { path: animeDetailUrl, component: AnimeDetailPageComponent },
  { path: mangaDetailUrl, component: MangaDetailPageComponent },
  { path: animeUserListUrl, component: UserAnimeListPageComponent },
  { path: mangaUserListUrl, component: UserMangaListPageComponent },
  { path: '**', component: PageNotFoundPageComponent },
];

const translationFactory = (
  translateService: TranslateService,
  injector: Injector
) => {
  return () => {
    return new Promise<any>((resolve: any) => {
      const availableLanguages = ['en-US', 'es-ES'];
      const defaultLanguage = availableLanguages[0];

      injector.get(LOCATION_INITIALIZED, Promise.resolve(null)).then(() => {
        translateService.setDefaultLang(defaultLanguage);
        translateService
          .use(
            availableLanguages.includes(navigator.language)
              ? navigator.language
              : defaultLanguage
          )
          .subscribe(() => resolve(null));
      });
    });
  };
};

@NgModule({
  declarations: [AppComponent, PageNotFoundPageComponent, LoginPageComponent],
  imports: [
    SharedModule,
    MediaModule,
    AnimeModule,
    MangaModule,
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) =>
          new TranslateHttpLoader(http, environment.i18nPath),
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: translationFactory,
      deps: [TranslateService, Injector],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
