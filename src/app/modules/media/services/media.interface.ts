import { Observable } from 'rxjs';

import { ListEntry } from '../../shared/types/anilist/listEntry.types';
import { Media } from '../../shared/types/anilist/media.types';
import { PageQuery } from '../../shared/types/anilist/pageInfo.types';
import { User } from '../../shared/types/anilist/user.types';
import { SearchFilters } from '../api/media.types';

export interface MediaServiceInterface {
  deleteListEntry(listEntry: ListEntry);
  getFavouriteIDs(user: User, callback: (favouriteIDs: number[]) => void);
  getGenres();
  getListEntries(user: User): Observable<ListEntry[]>;
  getListEntriesByDateUpdated();
  getListEntriesExport(user: User);
  getListEntriesGroupedByStatus();
  getMediaFromIds(
    mediaIds: number[],
    query: SearchFilters,
    pageQuery?: PageQuery
  );
  getPendingMedia();
  getRelatedMediaIds(user: User): Observable<number[]>;
  saveListEntry(listEntry: ListEntry): Observable<ListEntry>;
  searchMedia(query: SearchFilters, pageQuery?: PageQuery);
  toggleFavourite(media: Media);
}
