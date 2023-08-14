import { Injectable } from '@angular/core';

import { MediaService } from '../../media/services/media.service';
import { AnimeApi } from '../api/anime.api';
import { AnimeStore } from '../store/anime.store';

@Injectable()
export class AnimeService extends MediaService {
  constructor(private animeApi: AnimeApi, private animeStore: AnimeStore) {
    super(animeApi, animeStore);
  }
}
