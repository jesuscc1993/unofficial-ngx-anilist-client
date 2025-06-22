import { NgModule } from '@angular/core';

import { MangaApi } from '../manga/api/manga.api';
import { MangaCommands } from '../manga/commands/manga.commands';
import { MangaService } from '../manga/services/manga.service';
import { MangaStore } from '../manga/store/manga.store';
import { MediaModule } from '../media/media.module';
import { SharedModule } from '../shared/shared.module';
import { MangaDashboardPage } from './pages/manga-dashboard/manga-dashboard.page';
import { MangaSearchPage } from './pages/manga-search/manga-search.page';
import { UserMangaListPage } from './pages/user-manga-list/user-manga-list.page';

const declarations = [MangaDashboardPage, MangaSearchPage, UserMangaListPage];

@NgModule({
  declarations,
  imports: [SharedModule, MediaModule],
  providers: [MangaApi, MangaCommands, MangaService, MangaStore],
})
export class MangaModule {}
