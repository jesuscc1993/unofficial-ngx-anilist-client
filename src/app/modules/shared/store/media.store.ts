import { Injectable } from '@angular/core';

import { Anime } from '../types/anilist/media.types';
import { Store } from './store';

export type MediaDictionary<MediaType> = { [mediaId: number]: MediaType };
export type MediaStoreState = { animeDictionary: MediaDictionary<Anime> };

@Injectable()
export class MediaStore extends Store<MediaStoreState> {
  constructor() {
    super({ animeDictionary: {} });
  }

  public setAnime(animeList: Anime[]) {
    this.setState({
      animeDictionary: {
        ...animeList.reduce(
          (animeDictionary, anime) => ({ ...animeDictionary, [anime.id]: anime }),
          this.getState().animeDictionary
        ),
      },
    });
  }
  public getAnimeDictionary() {
    return this.getState().animeDictionary;
  }
}
