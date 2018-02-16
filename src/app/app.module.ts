/* core */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/* modules */
import { MaterialModule } from './modules/material.module';
/* components */
import { AppComponent } from './app.component';
/* providers */
import { AnimeService } from './providers/anime.service';
/* pipes */
import { SortPipe } from './pipes/sort';
/* pages */
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { AnimeSearchComponent } from './pages/anime-search/anime-search.component';
import { UserListComponent } from './pages/user-list/user-list.component';
/* components */
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchResultsTableComponent } from './components/search-results-table/search-results-table.component';
import { UserListTableComponent } from './components/user-list-table/user-list-table.component';
import { CoverImageComponent } from './components/cover-image/cover-image.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/anime-search', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'anime-search', component: AnimeSearchComponent },
  { path: 'user-list', component: UserListComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    AnimeSearchComponent,
    UserListComponent,
    HeaderComponent,
    FooterComponent,
    SearchResultsTableComponent,
    UserListTableComponent,
    CoverImageComponent,
    SortPipe
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AnimeService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
