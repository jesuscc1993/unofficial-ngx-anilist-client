import { Observable } from 'rxjs';

import { ListEntry } from '../../shared/types/anilist/listEntry.types';
import { Media } from '../../shared/types/anilist/media.types';
import { PageInfo, PageQuery } from '../../shared/types/anilist/pageInfo.types';
import { User } from '../../shared/types/anilist/user.types';
import { SearchFilters } from './media.types';

export interface MediaApiInterface {
  deleteListEntry(listEntry: ListEntry): Observable<{ deleted: boolean }>;

  queryFavouriteIDs(
    user: User,
    callback: (favouriteIDs: number[]) => void
  ): void;

  queryGenres(): Observable<string[]>;

  queryListEntries(user: User): Observable<ListEntry[]>;

  queryMedia(
    query: SearchFilters,
    pageQuery?: PageQuery
  ): Observable<{
    pageInfo: PageInfo;
    media: Media[];
  }>;

  queryMediaFromIds(
    Ids: number[],
    query: SearchFilters,
    pageQuery?: PageQuery
  ): Observable<{
    pageInfo: PageInfo;
    media: Media[];
  }>;

  queryRelatedMediaIds(user: User): Observable<number[]>;

  saveListEntry(listEntry: ListEntry): Observable<ListEntry>;

  toggleFavourite(media: Media): Observable<number>;
}
