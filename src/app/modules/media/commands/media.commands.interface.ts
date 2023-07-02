import { Observable } from 'rxjs';

import {
  ListEntry,
  ListEntryStatus,
} from '../../shared/types/anilist/listEntry.types';
import { Media } from '../../shared/types/anilist/media.types';
import { PageInfo, PageQuery } from '../../shared/types/anilist/pageInfo.types';
import { User } from '../../shared/types/anilist/user.types';
import { SearchFilters } from '../api/media.types';

export interface MediaCommandsInterface {
  deleteListEntry(listEntry: ListEntry);
  getFavouriteIDs();
  getListEntries(): Observable<ListEntry[]>;
  getListEntriesExport();
  getListEntriesGroupedByStatus();
  getMediaFromIds(
    mediaIds: number[],
    query: SearchFilters,
    pageQuery?: PageQuery
  ): Observable<{ media: Media[]; pageInfo: PageInfo }>;
  getPendingMedia(): Observable<ListEntry[]>;
  queryFavouriteIDs(user: User);
  queryGenres();
  queryListEntries();
  queryMedia(query: SearchFilters, pageQuery?: PageQuery);
  queryRelatedMediaIds(): Observable<number[]>;
  saveListEntry(listEntry: ListEntry);
  saveMediaWithStatus(media: Media, status: ListEntryStatus);
  toggleFavourite(user: User, media: Media);
}
