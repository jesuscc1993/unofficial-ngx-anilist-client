import { LOCATION_INITIALIZED } from '@angular/common';
import {
  inject,
  Injector,
  NgModule,
  provideAppInitializer,
} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { provideTranslateService, TranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AnimeModule } from './modules/anime/anime.module';
import { AnimeDashboardPage } from './modules/anime/pages/anime-dashboard/anime-dashboard.page';
import { AnimeSearchPage } from './modules/anime/pages/anime-search/anime-search.page';
import { UserAnimeListPage } from './modules/anime/pages/user-anime-list/user-anime-list.page';
import { MangaModule } from './modules/manga/manga.module';
import { MangaDashboardPage } from './modules/manga/pages/manga-dashboard/manga-dashboard.page';
import { MangaSearchPage } from './modules/manga/pages/manga-search/manga-search.page';
import { UserMangaListPage } from './modules/manga/pages/user-manga-list/user-manga-list.page';
import { MediaModule } from './modules/media/media.module';
import { MediaDetailPage } from './modules/media/pages/media-detail/media-detail.page';
import {
  animeDashboardUrl,
  animeSearchUrl,
  animeUserListUrl,
  galleryUrl,
  loginUrl,
  mangaDashboardUrl,
  mangaSearchUrl,
  mangaUserListUrl,
  mediaDetailUrl,
  rootUrl,
} from './modules/shared/constants/navigation.constants';
import { GalleryPage } from './modules/shared/pages/gallery/gallery.page';
import { LoginPage } from './modules/shared/pages/login/login.page';
import { PageNotFoundPage } from './modules/shared/pages/page-not-found/page-not-found.page';
import { SharedModule } from './modules/shared/shared.module';

const appRoutes: Routes = [
  { path: loginUrl, component: LoginPage },
  { path: galleryUrl, component: GalleryPage },

  { path: animeDashboardUrl, component: AnimeDashboardPage },
  { path: animeSearchUrl, component: AnimeSearchPage },
  { path: animeUserListUrl, component: UserAnimeListPage },

  { path: mangaDashboardUrl, component: MangaDashboardPage },
  { path: mangaSearchUrl, component: MangaSearchPage },
  { path: mangaUserListUrl, component: UserMangaListPage },

  { path: mediaDetailUrl, component: MediaDetailPage },

  { path: '', redirectTo: rootUrl, pathMatch: 'full' },
  { path: '**', component: PageNotFoundPage },
];

const translationFactory = (
  translateService: TranslateService,
  injector: Injector
) => {
  return () => {
    return new Promise<void>((resolve) => {
      const availableLanguages = ['en-US', 'es-ES'];
      const defaultLanguage = availableLanguages[0];

      injector.get(LOCATION_INITIALIZED, Promise.resolve()).then(() => {
        translateService
          .use(
            availableLanguages.includes(navigator.language)
              ? navigator.language
              : defaultLanguage
          )
          .subscribe(() => resolve());
      });
    });
  };
};

@NgModule({
  declarations: [AppComponent, PageNotFoundPage, LoginPage, GalleryPage],
  imports: [
    SharedModule,
    MediaModule,
    AnimeModule,
    MangaModule,
    RouterModule.forRoot(appRoutes, {}),
  ],
  providers: [
    provideTranslateService({
      loader: provideTranslateHttpLoader({
        prefix: environment.i18nPath,
      }),
    }),
    provideAppInitializer(() =>
      translationFactory(inject(TranslateService), inject(Injector))()
    ),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
