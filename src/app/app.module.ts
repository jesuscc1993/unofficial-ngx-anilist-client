/* core */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
/* modules */
import { MaterialModule } from './modules/material.module';
/* components */
import { AppComponent } from './app.component';
/* providers */
import { AnimeService } from './providers/anime.service';
/* pages */
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AnimeSearchComponent } from './pages/anime-search/anime-search.component';
/* components */
import { AnimeTableComponent } from './components/anime-table/anime-table.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/anime-search', pathMatch: 'full' },
  { path: 'anime-search', component: AnimeSearchComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AnimeSearchComponent,
    AnimeTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    AngularFontAwesomeModule,
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
