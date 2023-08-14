import { Injectable } from '@angular/core';

import { MediaService } from '../../media/services/media.service';
import { MangaApi } from '../api/manga.api';
import { MangaStore } from '../store/manga.store';

@Injectable()
export class MangaService extends MediaService {
  constructor(
    private mangaApi: MangaApi,
    private mangaStore: MangaStore
  ) {
    super(mangaApi, mangaStore);
  }
}
