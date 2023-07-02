import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AnimeApi } from './api/anime.api';
import { AnimeCommands } from './commands/anime.commands';
import { AnimeService } from './services/anime.service';

@NgModule({
  imports: [SharedModule],
  providers: [AnimeApi, AnimeCommands, AnimeService],
})
export class AnimeModule {}
