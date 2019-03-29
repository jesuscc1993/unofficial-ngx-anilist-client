import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { SearchFilters } from '../api/anime/anime-api.types';
import { AnimeApi } from '../api/anime/anime.api';
import { MediaStore } from '../store/media.store';
import { ListEntry } from '../types/anilist/listEntry.types';
import { PageQuery } from '../types/anilist/pageInfo.types';
import { User } from '../types/anilist/user.types';

@Injectable()
export class AnimeService {
  constructor(private animeApi: AnimeApi, private mediaStore: MediaStore) {}

  public getAnimeGenres() {
    return this.animeApi.queryAnimeGenres();
  }

  public searchAnime(query: SearchFilters, pageInfo?: PageQuery) {
    return this.animeApi
      .queryAnimeSearch(query, pageInfo)
      .pipe(tap(pageData => this.mediaStore.storeMedia(pageData.media)));
  }

  public getAnimeList(user: User) {
    return this.animeApi.queryAnimeList(user).pipe(
      tap(listEntriesDictionary =>
        this.mediaStore.storeMedia(
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
    return this.animeApi
      .queryRecentlyUpdatedAnime(user, pageInfo)
      .pipe(tap(pageData => this.mediaStore.storeMedia(pageData.mediaList.map(listEntry => listEntry.media))));
  }

  public getRecentlyFinishedAiringAnime(query: any, pageInfo?: PageQuery) {
    return this.animeApi
      .queryRecentlyFinishedAiringAnime(query, pageInfo)
      .pipe(tap(pageData => this.mediaStore.storeMedia(pageData.media)));
  }

  public getRelatedAnimeMedia(user: User) {
    return this.animeApi.queryRelatedAnimeMedia(user).pipe(tap(mediaList => this.mediaStore.storeMedia(mediaList)));
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
}
