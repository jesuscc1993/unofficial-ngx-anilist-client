import 'rxjs/add/operator/map';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { getParsedAnime, getParsedListEntry, mapQueryFilters } from '../domain/anime.domain';
import { AuthStore } from '../store/auth.store';
import { ListEntryStatus } from '../types/anilist/enums/listEntryStatus';
import { MediaSort } from '../types/anilist/enums/mediaSorts';
import { MediaStatus } from '../types/anilist/enums/mediaStatus';
import { MediaTypes } from '../types/anilist/enums/mediaType';
import { ListEntry } from '../types/anilist/listEntry.types';
import { Media } from '../types/anilist/media.types';
import { PageQuery } from '../types/anilist/pageInfo.types';
import { MediaQuery } from '../types/anilist/query.types';
import { User } from '../types/anilist/user.types';
import {
  deleteListEntryQuery,
  finishedAiringMediaQuery,
  genresQuery,
  listFavouritesQuery,
  listMediaIdsQuery,
  listQuery,
  relatedMediaQuery,
  saveListEntryQuery,
  searchQuery,
  toggleFavouriteEntryQuery,
  updatedEntriesQuery,
} from './anime-queries';
import { AniListApi } from './api';

@Injectable()
export class AnimeApi extends AniListApi {
  constructor(protected httpClient: HttpClient, protected authStore: AuthStore) {
    super(httpClient, authStore);
  }

  public queryAnimeGenres(): Observable<string[]> {
    return this.postRequest({
      query: genresQuery
    }).map(response => {
      let responseData: any;

      if (this.isValidResponse(response)) {
        responseData = this.getResponseData(response).GenreCollection;
      }

      return responseData;
    });
  }

  public queryAnimeSearch(query: MediaQuery, pageInfo?: PageQuery): Observable<any> {
    let options = {
      mediaType: MediaTypes.ANIME,
      adultContent: query.adultContent || false,
      onList: query.onList,
      sort: query.sort || MediaSort.TITLE_ROMAJI,

      page: pageInfo ? (pageInfo.pageIndex >= 1 ? pageInfo.pageIndex : 1) : 1,
      perPage: pageInfo ? pageInfo.perPage || 10 : 1
    };

    mapQueryFilters(query, options);

    return this.postRequest({
      query: searchQuery,
      variables: options
    }).map(response => {
      let responseData: any;

      if (this.isValidResponse(response)) {
        responseData = this.getResponseData(response).Page;

        responseData.media.map(anime => getParsedAnime(anime));
      }

      return responseData;
    });
  }

  public queryAnimeList(user: User): Observable<any> {
    let options = {
      mediaType: MediaTypes.ANIME,
      userId: user.id,
      sort: MediaSort.SCORE_DESC
    };

    return this.postRequest({
      query: listQuery,
      variables: options
    }).map(response => {
      let statusObjects = [];

      if (this.isValidResponse(response)) {
        statusObjects = this.getResponseData(response).MediaListCollection.statusLists;

        Object.keys(statusObjects).forEach((status: string) => {
          statusObjects[status].map(entry => getParsedListEntry(entry));
        });
      }

      return statusObjects;
    });
  }

  public queryAnimeListMediaIds(user: User): Observable<any> {
    let options = {
      mediaType: MediaTypes.ANIME,
      userId: user.id
    };

    return this.postRequest({
      query: listMediaIdsQuery,
      variables: options
    }).map(response => {
      let statusObjects = [];

      if (this.isValidResponse(response)) {
        statusObjects = this.getResponseData(response).MediaListCollection.statusLists;

        Object.keys(statusObjects).forEach(status => {
          statusObjects[status].forEach((entry, index) => {
            statusObjects[status][index] = entry.media.id;
          });
        });
      }

      return statusObjects;
    });
  }

  public queryRecentlyUpdatedAnime(user: User, pageInfo?: PageQuery): Observable<any> {
    let options = {
      mediaType: MediaTypes.ANIME,
      userId: user.id,
      sort: MediaSort.UPDATED_TIME_DESC,

      page: pageInfo ? (pageInfo.pageIndex >= 1 ? pageInfo.pageIndex : 1) : 1,
      perPage: pageInfo ? pageInfo.perPage || 10 : 1
    };

    return this.postRequest({
      query: updatedEntriesQuery,
      variables: options
    }).map((response: any) => {
      const listResponse = response ? response.data.Page : [];
      listResponse.mediaList.map(entry => getParsedListEntry(entry));
      return listResponse;
    });
  }

  public queryRecentlyFinishedAiringAnime(query: any, pageInfo?: PageQuery): Observable<any> {
    let options = {
      mediaType: MediaTypes.ANIME,
      status: MediaStatus.FINISHED,
      sort: MediaSort.END_DATE_DESC,
      onList: true,

      idNotIn: query ? query.idNotIn : undefined,

      page: pageInfo ? (pageInfo.pageIndex >= 1 ? pageInfo.pageIndex : 1) : 1,
      perPage: pageInfo ? pageInfo.perPage || 10 : 1
    };

    mapQueryFilters(query, options);

    return this.postRequest({
      query: finishedAiringMediaQuery,
      variables: options
    }).map((response: any) => {
      const mediaResponse = response ? response.data.Page : [];

      mediaResponse.media.map(media => getParsedAnime(media));

      return mediaResponse;
    });
  }

  public queryRelatedAnimeMedia(user: User): Observable<any> {
    let options = {
      mediaType: MediaTypes.ANIME,
      userId: user.id
    };

    return this.postRequest({
      query: relatedMediaQuery,
      variables: options
    }).map((response: any) => {
      let statusObjects = [];

      if (this.isValidResponse(response)) {
        statusObjects = this.getResponseData(response).MediaListCollection.statusLists;

        // TODO remove extra info and add conditional query on detail

        Object.keys(statusObjects).forEach(status => {
          statusObjects[status].forEach((entry, index) => {
            statusObjects[status][index] = entry.media.id;
          });
        });
      }

      return statusObjects;
    });
  }

  public queryAnimeListFavourites(user: User, callback: Function) {
    let options = {
      userId: user.id,
      page: 0
    };

    let favourites = [];
    this.queryFavouritesResultsPage(options, favourites, callback);
  }

  private queryFavouritesResultsPage(options: any, favourites: any[], callback: Function) {
    return this.postRequest({
      query: listFavouritesQuery,
      variables: options
    }).subscribe(response => {
      let results = [];

      if (this.isValidResponse(response)) {
        const responseData = this.getResponseData(response);
        if (responseData && responseData.User && responseData.User.favourites && responseData.User.favourites.anime) {
          const favouritesData = responseData.User.favourites.anime;
          results = favouritesData.nodes;
          favourites = favourites.concat(results);

          if (favouritesData.pageInfo.hasNextPage) {
            options.page++;
            this.queryFavouritesResultsPage(options, favourites, callback);
          } else {
            callback(favourites);
          }
        }
      }
    });
  }

  public queryAnimeListFavouriteIDs(user: User, callback: Function) {
    this.queryAnimeListFavourites(user, listFavourites => {
      let favouriteIDs = [];

      listFavourites.forEach((media: Media) => {
        favouriteIDs.push(media.id);
      });

      callback(favouriteIDs);
    });
  }

  public saveAnimeListEntry(listEntry: ListEntry): Observable<any> {
    let options = {
      status: (listEntry.status || ListEntryStatus.COMPLETED).toUpperCase(),
      mediaId: listEntry.media.id,
      scoreRaw: listEntry.scoreRaw
    };

    return this.postRequest({
      query: saveListEntryQuery,
      variables: options
    });
  }

  public deleteAnimeListEntry(listEntry: ListEntry): Observable<any> {
    let options = {
      id: listEntry.id
    };

    return this.postRequest({
      query: deleteListEntryQuery,
      variables: options
    });
  }

  public toggleAnimeFavouriteEntry(listEntry: ListEntry): Observable<any> {
    let options = {
      animeId: listEntry.media.id
    };

    return this.postRequest({
      query: toggleFavouriteEntryQuery,
      variables: options
    });
  }
}
