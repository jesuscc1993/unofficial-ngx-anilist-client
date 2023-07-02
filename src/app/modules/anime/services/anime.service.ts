import { Observable, of } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';

import { SearchFilters } from '../../media/api/media.types';
import { getListEntriesByStatus } from '../../media/domain/media.domain';
import { MediaServiceInterface } from '../../media/services/media.interface';
import { ListEntry } from '../../shared/types/anilist/listEntry.types';
import { Media, MediaSort } from '../../shared/types/anilist/media.types';
import { PageInfo, PageQuery } from '../../shared/types/anilist/pageInfo.types';
import { User } from '../../shared/types/anilist/user.types';
import { MediaPage } from '../../shared/types/media.types';
import { AnimeApi } from '../api/anime.api';
import { AnimeStore } from '../store/anime.store';

@Injectable()
export class AnimeService implements MediaServiceInterface {
  constructor(private animeApi: AnimeApi, private mediaStore: AnimeStore) {}

  queryGenres() {
    return this.animeApi.queryGenres();
  }

  queryMedia(
    query: SearchFilters,
    pageQuery?: PageQuery
  ): Observable<MediaPage> {
    return this.animeApi.queryMedia(query, pageQuery).pipe(
      mergeMap((pageData) => {
        const mediaIds = pageData.media.map((media) => media.id);
        return this.getMediaFromIds(mediaIds, {
          sort:
            query.sort ||
            (query.search ? MediaSort.SEARCH_MATCH : MediaSort.TITLE_ROMAJI),
        }).pipe(
          map(({ media: mediaList }) => ({
            ...pageData,
            media: mediaIds.map((id) =>
              mediaList.find((media) => media.id === id)
            ),
          }))
        );
      })
    );
  }

  getMediaFromIds(
    mediaIds: number[],
    query: SearchFilters,
    pageQuery?: PageQuery
  ): Observable<MediaPage> {
    const mediaDictionary = this.mediaStore.getMediaDictionary();
    let missingIds: number[];

    if (mediaDictionary) {
      const storeIds = Object.keys(mediaDictionary).map((key) =>
        parseInt(key, 10)
      );
      missingIds = mediaIds.filter((id) => storeIds.indexOf(id) < 0);
    }

    // NOTE: all media has to be retrieved even if some exist due to search pagination
    return missingIds.length
      ? this.animeApi
          .queryMediaFromIds(mediaIds, query, pageQuery)
          .pipe(tap((pageData) => this.mediaStore.storeMedia(pageData.media)))
      : of({
          media: mediaIds
            .map((id) => mediaDictionary[id])
            .filter((media) => !!media),
          pageInfo: pageQuery as PageInfo,
        });
  }

  queryListEntries(user: User): Observable<ListEntry[]> {
    const storeEntries = this.mediaStore.getListEntries();
    return storeEntries
      ? of(storeEntries)
      : this.animeApi
          .queryListEntries(user)
          .pipe(
            tap((listEntries) => this.mediaStore.setListEntries(listEntries))
          );
  }

  getListEntriesExport(user: User) {
    return this.queryListEntries(user).pipe(
      map((entries) =>
        entries.map(({ scoreRaw, progress, repeat, status, media }) => {
          const entryExport = {
            media: {
              title: media.title,
            },
            status,
            progress: status !== 'COMPLETED' ? progress : undefined,
            repeat,
            scoreRaw,
          };
          return entryExport;
        })
      )
    );
  }

  queryRelatedMediaIds(user: User): Observable<number[]> {
    return this.animeApi.queryRelatedMediaIds(user);
  }

  queryFavouriteIDs(user: User) {
    return this.animeApi.queryFavouriteIDs(user, (favouriteIDs: number[]) => {
      this.mediaStore.setMediaFavouriteIDs(favouriteIDs);
    });
  }

  saveListEntry(listEntry: ListEntry): Observable<ListEntry> {
    return this.animeApi.saveListEntry(listEntry).pipe(
      map((updatedListEntry) => ({ ...listEntry, ...updatedListEntry })),
      tap((updatedListEntry) => {
        this.mediaStore.updateListEntry({
          ...updatedListEntry,
          media: {
            ...updatedListEntry.media,
            mediaListEntry: updatedListEntry,
          },
        });
      })
    );
  }

  deleteListEntry(listEntry: ListEntry) {
    return this.animeApi.deleteListEntry(listEntry).pipe(
      tap(() => {
        this.mediaStore.deleteListEntry(listEntry);
      })
    );
  }

  toggleFavourite(user: User, media: Media) {
    return this.animeApi.toggleFavourite(media).pipe(
      tap(() => {
        this.queryFavouriteIDs(user);
      })
    );
  }

  getListEntriesGroupedByStatus() {
    return this.mediaStore
      .onListEntriesChanges()
      .pipe(
        map((mediaListEntries) => getListEntriesByStatus(mediaListEntries))
      );
  }

  getFavouriteIDs() {
    return this.mediaStore.onFavouriteIDsChanges();
  }

  getListEntries() {
    return this.mediaStore.onListEntriesChanges();
  }

  getPendingMedia() {
    return this.mediaStore
      .onListEntriesChanges()
      .pipe(
        map((mediaListEntries) =>
          mediaListEntries.filter(
            (listEntry) =>
              ['PLANNING', 'CURRENT'].includes(listEntry.status) &&
              listEntry.media.status === 'FINISHED'
          )
        )
      );
  }
}
