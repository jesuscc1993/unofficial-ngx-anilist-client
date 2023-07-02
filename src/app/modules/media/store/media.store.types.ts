import { ListEntry } from '../../shared/types/anilist/listEntry.types';
import { Media } from '../../shared/types/anilist/media.types';

export type MediaDictionary<MediaType> = {
  [mediaId: number]: MediaType;
};

export type MediaStoreState = {
  mediaDictionary: MediaDictionary<Media>;
  mediaFavouriteIDs?: number[];
  mediaListEntries?: ListEntry[];
};
