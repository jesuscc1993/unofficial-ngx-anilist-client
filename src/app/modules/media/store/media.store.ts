import { Injectable } from '@angular/core';

import { Store } from '../../shared/store/store';
import { ListEntry } from '../../shared/types/anilist/listEntry.types';
import { Media } from '../../shared/types/anilist/media.types';
import { MediaStoreState } from './media.store.types';

@Injectable()
export class MediaStore extends Store<MediaStoreState> {
  constructor() {
    super({ mediaDictionary: {} });
  }

  storeMedia(mediaList: Media[]) {
    this.setState({
      mediaDictionary: {
        ...mediaList.reduce(
          (mediaDictionary, media) => ({
            ...mediaDictionary,
            [media.id]: media,
          }),
          this.getMediaDictionary()
        ),
      },
    });
  }

  getMediaDictionary() {
    return this.getState().mediaDictionary;
  }

  setListEntries(listEntries: ListEntry[]) {
    this.setState({ mediaListEntries: listEntries });
    this.storeMedia(listEntries.map((listEntry) => listEntry.media));
  }

  setMediaFavoriteIDs(favoriteIDs: number[]) {
    this.setState({ mediaFavoriteIDs: favoriteIDs });
  }

  updateListEntry(updatedListEntry: ListEntry) {
    this.setListEntries(
      this.getListEntries().find(
        (listEntry) => listEntry.id === updatedListEntry.id
      )
        ? this.getListEntries().map((listEntry) =>
            listEntry.id === updatedListEntry.id ? updatedListEntry : listEntry
          )
        : [...this.getListEntries(), updatedListEntry]
    );
  }

  deleteListEntry(listEntryToDelete: ListEntry) {
    this.setListEntries(
      this.getListEntries().filter(
        (listEntry) => listEntry.id !== listEntryToDelete.id
      )
    );
    const mediaDictionary = this.getMediaDictionary();
    delete mediaDictionary[listEntryToDelete.media.id].mediaListEntry;
    this.setState({ mediaDictionary });
  }

  getListEntries() {
    return this.getState().mediaListEntries;
  }

  onFavoriteIDsChanges() {
    return this.changes('mediaFavoriteIDs');
  }

  onListEntriesChanges() {
    return this.changes('mediaListEntries');
  }
}
