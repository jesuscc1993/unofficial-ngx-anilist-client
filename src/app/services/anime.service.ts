import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';

import { AnimeApi } from '../api/anime.api';
import { ListEntry } from '../types/anilist/listEntry.types';
import { PageQuery } from '../types/anilist/pageInfo.types';
import { MediaQuery } from '../types/anilist/query.types';
import { User } from '../types/anilist/user.types';

@Injectable()
export class AnimeService {
  constructor(private animeApi: AnimeApi) {}

  public getAnimeGenres() {
    return this.animeApi.queryAnimeGenres();
  }

  public searchAnime(query: MediaQuery, pageInfo?: PageQuery) {
    return this.animeApi.queryAnimeSearch(query, pageInfo);
  }

  public getAnimeList(user: User) {
    return this.animeApi.queryAnimeList(user);
  }

  public getAnimeListMediaIds(user: User) {
    return this.animeApi.queryAnimeListMediaIds(user);
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

  public getAnimeListFavourites(user: User, callback: Function) {
    return this.animeApi.queryAnimeListFavourites(user, callback);
  }

  public getAnimeListFavouriteIDs(user: User, callback: Function) {
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
