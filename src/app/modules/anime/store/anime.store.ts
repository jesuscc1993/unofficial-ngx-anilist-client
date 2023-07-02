import { Injectable } from '@angular/core';

import { MediaStoreState } from '../../media/store/media.store.types';
import { Store } from '../../shared/store/store';
import { ListEntry } from '../../shared/types/anilist/listEntry.types';
import { Media } from '../../shared/types/anilist/media.types';

@Injectable()
export class AnimeStore extends Store<MediaStoreState> {
  constructor() {
    super({ mediaDictionary: {} });
  }

  storeAnime(animeList: Media[]) {
    this.setState({
      mediaDictionary: {
        ...animeList.reduce(
          (animeDictionary, anime) => ({
            ...animeDictionary,
            [anime.id]: anime,
          }),
          this.getAnimeDictionary()
        ),
      },
    });
  }

  getAnimeDictionary() {
    return this.getState().mediaDictionary;
  }

  setAnimeListEntries(listEntries: ListEntry[]) {
    this.setState({ mediaListEntries: listEntries });
    this.storeAnime(listEntries.map((listEntry) => listEntry.media));
  }

  updateAnimeListEntry(updatedListEntry: ListEntry) {
    this.setAnimeListEntries(
      this.getAnimeListEntries().find(
        (listEntry) => listEntry.id === updatedListEntry.id
      )
        ? this.getAnimeListEntries().map((listEntry) =>
            listEntry.id === updatedListEntry.id ? updatedListEntry : listEntry
          )
        : [...this.getAnimeListEntries(), updatedListEntry]
    );
  }

  deleteAnimeListEntry(listEntryToDelete: ListEntry) {
    this.setAnimeListEntries(
      this.getAnimeListEntries().filter(
        (listEntry) => listEntry.id !== listEntryToDelete.id
      )
    );
    const animeDictionary = this.getAnimeDictionary();
    delete animeDictionary[listEntryToDelete.media.id].mediaListEntry;
    this.setState({ mediaDictionary: animeDictionary });
  }

  getAnimeListEntries() {
    return this.getState().mediaListEntries;
  }

  onEntriesChanges() {
    return this.changes('mediaListEntries');
  }
}
