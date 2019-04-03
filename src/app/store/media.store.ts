import { Injectable } from '@angular/core';

import { Media } from '../types/anilist/media.types';

export type MediaDictionary = { [mediaId: number]: Media };
export type MediaStoreState = { mediaDictionary: MediaDictionary };

@Injectable()
export class MediaStore {
  private state: MediaStoreState = { mediaDictionary: {} };

  public getMediaDictionary() {
    return this.state.mediaDictionary;
  }

  public storeMedia(mediaList: Media[]) {
    this.state = {
      ...this.state,
      mediaDictionary: {
        ...mediaList.reduce((mediaDictionary, media) => ({ ...mediaDictionary, [media.id]: media }), this.state
          .mediaDictionary as MediaDictionary),
      },
    };
    this.logAsNames();
  }

  private logAsNames() {
    console.log(
      JSON.stringify(
        Object.keys(this.state.mediaDictionary).map(mediaId => this.state.mediaDictionary[mediaId].title.romaji),
        null,
        2
      )
    );
  }
}
