import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import {
  MtListEntryFormModalComponent,
} from './components/modals/mt-list-entry-form-modal/mt-list-entry-form-modal.component';
import { MtMediaDetailModalComponent } from './components/modals/mt-media-detail-modal/mt-media-detail-modal.component';
import { MtAnimeInfoComponent } from './components/mt-anime-info/mt-anime-info.component';
import { MtCoverMediaComponent } from './components/mt-cover-media/mt-cover-media.component';
import { MtGenresOverviewComponent } from './components/mt-genres-overview/mt-genres-overview.component';
import { MtListRelatedMediaComponent } from './components/mt-list-related-media/mt-list-related-media.component';
import { MtMediaActionsComponent } from './components/mt-media-actions/mt-media-actions.component';
import {
  MtRecentlyFinishedMediaByFormatComponent,
} from './components/mt-recently-finished-media-by-format/mt-recently-finished-media-by-format.component';
import {
  MtRecentlyFinishedMediaComponent,
} from './components/mt-recently-finished-media/mt-recently-finished-media.component';
import {
  MtRecentlyUpdatedListEntriesComponent,
} from './components/mt-recently-updated-list-entries/mt-recently-updated-list-entries.component';
import { MtSearchResultsTableComponent } from './components/mt-search-results-table/mt-search-results-table.component';
import {
  MtUserAnimeListTableComponent,
} from './components/mt-user-anime-list-table/mt-user-anime-list-table.component';

const declarations = [
  MtAnimeInfoComponent,
  MtCoverMediaComponent,
  MtGenresOverviewComponent,
  MtListEntryFormModalComponent,
  MtListRelatedMediaComponent,
  MtMediaActionsComponent,
  MtMediaDetailModalComponent,
  MtRecentlyFinishedMediaByFormatComponent,
  MtRecentlyFinishedMediaComponent,
  MtRecentlyUpdatedListEntriesComponent,
  MtSearchResultsTableComponent,
  MtUserAnimeListTableComponent,
];

@NgModule({
  declarations,
  imports: [SharedModule],
  exports: declarations,
  entryComponents: [MtListEntryFormModalComponent, MtMediaDetailModalComponent],
})
export class AnimeModule {}
