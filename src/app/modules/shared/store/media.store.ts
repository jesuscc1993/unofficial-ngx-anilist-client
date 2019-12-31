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

  storeAnime(animeList: Anime[]) {
    this.setState({
      animeDictionary: {
        ...animeList.reduce(
          (animeDictionary, anime) => ({ ...animeDictionary, [anime.id]: anime }),
          this.getAnimeDictionary()
        ),
      },
    });
  }

  getAnimeDictionary() {
    return this.getState().animeDictionary;
  }

  setAnimeListEntries(listEntries: ListEntry[]) {
    this.setState({ animeListEntries: listEntries });
    this.storeAnime(listEntries.map(listEntry => listEntry.media));
  }

  updateAnimeListEntry(updatedListEntry: ListEntry) {
    this.setAnimeListEntries(
      this.getAnimeListEntries().find(listEntry => listEntry.id === updatedListEntry.id)
        ? this.getAnimeListEntries().map(listEntry =>
            listEntry.id === updatedListEntry.id ? updatedListEntry : listEntry
          )
        : [...this.getAnimeListEntries(), updatedListEntry]
    );
  }

  deleteAnimeListEntry(listEntryToDelete: ListEntry) {
    this.setAnimeListEntries(this.getAnimeListEntries().filter(listEntry => listEntry.id !== listEntryToDelete.id));
    const animeDictionary = this.getAnimeDictionary();
    delete animeDictionary[listEntryToDelete.media.id].mediaListEntry;
    this.setState({ animeDictionary });
  }

  getAnimeListEntries() {
    return this.getState().animeListEntries;
  }
}
