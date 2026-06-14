import { inject, Injectable } from '@angular/core';

import { MediaCommands } from '../../media/commands/media.commands';
import { MangaService } from '../services/manga.service';

@Injectable()
export class MangaCommands extends MediaCommands {
  protected mediaService = inject(MangaService);
}
