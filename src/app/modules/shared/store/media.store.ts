import { Injectable } from '@angular/core';

import { ListEntry } from '../types/anilist/listEntry.types';
import { Anime } from '../types/anilist/media.types';
import { Store } from './store';

export type MediaDictionary<MediaType> = { [mediaId: number]: MediaType };
export type MediaStoreState = { animeDictionary: MediaDictionary<Anime>; animeListEntries?: ListEntry[] };

@Injectable()
export class MediaStore extends Store<MediaStoreState> {
  constructor() {
    super({ animeDictionary: {} });
  }

  public storeAnime(animeList: Anime[]) {
    this.setState({
      animeDictionary: {
        ...animeList.reduce(
          (animeDictionary, anime) => ({ ...animeDictionary, [anime.id]: anime }),
          this.getAnimeDictionary()
        ),
      },
    });
  }
  public getAnimeDictionary() {
    return this.getState().animeDictionary;
  }

  public storeAnimeListEntries(listEntries: ListEntry[]) {
    this.setState({ animeListEntries: listEntries });
    this.storeAnime(listEntries.map(listEntry => listEntry.media));
  }
  public updateAnimeListEntry(listEntry: ListEntry) {
    this.storeAnimeListEntries([...this.getAnimeListEntries(), listEntry]);
  }
  public deleteAnimeListEntry(entryId: number) {
    this.storeAnimeListEntries(this.getAnimeListEntries().filter(listEntry => listEntry.id !== entryId));
  }
  public getAnimeListEntries() {
    return this.getState().animeListEntries;
  }
}
