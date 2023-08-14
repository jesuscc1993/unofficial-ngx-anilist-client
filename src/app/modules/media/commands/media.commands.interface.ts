import { Observable } from 'rxjs';

import {
  ListEntriesByStatus, ListEntry, ListEntryStatus,
} from '../../shared/types/anilist/listEntry.types';
import { Media } from '../../shared/types/anilist/media.types';
import { PageInfo, PageQuery } from '../../shared/types/anilist/pageInfo.types';
import { User } from '../../shared/types/anilist/user.types';
import { MediaExportEntry, MediaPage } from '../../shared/types/media.types';
import { SearchFilters } from '../api/media.types';

export interface MediaCommands {
  deleteListEntry(listEntry: ListEntry): Observable<unknown>;

  getFavouriteIDs(): Observable<number[]>;

  getListEntries(): Observable<ListEntry[]>;

  getListEntriesExport(): Observable<MediaExportEntry[]>;

  getListEntriesGroupedByStatus(): Observable<ListEntriesByStatus>;

  getMediaFromIds(
    mediaIds: number[],
    query: SearchFilters,
    pageQuery?: PageQuery
  ): Observable<{ media: Media[]; pageInfo: PageInfo }>;

  getPendingMedia(): Observable<ListEntry[]>;

  queryFavouriteIDs(user: User): void;

  queryGenres(): Observable<string[]>;

  queryListEntries(): Observable<ListEntry[]>;

  queryMedia(
    query: SearchFilters,
    pageQuery?: PageQuery
  ): Observable<MediaPage>;

  queryRelatedMediaIds(): Observable<number[]>;

  saveListEntry(listEntry: ListEntry): Observable<ListEntry>;

  saveMediaWithStatus(
    media: Media,
    status: ListEntryStatus
  ): Observable<ListEntry>;

  toggleFavourite(user: User, media: Media): Observable<number>;
}
