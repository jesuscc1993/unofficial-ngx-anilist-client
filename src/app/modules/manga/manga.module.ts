import { NgModule } from '@angular/core';

import { MangaApi } from '../manga/api/manga.api';
import { MangaCommands } from '../manga/commands/manga.commands';
import { MangaService } from '../manga/services/manga.service';
import { MangaStore } from '../manga/store/manga.store';
import { MediaModule } from '../media/media.module';
import { SharedModule } from '../shared/shared.module';
import { UserMangaListPageComponent } from './pages/user-manga-list/user-manga-list.component';

const declarations = [
  UserMangaListPageComponent,
];

@NgModule({
  declarations,
  imports: [SharedModule, MediaModule],
  providers: [MangaApi, MangaCommands, MangaService, MangaStore],
})
export class MangaModule {}
