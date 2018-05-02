import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from '../models/anilist/user';
import { Anime } from '../models/anilist/anime';
import { ListEntry } from '../models/anilist/listEntry';
import { ListEntryStatus } from '../models/anilist/listEntryStatus';
import { Media } from '../models/anilist/media';
import { MediaFormat } from '../models/anilist/mediaFormats';
import { MediaStatus } from '../models/anilist/mediaStatus';
import { MediaTypes } from '../models/anilist/mediaType';
import { MediaQuery } from '../models/anilist/query';
import { PageQuery } from '../models/anilist/pageInfo';
import { MediaSort } from '../models/anilist/mediaSorts';
import { apiUrl, accessTokenCookieKey, userCookieKey } from '../app.constants';
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
  userQuery
} from './anime-queries';

@Injectable()
export class AnimeService {
  private apiUrl: string = apiUrl;
  private fallbackCover: string = 'assets/pictures/non-vectorial/no-cover-available.png';

  private pageInfoFields: string;
  private listAnimeFields: string;
  private searchAnimeFields: string;
  private listEntryFields: string;

  userChange: EventEmitter<any> = new EventEmitter<any>();

  constructor (
    private httpClient: HttpClient
  ) {

  }

  /**
   * Stores the access token for the currently logged in user
   * @param {string} accessToken
   */
  public setAccessToken(accessToken: string): void {
    localStorage.setItem(accessTokenCookieKey, accessToken);
  }

  /**
   * Returns the access token for the currently logged in user
   * @returns {string}
   */
  public getAccessToken(): string {
    return localStorage.getItem(accessTokenCookieKey);
  }

  /**
   * Clears the access token for the currently logged in user
   */
  public removeAccessToken(): void {
    localStorage.removeItem(accessTokenCookieKey);
  }

  /**
   * Stores the currently logged in user
   * @param {User} user
   */
  public setUser(user: User): void {
    localStorage.setItem(userCookieKey, JSON.stringify(user));
  }

  /**
   * Returns the currently logged in user
   * @returns {User}
   */
  public getUser(): User {
    const jsonString: string = localStorage.getItem(userCookieKey);
    return jsonString ? JSON.parse(jsonString) : undefined;
  }

  /**
   * Clears the currently logged in user
   */
  public removeUser(): void {
    localStorage.removeItem(userCookieKey);
  }

  /**
   * Retrieves and stores the current user based on their access token
   * @param {string} accessToken
   */
  public logIn(accessToken: string): void {
    this.setAccessToken(accessToken);

    this.queryUser().subscribe((response: any) => {
      this.setUser(response.Viewer);
      this.userChange.emit(this.getUser());
    });
  }

  /**
   * Clears the user and their access token
   */
  public logOut(): void {
    this.removeAccessToken();
    this.removeUser();
    this.userChange.emit();
  }

  /**
   * Returns the available genres to use as filters
   * @returns {Observable<string[]>}
   */
  public getGenres(): Observable<string[]> {
    return this.httpClient.post(this.apiUrl, {
      query: genresQuery

    }, this.getRequestOptions()).map((response) => {
      let serverResponse: any;

      if (this.isValidResponse(response)) {
        serverResponse = this.getResponseData(response).GenreCollection;
      }

      return serverResponse;
    });
  }

  /**
   * Returns paginated media based on the query
   * @param {MediaQuery} query
   * @param {PageQuery} pageInfo
   * @returns {Observable<any>}
   */
  public search(query: MediaQuery, pageInfo?: PageQuery): Observable<any> {
    let options: any = {
      mediaType: MediaTypes.ANIME,
      adultContent: query.adultContent || false,
      onList: query.onList,
      sort: query.sort || MediaSort.TITLE_ROMAJI,

      page: pageInfo ? (pageInfo.pageIndex >= 1 ? pageInfo.pageIndex : 1) : 1,
      perPage: pageInfo ? (pageInfo.perPage || 10) : 1
    };

    if (query.id) {
      options.id = query.id;
    }
    if (query.search) {
      options.search = query.search;
    }
    if (query.startDate_greater) {
      options.startDate_greater = query.startDate_greater;
    }
    if (query.startDate_lesser) {
      options.startDate_lesser = query.startDate_lesser;
    }
    if (query.averageScore_greater) {
      options.averageScore_greater = query.averageScore_greater;
    }
    if (query.averageScore_lesser) {
      options.averageScore_lesser = query.averageScore_lesser;
    }
    if (query.genre_in && query.genre_in.length) {
      options.genre_in = query.genre_in;
    }
    if (query.genre_not_in && query.genre_not_in.length) {
      options.genre_not_in = query.genre_not_in;
    }
    if (query.format_in && query.format_in.length) {
      options.format_in = query.format_in;
    }
    if (query.status_in && query.status_in.length) {
      options.status_in = query.status_in;
    }

    return this.httpClient.post(this.apiUrl, {
      query: searchQuery,
      variables: options

    }, this.getRequestOptions()).map((response) => {
      let serverResponse: any;

      if (this.isValidResponse(response)) {
        serverResponse = this.getResponseData(response).Page;

        serverResponse.media.forEach((anime: Anime) => {
          this.parseAnimeData(anime);
        });
      }

      return serverResponse;
    });
  }

  /**
   * Returns hte currently logged in user
   * @returns {Observable<User>}
   */
  public queryUser(): Observable<User> {
    return this.httpClient.post(this.apiUrl, {
      query: userQuery

    }, this.getRequestOptions()).map((response) => {
      let serverResponse: any;

      if (this.isValidResponse(response)) {
        serverResponse = this.getResponseData(response);
      }

      return serverResponse;
    });
  }

  /**
   * Returns the anime list for the given user
   * @param {User} user
   * @returns {Observable<any>}
   */
  public getList(user: User): Observable<any> {
    let options: any = {
      mediaType: MediaTypes.ANIME,
      userId: user.id,
      sort: MediaSort.SCORE_DESC
    };

    return this.httpClient.post(this.apiUrl, {
      query: listQuery,
      variables: options

    }, this.getRequestOptions()).map((response) => {
      let statusObjects: any[] = [];

      if (this.isValidResponse(response)) {
        statusObjects = this.getResponseData(response).MediaListCollection.statusLists;

        Object.keys(statusObjects).forEach((status: string) => {
          statusObjects[status].forEach((entry: any) => {
            this.parseListEntryData(entry);
          });
        });
      }

      return statusObjects;
    });
  }

  /**
   * Returns the media ids for all the entries on the given user's list
   * @param {User} user
   * @returns {Observable<any>}
   */
  public getListMediaIds(user: User): Observable<any> {
    let options: any = {
      mediaType: MediaTypes.ANIME,
      userId: user.id
    };

    return this.httpClient.post(this.apiUrl, {
      query: listMediaIdsQuery,
      variables: options

    }, this.getRequestOptions()).map((response) => {
      let statusObjects: any[] = [];

      if (this.isValidResponse(response)) {
        statusObjects = this.getResponseData(response).MediaListCollection.statusLists;

        Object.keys(statusObjects).forEach((status: string) => {
          statusObjects[status].forEach((entry: any, index: number) => {
            statusObjects[status][index] = entry.media.id;
          });
        });
      }

      return statusObjects;
    });
  }

  /**
   * Returns the most recently updated list entries for the given user
   * @param {User} user
   * @param {PageQuery} pageInfo
   * @returns {Observable<any>}
   */
  public getRecentlyUpdated(user: User, pageInfo?: PageQuery): Observable<any> {
    let options: any = {
      mediaType: MediaTypes.ANIME,
      userId: user.id,
      sort: MediaSort.UPDATED_TIME_DESC,

      page: pageInfo ? (pageInfo.pageIndex >= 1 ? pageInfo.pageIndex : 1) : 1,
      perPage: pageInfo ? (pageInfo.perPage || 10) : 1
    };

    return this.httpClient.post(this.apiUrl, {
      query: updatedEntriesQuery,
      variables: options

    }, this.getRequestOptions()).map((response: any) => {
      const listResponse: any = response ? response.data.Page : [];

      listResponse.mediaList.forEach((entry: any) => {
        this.parseListEntryData(entry);
      });

      return listResponse;
    });
  }

  /**
   * Returns the most recently finished airing media on the given user's list
   * @param query
   * @param {PageQuery} pageInfo
   * @returns {Observable<any>}
   */
  public getRecentlyFinishedAiring(query: any, pageInfo?: PageQuery): Observable<any> {
    let options: any = {
      mediaType: MediaTypes.ANIME,
      status: MediaStatus.FINISHED,
      sort: MediaSort.END_DATE_DESC,
      onList: true,

      idNotIn: query ? query.idNotIn : undefined,

      page: pageInfo ? (pageInfo.pageIndex >= 1 ? pageInfo.pageIndex : 1) : 1,
      perPage: pageInfo ? (pageInfo.perPage || 10) : 1
    };

    return this.httpClient.post(this.apiUrl, {
      query: finishedAiringMediaQuery,
      variables: options

    }, this.getRequestOptions()).map((response: any) => {
      const mediaResponse: any = response ? response.data.Page : [];

      mediaResponse.media.forEach((media: Anime) => {
        this.parseAnimeData(media);
      });

      return mediaResponse;
    });
  }

  /**
   * Returns the related media for the entries on the given user's list
   * @param {User} user
   * @returns {Observable<any>}
   */
  public getRelatedMedia(user: User): Observable<any> {
    let options: any = {
      mediaType: MediaTypes.ANIME,
      userId: user.id
    };

    return this.httpClient.post(this.apiUrl, {
      query: relatedMediaQuery,
      variables: options

    }, this.getRequestOptions()).map((response: any) => {
      let statusObjects: any[] = [];

      if (this.isValidResponse(response)) {
        statusObjects = this.getResponseData(response).MediaListCollection.statusLists;

        // TODO remove extra info and add conditional query on detail

        Object.keys(statusObjects).forEach((status: string) => {
          statusObjects[status].forEach((entry: any, index: number) => {
            statusObjects[status][index] = entry.media.id;
          });
        });
      }

      return statusObjects;
    });
  }

  /**
   * Returns the anime favourited by the given user
   * @param {User} user
   * @param {Function} callback
   */
  public getListFavourites(user: User, callback: Function): void {
    let options: any = {
      userId: user.id,
      page: 0
    };

    let favourites: any[] = [];
    this.queryFavouritesResultsPage(options, favourites, callback);
  }

  /**
   * Returns the paginated anime favourited by the given user
   * @param options
   * @param {any[]} favourites
   * @param {Function} callback
   */
  private queryFavouritesResultsPage(options: any, favourites: any[], callback: Function): void {
    this.httpClient.post(this.apiUrl, {
      query: listFavouritesQuery,
      variables: options

    }, this.getRequestOptions()).subscribe((response) => {
      let results: any[] = [];

      if (this.isValidResponse(response)) {
        const responseData: any = this.getResponseData(response);
        if (responseData && responseData.User && responseData.User.favourites && responseData.User.favourites.anime) {
          const favouritesData: any = responseData.User.favourites.anime;
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

  /**
   * Returns the media IDs for the anime favourited by the given user
   * @param {User} user
   * @param {Function} callback
   */
  public getListFavouriteIDs(user: User, callback: Function): void {
    this.getListFavourites(user, (listFavourites) => {
      let favouriteIDs: any[] = [];

      listFavourites.forEach((media: Media) => {
        favouriteIDs.push(media.id);
      });

      callback(favouriteIDs);
    });
  }

  /**
   * Creates or updates the provided list entry for the currently logged in user
   * @param listEntryRequest
   * @returns {Observable<any>}
   */
  public saveListEntry(listEntryRequest: any): Observable<any> {
    let options: any = {
      status: (listEntryRequest.status || ListEntryStatus.COMPLETED).toUpperCase(),
      mediaId: listEntryRequest.media.id,
      scoreRaw: listEntryRequest.scoreRaw
    };

    return this.httpClient.post(this.apiUrl, {
      query: saveListEntryQuery,
      variables: options

    }, this.getRequestOptions());
  }

  /**
   * Removes the provided list entry for the currently logged in user
   * @param {ListEntry} listEntry
   * @returns {Observable<any>}
   */
  public deleteListEntry(listEntry: ListEntry): Observable<any> {
    let options: any = {
      id: listEntry.id
    };

    return this.httpClient.post(this.apiUrl, {
      query: deleteListEntryQuery,
      variables: options

    }, this.getRequestOptions());
  }

  /**
   * Toggles an anime as favourite for the currently logged in user
   * @param {ListEntry} listEntry
   * @returns {Observable<any>}
   */
  public toggleFavouriteEntry(listEntry: ListEntry): Observable<any> {
    let options: any = {
      animeId: listEntry.media.id
    };

    return this.httpClient.post(this.apiUrl, {
      query: toggleFavouriteEntryQuery,
      variables: options

    }, this.getRequestOptions());
  }

  /**
   * Returns a media's duration formatted as hours and/or minutes
   * @param {Media} media
   * @returns {string}
   */
  public getFormattedMediaDuration(media: Media): string {
    return media.duration < 60 ? `${media.duration}m` : `${Math.floor(media.duration / 60)}h ${media.duration % 60}m`;
  }

  private getRequestOptions(): any {
    let headers: any = {};

    if (this.getAccessToken()) {
      headers.Authorization = `Bearer ${this.getAccessToken()}`;
    }

    return { headers: headers };
  }

  private isValidResponse(response: any): boolean {
    return response && response.data;
  }

  private getResponseData(response: any): any {
    return response.data;
  }

  private parseAnimeData(anime: Anime): void {
    if (anime) {
      if (anime.format) {
        anime.format = new MediaFormat(anime.format).label;
      }

      if (anime.status) {
        anime.status = new MediaStatus(anime.status).label;
      }

      if (anime.coverImage && anime.coverImage.medium === 'https://cdn.anilist.co/img/dir/anime/med/noimg.jpg') {
        anime.coverImage.medium = this.fallbackCover;
      }

      if (anime.mediaListEntry) {
        this.parseListEntryData(anime.mediaListEntry);
      }
    }
  }

  private parseListEntryData(listEntry: ListEntry): void {
    if (listEntry) {
      if (listEntry.status) {
        listEntry.status = new ListEntryStatus(listEntry.status).value;
      }

      if (listEntry.media) {
        this.parseAnimeData(<Anime> listEntry.media);
      }
    }
  }

}
