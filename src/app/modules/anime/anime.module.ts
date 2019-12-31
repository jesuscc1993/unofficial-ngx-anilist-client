import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AnimeApi } from './api/anime/anime.api';
import { AnimeCommands } from './commands/anime.commands';
import {
  MtListEntryFormModalComponent,
} from './components/modals/mt-list-entry-form-modal/mt-list-entry-form-modal.component';
import { MtMediaDetailModalComponent } from './components/modals/mt-media-detail-modal/mt-media-detail-modal.component';
import { MtPromptComponent } from './components/modals/mt-prompt/mt-prompt.component';
import { MtAnimeInfoComponent } from './components/mt-anime-info/mt-anime-info.component';
import { MtGenresOverviewComponent } from './components/mt-genres-overview/mt-genres-overview.component';
import { MtListEntryGridComponent } from './components/mt-list-entries-grid/mt-list-entries-grid.component';
import { MtListRelatedMediaComponent } from './components/mt-list-related-media/mt-list-related-media.component';
import { MtMediaActionsComponent } from './components/mt-media-actions/mt-media-actions.component';
import { MtMediaCoverComponent } from './components/mt-media-cover/mt-media-cover.component';
import {
  MtRecentlyFinishedMediaComponent,
} from './components/mt-recently-finished-media/mt-recently-finished-media.component';
import {
  MtRecentlyUpdatedListEntriesComponent,
} from './components/mt-recently-updated-list-entries/mt-recently-updated-list-entries.component';
import { MtSearchResultsTableComponent } from './components/mt-search-results-table/mt-search-results-table.component';
import { MtUserAnimeListTableComponent } from './components/mt-user-anime-list-table/mt-user-anime-list-table.component';
import { AnimeService } from './services/anime.service';

const declarations = [
  MtAnimeInfoComponent,
  MtGenresOverviewComponent,
  MtListEntryFormModalComponent,
  MtListEntryGridComponent,
  MtListRelatedMediaComponent,
  MtMediaActionsComponent,
  MtMediaCoverComponent,
  MtMediaDetailModalComponent,
  MtPromptComponent,
  MtRecentlyFinishedMediaComponent,
  MtRecentlyUpdatedListEntriesComponent,
  MtSearchResultsTableComponent,
  MtUserAnimeListTableComponent,
];

@NgModule({
  declarations,
  imports: [SharedModule],
  entryComponents: [MtListEntryFormModalComponent, MtMediaDetailModalComponent],
  exports: declarations,
  providers: [AnimeApi, AnimeCommands, AnimeService],
})
export class AnimeModule {}
