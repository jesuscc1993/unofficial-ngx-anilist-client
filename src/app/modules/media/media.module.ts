import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import {
  MtListEntryFormModalComponent,
} from './components/modals/mt-list-entry-form-modal/mt-list-entry-form-modal.component';
import {
  MtMediaDetailModalComponent,
} from './components/modals/mt-media-detail-modal/mt-media-detail-modal.component';
import { MtPromptComponent } from './components/modals/mt-prompt/mt-prompt.component';
import {
  MtGenresOverviewComponent,
} from './components/mt-genres-overview/mt-genres-overview.component';
import {
  MtListEntryGridComponent,
} from './components/mt-list-entries-grid/mt-list-entries-grid.component';
import {
  MtListRelatedMediaComponent,
} from './components/mt-list-related-media/mt-list-related-media.component';
import { MtMediaActionsComponent } from './components/mt-media-actions/mt-media-actions.component';
import {
  MtMediaCountryFlagComponent,
} from './components/mt-media-country-flag/mt-media-country-flag.component';
import { MtMediaCountryComponent } from './components/mt-media-country/mt-media-country.component';
import { MtMediaCoverComponent } from './components/mt-media-cover/mt-media-cover.component';
import { MtMediaDetailComponent } from './components/mt-media-detail/mt-media-detail.component';
import { MtMediaInfoComponent } from './components/mt-media-info/mt-media-info.component';
import { MtMediaScoreComponent } from './components/mt-media-score/mt-media-score.component';
import { MtMediaSearchComponent } from './components/mt-media-search/mt-media-search.component';
import { MtPaginationComponent } from './components/mt-pagination/mt-pagination.component';
import {
  MtRecentlyFinishedMediaComponent,
} from './components/mt-recently-finished-media/mt-recently-finished-media.component';
import {
  MtRecentlyUpdatedListEntriesComponent,
} from './components/mt-recently-updated-list-entries/mt-recently-updated-list-entries.component';
import {
  MtSearchResultsTableComponent,
} from './components/mt-search-results-table/mt-search-results-table.component';
import {
  MtUserMediaListTableComponent,
} from './components/mt-user-media-list-table/mt-user-media-list-table.component';
import {
  MtUserMediaListComponent,
} from './components/mt-user-media-list/mt-user-media-list.component';
import { MtMediaDashboardComponent } from './pages/media-dashboard/media-dashboard.page';
import { MediaDetailPage } from './pages/media-detail/media-detail.page';

const declarations = [
  MediaDetailPage,
  MtGenresOverviewComponent,
  MtListEntryFormModalComponent,
  MtListEntryGridComponent,
  MtListRelatedMediaComponent,
  MtMediaActionsComponent,
  MtMediaCountryComponent,
  MtMediaCountryFlagComponent,
  MtMediaCoverComponent,
  MtMediaDashboardComponent,
  MtMediaDetailComponent,
  MtMediaDetailModalComponent,
  MtMediaInfoComponent,
  MtMediaScoreComponent,
  MtMediaSearchComponent,
  MtPaginationComponent,
  MtPromptComponent,
  MtRecentlyFinishedMediaComponent,
  MtRecentlyUpdatedListEntriesComponent,
  MtSearchResultsTableComponent,
  MtUserMediaListComponent,
  MtUserMediaListTableComponent,
];

@NgModule({
  declarations,
  imports: [SharedModule],
  exports: declarations,
})
export class MediaModule {}
