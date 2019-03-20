import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AnimeApi } from './api/anime/anime.api';
import { AuthApi } from './api/auth/auth.api';
import { AppComponent } from './app.component';
import { AnimeInfoComponent } from './components/anime-info/anime-info.component';
import { CoverMediaComponent } from './components/cover-media/cover-media.component';
import { FooterComponent } from './components/footer/footer.component';
import { GenresOverviewComponent } from './components/genres-overview/genres-overview.component';
import { HeaderComponent } from './components/header/header.component';
import { ListRelatedMediaComponent } from './components/list-related-media/list-related-media.component';
import { MediaActionsComponent } from './components/media-actions/media-actions.component';
import {
  RecentlyFinishedMediaByFormatComponent,
} from './components/recently-finished-media-by-format/recently-finished-media-by-format.component';
import { RecentlyFinishedMediaComponent } from './components/recently-finished-media/recently-finished-media.component';
import {
  RecentlyUpdatedListEntriesComponent,
} from './components/recently-updated-list-entries/recently-updated-list-entries.component';
import { SearchResultsTableComponent } from './components/search-results-table/search-results-table.component';
import { UserListTableComponent } from './components/user-list-table/user-list-table.component';
import { ListEntryFormModalComponent } from './modals/list-entry-form-modal/list-entry-form-modal.component';
import { MediaDetailModalComponent } from './modals/media-detail-modal/media-detail-modal.component';
import { MaterialModule } from './modules/material.module';
import { AnimeDetailComponent } from './pages/anime-detail/anime-detail.component';
import { AnimeSearchComponent } from './pages/anime-search/anime-search.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { SortPipe } from './pipes/sort';
import { AnimeService } from './services/anime.service';
import { AuthService } from './services/auth.service';
import { AuthStore } from './store/auth.store';

const appRoutes: Routes = [
  { path: '', redirectTo: '/anime-search', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'anime-search', component: AnimeSearchComponent },
  { path: 'anime-detail/:id', component: AnimeDetailComponent },
  { path: 'user-list', component: UserListComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    DashboardComponent,
    AnimeSearchComponent,
    AnimeDetailComponent,
    UserListComponent,
    HeaderComponent,
    FooterComponent,
    SearchResultsTableComponent,
    UserListTableComponent,
    MediaActionsComponent,
    MediaDetailModalComponent,
    ListEntryFormModalComponent,
    GenresOverviewComponent,
    SortPipe,
    AnimeInfoComponent,
    RecentlyFinishedMediaComponent,
    RecentlyUpdatedListEntriesComponent,
    ListRelatedMediaComponent,
    CoverMediaComponent,
    RecentlyFinishedMediaByFormatComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [AnimeService, AuthService, AnimeApi, AuthApi, AuthStore],
  bootstrap: [AppComponent],
  entryComponents: [MediaDetailModalComponent, ListEntryFormModalComponent],
})
export class AppModule {}
