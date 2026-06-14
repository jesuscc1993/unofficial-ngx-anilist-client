import { inject, Injectable } from '@angular/core';

import { MediaCommands } from '../../media/commands/media.commands';
import { AnimeService } from '../services/anime.service';

@Injectable()
export class AnimeCommands extends MediaCommands {
  protected mediaService = inject(AnimeService);
}
