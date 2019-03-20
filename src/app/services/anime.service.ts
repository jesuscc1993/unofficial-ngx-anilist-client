import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';

import { SearchFilters } from '../api/anime/anime-api.types';
import { AnimeApi } from '../api/anime/anime.api';
import { ListEntry } from '../types/anilist/listEntry.types';
import { PageQuery } from '../types/anilist/pageInfo.types';
import { User } from '../types/anilist/user.types';

@Injectable()
export class AnimeService {
  constructor(private animeApi: AnimeApi) {}

  public getAnimeGenres() {
    return this.animeApi.queryAnimeGenres();
  }

  public searchAnime(query: SearchFilters, pageInfo?: PageQuery) {
    return this.animeApi.queryAnimeSearch(query, pageInfo);
  }

  public getAnimeList(user: User) {
    return this.animeApi.queryAnimeList(user);
  }

  public getAnimeListMediaIdsByStatus(user: User) {
    return this.animeApi.queryAnimeListMediaIdsByStatus(user);
  }

  public getRecentlyUpdatedAnime(user: User, pageInfo?: PageQuery) {
    return this.animeApi.queryRecentlyUpdatedAnime(user, pageInfo);
  }

  public getRecentlyFinishedAiringAnime(query: any, pageInfo?: PageQuery) {
    return this.animeApi.queryRecentlyFinishedAiringAnime(query, pageInfo);
  }

  public getRelatedAnimeMedia(user: User) {
    return this.animeApi.queryRelatedAnimeMedia(user);
  }

  public getAnimeListFavourites(user: User, callback: (favouriteIDs: number[]) => void) {
    return this.animeApi.queryAnimeListFavourites(user, callback);
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
