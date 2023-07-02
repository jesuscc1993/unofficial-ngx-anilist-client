import { Injectable } from '@angular/core';

import { MediaStoreState } from '../../media/store/media.store.types';
import { Store } from '../../shared/store/store';
import { ListEntry } from '../../shared/types/anilist/listEntry.types';
import { Media } from '../../shared/types/anilist/media.types';

@Injectable()
export class MangaStore extends Store<MediaStoreState> {
  constructor() {
    super({ mediaDictionary: {} });
  }

  storeManga(mangaList: Media[]) {
    this.setState({
      mediaDictionary: {
        ...mangaList.reduce(
          (mediaDictionary, manga) => ({
            ...mediaDictionary,
            [manga.id]: manga,
          }),
          this.getMediaDictionary()
        ),
      },
    });
  }

  getMediaDictionary() {
    return this.getState().mediaDictionary;
  }

  setMangaListEntries(listEntries: ListEntry[]) {
    this.setState({ mediaListEntries: listEntries });
    this.storeManga(listEntries.map((listEntry) => listEntry.media));
  }

  updateMangaListEntry(updatedListEntry: ListEntry) {
    this.setMangaListEntries(
      this.getMangaListEntries().find(
        (listEntry) => listEntry.id === updatedListEntry.id
      )
        ? this.getMangaListEntries().map((listEntry) =>
            listEntry.id === updatedListEntry.id ? updatedListEntry : listEntry
          )
        : [...this.getMangaListEntries(), updatedListEntry]
    );
  }

  deleteMangaListEntry(listEntryToDelete: ListEntry) {
    this.setMangaListEntries(
      this.getMangaListEntries().filter(
        (listEntry) => listEntry.id !== listEntryToDelete.id
      )
    );
    const mediaDictionary = this.getMediaDictionary();
    delete mediaDictionary[listEntryToDelete.media.id].mediaListEntry;
    this.setState({ mediaDictionary });
  }

  getMangaListEntries() {
    return this.getState().mediaListEntries;
  }

  onEntriesChanges() {
    return this.changes('mediaListEntries');
  }
}
