import { LOCATION_INITIALIZED } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AnimeModule } from './modules/anime/anime.module';
import { MangaModule } from './modules/manga/manga.module';
import { MediaModule } from './modules/media/media.module';
import { SharedModule } from './modules/shared/shared.module';
import { AnimeDetailPageComponent } from './pages/anime-detail/anime-detail.component';
import { AnimeSearchPageComponent } from './pages/anime-search/anime-search.component';
import { DashboardPageComponent } from './pages/dashboard/dashboard.component';
import { LoginPageComponent } from './pages/login/login.component';
import { PageNotFoundPageComponent } from './pages/page-not-found/page-not-found.component';
import { UserAnimeListPageComponent } from './pages/user-anime-list/user-anime-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/anime-search', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'anime-search', component: AnimeSearchPageComponent },
  { path: 'anime-detail/:id', component: AnimeDetailPageComponent },
  { path: 'user-anime-list', component: UserAnimeListPageComponent },
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
  declarations: [
    AppComponent,
    PageNotFoundPageComponent,
    LoginPageComponent,
    DashboardPageComponent,
    AnimeSearchPageComponent,
    AnimeDetailPageComponent,
    UserAnimeListPageComponent,
  ],
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
