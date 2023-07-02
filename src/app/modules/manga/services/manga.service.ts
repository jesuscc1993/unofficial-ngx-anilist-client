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
import { MangaApi } from '../api/manga.api';
import { MangaStore } from '../store/manga.store';

@Injectable()
export class MangaService implements MediaServiceInterface {
  constructor(private mangaApi: MangaApi, private mediaStore: MangaStore) {}

  getGenres() {
    return this.mangaApi.queryGenres();
  }

  searchMedia(
    query: SearchFilters,
    pageQuery?: PageQuery
  ): Observable<MediaPage> {
    return this.mangaApi.querySearch(query, pageQuery).pipe(
      mergeMap((pageData) => {
        const mediaIds = pageData.media.map((media) => media.id);
        return this.getMediaFromIds(mediaIds, {
          sort:
            query.sort ||
            (query.search ? MediaSort.SEARCH_MATCH : MediaSort.TITLE_ROMAJI),
        }).pipe(
          map(({ media }) => ({
            ...pageData,
            media: mediaIds.map((id) => media.find((manga) => manga.id === id)),
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
    const mangaDictionary = this.mediaStore.getMediaDictionary();
    let missingIds: number[];

    if (mangaDictionary) {
      const storeIds = Object.keys(mangaDictionary).map((key) =>
        parseInt(key, 10)
      );
      missingIds = mediaIds.filter((id) => storeIds.indexOf(id) < 0);
    }

    // NOTE: all media has to be retrieved even if some exist due to search pagination
    return missingIds.length
      ? this.mangaApi
          .queryFromIds(mediaIds, query, pageQuery)
          .pipe(tap((pageData) => this.mediaStore.storeManga(pageData.media)))
      : of({
          media: mediaIds
            .map((id) => mangaDictionary[id])
            .filter((manga) => !!manga),
          pageInfo: pageQuery as PageInfo,
        });
  }

  getListEntries(user: User): Observable<ListEntry[]> {
    const storeEntries = this.mediaStore.getMangaListEntries();
    return storeEntries
      ? of(storeEntries)
      : this.mangaApi
          .queryList(user)
          .pipe(
            tap((listEntries) =>
              this.mediaStore.setMangaListEntries(listEntries)
            )
          );
  }

  getListEntriesExport(user: User) {
    return this.getListEntries(user).pipe(
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
      ),
      tap((entries) =>
        console.log(
          JSON.stringify(
            entries,
            (_, value) => (!!value ? value : undefined),
            2
          )
        )
      )
    );
  }

  getRelatedMediaIds(user: User): Observable<number[]> {
    return this.mangaApi.queryRelatedIds(user);
  }

  getFavouriteIDs(user: User, callback: (favouriteIDs: number[]) => void) {
    return this.mangaApi.queryFavouriteIDs(user, callback);
  }

  saveListEntry(listEntry: ListEntry): Observable<ListEntry> {
    return this.mangaApi.saveMediaListEntry(listEntry).pipe(
      map((updatedListEntry) => ({ ...listEntry, ...updatedListEntry })),
      tap((updatedListEntry) => {
        this.mediaStore.updateMangaListEntry({
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
    return this.mangaApi.deleteMediaListEntry(listEntry).pipe(
      tap(() => {
        this.mediaStore.deleteMangaListEntry(listEntry);
      })
    );
  }

  toggleFavourite(media: Media) {
    return this.mangaApi.toggleFavourite(media);
  }

  getListEntriesGroupedByStatus() {
    return this.mediaStore
      .onEntriesChanges()
      .pipe(
        map((mangaListEntries) => getListEntriesByStatus(mangaListEntries))
      );
  }

  getListEntriesByDateUpdated() {
    return this.mediaStore.onEntriesChanges();
  }

  getPendingMedia() {
    return this.mediaStore
      .onEntriesChanges()
      .pipe(
        map((mangaListEntries) =>
          mangaListEntries.filter(
            (listEntry) =>
              ['PLANNING', 'CURRENT'].includes(listEntry.status) &&
              listEntry.media.status === 'FINISHED'
          )
        )
      );
  }
}
