import { Injectable } from '@angular/core';

import { Store } from '../../shared/store/store';
import { ListEntry } from '../../shared/types/anilist/listEntry.types';
import { Media } from '../../shared/types/anilist/media.types';
import { MediaStoreState } from './media.store.types';

@Injectable()
export class MediaStore extends Store<MediaStoreState> {
  constructor() {
    super({
      mediaDictionary: {},
      mediaFavouriteIDs: undefined,
      mediaListEntries: undefined,
    });
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

  setListEntries(listEntries?: ListEntry[]) {
    this.setState({ mediaListEntries: listEntries });
    this.storeMedia(listEntries?.map((listEntry) => listEntry.media) || []);
  }

  setMediaFavouriteIDs(favouriteIDs?: number[]) {
    this.setState({ mediaFavouriteIDs: favouriteIDs });
  }

  upsertListEntry(updatedListEntry: ListEntry) {
    const listEntries = this.getListEntries() ?? [];
    this.setListEntries(
      listEntries.find((listEntry) => listEntry.id === updatedListEntry.id)
        ? listEntries.map((listEntry) =>
            listEntry.id === updatedListEntry.id ? updatedListEntry : listEntry
          )
        : [...listEntries, updatedListEntry]
    );
  }

  deleteListEntry(listEntryToDelete: ListEntry) {
    const updatedMediaListEntries = (this.getListEntries() ?? []).filter(
      (listEntry) => {
        const matches = listEntry.id === listEntryToDelete.id;
        if (matches) {
          console.debug(`Deleting list entry with ID: ${listEntryToDelete.id}`);
        }
        return !matches;
      }
    );

    const updatedMediaDictionary = { ...this.getMediaDictionary() };
    if (updatedMediaDictionary[listEntryToDelete.media.id]?.mediaListEntry) {
      console.debug(
        `Deleting media dictionary entry with ID: ${listEntryToDelete.media.id}`
      );
      delete updatedMediaDictionary[listEntryToDelete.media.id].mediaListEntry;
    }

    this.setState({
      mediaListEntries: updatedMediaListEntries,
      mediaDictionary: updatedMediaDictionary,
    });
  }

  toggleFavourite(media: Media) {
    const ids = new Set(this.getMediaFavouriteIDs() || []);
    if (ids.has(media.id)) {
      ids.delete(media.id);
    } else {
      ids.add(media.id);
    }
    this.setMediaFavouriteIDs([...ids]);
  }

  getListEntries() {
    return this.getState().mediaListEntries;
  }

  getMediaFavouriteIDs() {
    return this.getState().mediaFavouriteIDs;
  }

  onFavouriteIDsChanges() {
    return this.changes('mediaFavouriteIDs');
  }

  onListEntriesChanges() {
    return this.changes('mediaListEntries');
  }
}
