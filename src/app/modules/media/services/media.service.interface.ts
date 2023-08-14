import { Observable } from 'rxjs';

import { ListEntry } from '../../shared/types/anilist/listEntry.types';
import { Media } from '../../shared/types/anilist/media.types';
import { PageQuery } from '../../shared/types/anilist/pageInfo.types';
import { User } from '../../shared/types/anilist/user.types';
import { SearchFilters } from '../api/media.types';

export interface MediaServiceInterface {
  deleteListEntry(listEntry: ListEntry);
  getFavoriteIDs();
  getListEntries();
  queryListEntries(user: User): Observable<ListEntry[]>;
  getListEntriesExport(user: User);
  getListEntriesGroupedByStatus();
  getMediaFromIds(
    mediaIds: number[],
    query: SearchFilters,
    pageQuery?: PageQuery
  );
  getPendingMedia();
  queryFavoriteIDs(user: User, callback: (favoriteIDs: number[]) => void);
  queryGenres();
  queryMedia(query: SearchFilters, pageQuery?: PageQuery);
  queryRelatedMediaIds(user: User): Observable<number[]>;
  saveListEntry(listEntry: ListEntry): Observable<ListEntry>;
  toggleFavorite(user: User, media: Media);
}
