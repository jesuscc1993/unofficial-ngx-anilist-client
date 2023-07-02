import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { MangaApi } from './api/manga.api';
import { MangaCommands } from './commands/manga.commands';
import { MangaService } from './services/manga.service';

@NgModule({
  imports: [SharedModule],
  providers: [MangaApi, MangaCommands, MangaService],
})
export class MangaModule {}
