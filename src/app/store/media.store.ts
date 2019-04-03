import { Injectable } from '@angular/core';

import { Anime } from '../types/anilist/media.types';

export type MediaDictionary<MediaType> = { [mediaId: number]: MediaType };
export type MediaStoreState = { animeDictionary: MediaDictionary<Anime> };

@Injectable()
export class MediaStore {
  private state: MediaStoreState = { animeDictionary: {} };

  public getAnimeDictionary() {
    return this.state.animeDictionary;
  }

  public storeAnime(animeList: Anime[]) {
    this.state = {
      ...this.state,
      animeDictionary: {
        ...animeList.reduce(
          (animeDictionary, anime) => ({ ...animeDictionary, [anime.id]: anime }),
          this.state.animeDictionary
        ),
      },
    };
  }
}
