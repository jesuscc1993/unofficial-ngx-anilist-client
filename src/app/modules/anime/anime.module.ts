import { NgModule } from '@angular/core';

import { MediaModule } from '../media/media.module';
import { SharedModule } from '../shared/shared.module';
import { AnimeApi } from './api/anime.api';
import { AnimeCommands } from './commands/anime.commands';
import { AnimeDashboardPage } from './pages/anime-dashboard/anime-dashboard.component';
import { AnimeSearchPage } from './pages/anime-search/anime-search.component';
import { UserAnimeListPage } from './pages/user-anime-list/user-anime-list.component';
import { AnimeService } from './services/anime.service';
import { AnimeStore } from './store/anime.store';

const declarations = [AnimeDashboardPage, AnimeSearchPage, UserAnimeListPage];

@NgModule({
  declarations,
  imports: [SharedModule, MediaModule],
  providers: [AnimeApi, AnimeCommands, AnimeService, AnimeStore],
})
export class AnimeModule {}
