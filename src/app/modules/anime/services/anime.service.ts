import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { flatMap, map, tap } from 'rxjs/operators';

import { MediaStore } from '../../shared/store/media.store';
import { ListEntry } from '../../shared/types/anilist/listEntry.types';
import { PageInfo, PageQuery } from '../../shared/types/anilist/pageInfo.types';
import { User } from '../../shared/types/anilist/user.types';
import { MediaPage } from '../../shared/types/media.types';
import { SearchFilters } from '../api/anime/anime-api.types';
import { AnimeApi } from '../api/anime/anime.api';

@Injectable()
export class AnimeService {
  constructor(private animeApi: AnimeApi, private mediaStore: MediaStore) {}

  public getAnimeGenres() {
    return this.animeApi.queryAnimeGenres();
  }

  public searchAnime(query: SearchFilters, pageQuery?: PageQuery): Observable<MediaPage> {
    return this.animeApi.queryAnimeSearch(query, pageQuery).pipe(
      flatMap(pageData => {
        const animeIds = pageData.media.map(media => media.id);
        return this.getAnimeFromIds(animeIds, {
          sort: query.sort || query.search ? 'SEARCH_MATCH' : 'TITLE_ROMAJI',
        }).pipe(
          // tap(mediaPage => {
          //   alert(JSON.stringify(mediaPage, undefined, 2));
          // }),
          map(({ media }) => ({ ...pageData, media: animeIds.map(id => media.find(anime => anime.id === id)) }))
        );
      }),
      tap(pageData => this.mediaStore.storeAnime(pageData.media))
    );
  }

  public getAnimeFromIds(mediaIds: number[], query: SearchFilters, pageQuery?: PageQuery): Observable<MediaPage> {
    const animeDictionary = this.mediaStore.getAnimeDictionary();
    let missingIds: number[];

    if (animeDictionary) {
      const storeIds = Object.keys(animeDictionary).map(key => parseInt(key));
      missingIds = mediaIds.filter(id => storeIds.indexOf(id) < 0);
    }

    // NOTE: all media has to be retrieved even if some exist due to search pagination
    return missingIds.length
      ? this.animeApi.queryAnimeFromIds(mediaIds, query, pageQuery)
      : of({
          media: mediaIds.map(id => animeDictionary[id]).filter(anime => !!anime),
          pageInfo: pageQuery as PageInfo,
        });
  }

  public getAnimeListEntries(user: User): Observable<ListEntry[]> {
    const storeEntries = this.mediaStore.getAnimeListEntries();
    return storeEntries
      ? of(storeEntries)
      : this.animeApi.queryAnimeList(user).pipe(tap(listEntries => this.mediaStore.setAnimeListEntries(listEntries)));
  }

  public getRelatedAnimeMediaIds(user: User): Observable<number[]> {
    const storeEntries = this.mediaStore.getAnimeListEntries();
    return this.animeApi.queryRelatedAnimeMediaIds(user).pipe(
      flatMap(animeMediaIds =>
        (storeEntries ? of(storeEntries) : this.animeApi.queryAnimeList(user)).pipe(
          map(entries => {
            const userMediaIds = entries.map(entry => entry.media.id);
            return animeMediaIds.filter(mediaId => !userMediaIds.includes(mediaId));
          })
        )
      )
    );
  }

  public getAnimeListFavouriteIDs(user: User, callback: (favouriteIDs: number[]) => void) {
    return this.animeApi.queryAnimeListFavouriteIDs(user, callback);
  }

  public saveAnimeListEntry(listEntry: ListEntry): Observable<ListEntry> {
    return this.animeApi.saveAnimeListEntry(listEntry).pipe(
      map(updatedListEntry => ({ ...listEntry, ...updatedListEntry })),
      tap(updatedListEntry => {
        this.mediaStore.updateAnimeListEntry(updatedListEntry);
      })
    );
  }

  public deleteAnimeListEntry(listEntry: ListEntry) {
    return this.animeApi.deleteAnimeListEntry(listEntry).pipe(
      tap(() => {
        this.mediaStore.deleteAnimeListEntry(listEntry.id);
      })
    );
  }

  public toggleFavouriteAnimeListEntry(listEntry: ListEntry) {
    return this.animeApi.toggleAnimeFavouriteEntry(listEntry);
  }
}
