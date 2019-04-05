import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { flatMap, map, tap } from 'rxjs/operators';

import { ListEntry } from '../../shared/types/anilist/listEntry.types';
import { Anime } from '../../shared/types/anilist/media.types';
import { PageQuery } from '../../shared/types/anilist/pageInfo.types';
import { User } from '../../shared/types/anilist/user.types';
import { MediaStore } from '../../shared/store/media.store';
import { SearchFilters } from '../api/anime/anime-api.types';
import { AnimeApi } from '../api/anime/anime.api';

@Injectable()
export class AnimeService {
  constructor(private animeApi: AnimeApi, private mediaStore: MediaStore) {}

  public getAnimeGenres() {
    return this.animeApi.queryAnimeGenres();
  }

  public searchAnime(query: SearchFilters, pageInfo?: PageQuery) {
    return this.animeApi.queryAnimeSearch(query, pageInfo).pipe(
      flatMap(response =>
        this.getAnimeFromIds(response.media.map(media => media.id)).pipe(
          map(animeList => ({ ...response, media: animeList }))
        )
      ),
      tap(pageData => this.mediaStore.storeAnime(pageData.media))
    );
  }

  public getAnimeList(user: User) {
    return this.animeApi.queryAnimeList(user).pipe(
      tap(listEntriesDictionary =>
        this.mediaStore.storeAnime(
          Object.keys(listEntriesDictionary)
            .map(status => listEntriesDictionary[status].map((listEntry: ListEntry) => listEntry.media))
            .reduce((mediaList, media) => [...mediaList, ...media])
        )
      )
    );
  }

  public getAnimeListMediaIdsByStatus(user: User) {
    return this.animeApi.queryAnimeListMediaIdsByStatus(user);
  }

  public getRecentlyUpdatedAnime(user: User, pageInfo?: PageQuery) {
    return this.animeApi.queryRecentlyUpdatedAnime(user, pageInfo).pipe(
      flatMap(response =>
        this.getAnimeFromIds(response.mediaList.map(listEntry => listEntry.media.id)).pipe(
          map(animeList => ({
            ...response,
            mediaList: response.mediaList.map(listEntry => ({
              ...listEntry,
              media: animeList.find(anime => anime.id === listEntry.media.id),
            })),
          }))
        )
      ),
      tap(pageData => this.mediaStore.storeAnime(pageData.mediaList.map(listEntry => listEntry.media)))
    );
  }

  public getRecentlyFinishedAiringAnime(query: any, pageInfo?: PageQuery) {
    return this.animeApi.queryRecentlyFinishedAiringAnime(query, pageInfo).pipe(
      flatMap(response =>
        this.getAnimeFromIds(response.media.map(media => media.id)).pipe(
          map(animeList => ({ ...response, media: animeList }))
        )
      ),
      tap(pageData => this.mediaStore.storeAnime(pageData.media))
    );
  }

  public getRelatedAnimeMedia(user: User) {
    return this.animeApi.queryRelatedAnimeMedia(user).pipe(tap(mediaList => this.mediaStore.storeAnime(mediaList)));
  }

  public getAnimeListFavouriteIDs(user: User, callback: (favouriteIDs: number[]) => void) {
    return this.animeApi.queryAnimeListFavouriteIDs(user, callback);
  }

  public saveAnimeListEntry(listEntry: ListEntry) {
    return this.animeApi.saveAnimeListEntry(listEntry);
  }

  public deleteAnimeListEntry(listEntry: ListEntry) {
    return this.animeApi.deleteAnimeListEntry(listEntry);
  }

  public toggleFavouriteAnimeListEntry(listEntry: ListEntry) {
    return this.animeApi.toggleAnimeFavouriteEntry(listEntry);
  }

  private getAnimeFromIds(mediaIds: number[]): Observable<Anime[]> {
    const animeDictionary = this.mediaStore.getAnimeDictionary();
    const storeIds = Object.keys(animeDictionary).map(key => parseInt(key));
    const missingIds = mediaIds.filter(id => storeIds.indexOf(id) < 0);

    return missingIds.length ? this.animeApi.queryAnimeFromIds(mediaIds) : of(mediaIds.map(id => animeDictionary[id]));
  }
}
