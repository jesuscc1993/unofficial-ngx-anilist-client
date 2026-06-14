import { inject, Injectable } from '@angular/core';

import { MediaService } from '../../media/services/media.service';
import { AnimeApi } from '../api/anime.api';
import { AnimeStore } from '../store/anime.store';

@Injectable()
export class AnimeService extends MediaService {
  protected mediaApi = inject(AnimeApi);
  protected mediaStore = inject(AnimeStore);
}
