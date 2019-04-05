import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { AnimeModule } from './modules/anime/anime.module';
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
    AnimeModule,
    RouterModule.forRoot(appRoutes),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http),
        deps: [HttpClient],
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
