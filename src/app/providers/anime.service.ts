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
import { mediaSorts } from '../models/anilist/mediaSorts';
import { apiUrl, accessTokenCookieKey, userCookieKey } from '../app.constants';

@Injectable()
export class AnimeService {
  private apiUrl: string = apiUrl;
  private fallbackCover: string = 'assets/pictures/non-vectorial/no-cover-available.png';

  private pageInfoFields: string;
  private listAnimeFields: string;
  private searchAnimeFields: string;

  private genresQuery: string;
  private userQuery: string;
  private searchQuery: string;
  private listQuery: string;
  private listFavouritesQuery: string;
  private saveListEntryQuery: string;
  private deleteListEntryQuery: string;
  private toggleFavouriteEntryQuery: string;

  userChange: EventEmitter<any> = new EventEmitter<any>();

  constructor (
    private httpClient: HttpClient
  ) {
    this.initializeQueries();
  }

  public setAccessToken(accessToken: string): void {
    localStorage.setItem(accessTokenCookieKey, accessToken);
  }
  public getAccessToken(): string {
    return localStorage.getItem(accessTokenCookieKey);
  }
  public removeAccessToken(): void {
    localStorage.removeItem(accessTokenCookieKey);
  }

  public setUser(user: User): void {
    localStorage.setItem(userCookieKey, JSON.stringify(user));
  }
  public getUser(): User {
    const jsonString: string = localStorage.getItem(userCookieKey);
    return jsonString ? JSON.parse(jsonString) : undefined;
  }
  public removeUser(): void {
    localStorage.removeItem(userCookieKey);
  }

  public logIn(accessToken: string): void {
    this.setAccessToken(accessToken);

    this.queryUser().subscribe((response: any) => {
      this.setUser(response.Viewer);
      this.userChange.emit(this.getUser());
    });
  }

  public logOut(): void {
    this.removeAccessToken();
    this.removeUser();
    this.userChange.emit();
  }

  public getGenres(): Observable<string[]> {
    return this.httpClient.post(this.apiUrl, {
      query: this.genresQuery

    }, this.getRequestOptions()).map((response) => {
      let serverResponse: any;

      if (this.isValidResponse(response)) {
        serverResponse = this.getResponseData(response).GenreCollection;
      }

      return serverResponse;
    });
  }

  public search(query: MediaQuery, pageInfo: PageQuery): Observable<any> {
    let options: any = {
      type: MediaTypes.ANIME,
      adultContent: query.adultContent || false,
      page: pageInfo.pageIndex >= 1 ? pageInfo.pageIndex : 1,
      perPage: pageInfo.perPage || 10,
      sort: [mediaSorts[0].value]
    };

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
    if (query.formats && query.formats.length) {
      options.formats = query.formats;
    }
    if (query.genres && query.genres.length) {
      options.genres = query.genres;
    }

    return this.httpClient.post(this.apiUrl, {
      query: this.searchQuery,
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

  public queryUser(): Observable<User> {
    return this.httpClient.post(this.apiUrl, {
      query: this.userQuery

    }, this.getRequestOptions()).map((response) => {
      let serverResponse: any;

      if (this.isValidResponse(response)) {
        serverResponse = this.getResponseData(response);
      }

      return serverResponse;
    });
  }

  public getList(user: User): Observable<any> {
    let options: any = {
      listType: MediaTypes.ANIME,
      userId: user.id,
      sort: ['SCORE_DESC']
    };

    return this.httpClient.post(this.apiUrl, {
      query: this.listQuery,
      variables: options

    }, this.getRequestOptions()).map((response) => {
      let statusLists: any[] = [];
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

  public getListFavourites(user: User, callback: Function): void {
    let options: any = {
      userId: user.id,
      page: 0
    };

    let favourites: any[] = [];
    this.queryResultsPage(options, favourites, callback);
  }

  private queryResultsPage(options: any, favourites: any[], callback: Function): void {
    this.httpClient.post(this.apiUrl, {
      query: this.listFavouritesQuery,
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
            this.queryResultsPage(options, favourites, callback);

          } else {
            callback(favourites);
          }
        }
      }
    });
  }

  public getListFavouriteIDs(user: User, callback: Function): void {
    this.getListFavourites(user, (listFavourites) => {
      let favouriteIDs: any[] = [];

      listFavourites.forEach((media: Media) => {
        favouriteIDs.push(media.id);
      });

      callback(favouriteIDs);
    });
  }

  public saveListEntry(listEntryRequest: any): Observable<any> {
    let options: any = {
      status: (listEntryRequest.status || ListEntryStatus.COMPLETED).toUpperCase(),
      mediaId: listEntryRequest.media.id,
      scoreRaw: listEntryRequest.scoreRaw
    };

    return this.httpClient.post(this.apiUrl, {
      query: this.saveListEntryQuery,
      variables: options

    }, this.getRequestOptions());
  }

  public deleteListEntry(listEntry: ListEntry): Observable<any> {
    let options: any = {
      id: listEntry.id
    };

    return this.httpClient.post(this.apiUrl, {
      query: this.deleteListEntryQuery,
      variables: options

    }, this.getRequestOptions());
  }

  public toggleFavouriteEntry(listEntry: ListEntry): Observable<any> {
    let options: any = {
      animeId: listEntry.media.id
    };

    return this.httpClient.post(this.apiUrl, {
      query: this.toggleFavouriteEntryQuery,
      variables: options

    }, this.getRequestOptions());
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

  private initializeQueries(): void {

    this.pageInfoFields = `
      currentPage
      hasNextPage
      lastPage
      perPage
      total`;

    this.listAnimeFields = `
      coverImage {
        large
        medium
      }
      description
      episodes
      format
      genres
      id
      meanScore
      startDate {
        year
      }
      status
      studios(isMain: true) {
        nodes {
          name
        }
      }
      tags {
        description
        isMediaSpoiler
        name
      }
      title {
        romaji
      }`;

    this.searchAnimeFields = `${this.listAnimeFields}
      mediaListEntry {
        id
        scoreRaw: score (
          format: POINT_100
        )
        status
      }`;

    this.genresQuery = `
      {
        GenreCollection
      }`;

    this.userQuery = `
      {
        Viewer {
          avatar {
            large
          }
          id
          name
          options {
            displayAdultContent
          }
          stats {
            favouredGenresOverview {
              amount
              genre
              meanScore
              timeWatched
            }
            watchedTime
          }
        }
      }`;

    this.searchQuery = `
      query (
        $adultContent: Boolean,
        $averageScore_greater: Int,
        $averageScore_lesser: Int,
        $formats: [MediaFormat],
        $genres: [String],
        $id: Int,
        $page: Int,
        $perPage: Int,
        $search: String,
        $sort: [MediaSort],
        $startDate_greater: FuzzyDateInt,
        $startDate_lesser: FuzzyDateInt,
        $type: MediaType
      ) {
        Page (
          page: $page,
          perPage: $perPage
        ) {
          pageInfo {
            ${this.pageInfoFields}
          }
          media (
            averageScore_greater: $averageScore_greater,
            averageScore_lesser: $averageScore_lesser,
            format_in: $formats,
            genre_in: $genres,
            isAdult: $adultContent,
            search: $search,
            sort: $sort,
            startDate_greater: $startDate_greater,
            startDate_lesser: $startDate_lesser,
            type: $type,
            id: $id
          ) {
            ${this.searchAnimeFields}
          }
        }
      }`;

    this.listQuery = `
      query (
        $listType: MediaType,
        $sort: [MediaListSort],
        $userId: Int!
      ) {
        MediaListCollection (
          sort: $sort,
          type: $listType,
          userId: $userId
        ) {
          statusLists {
            ... mediaListEntry
          }
        }
      }
  
      fragment mediaListEntry on MediaList {
        id
        media {
          ${this.listAnimeFields}
        }
        scoreRaw: score (
          format: POINT_100
        )
        status
      }`;

    this.listFavouritesQuery = `
      query (
        $userId: Int!,
        $page: Int
      ) {
        User (
          id: $userId
        ) {
          favourites {
            anime (
              page: $page
            ) {
              nodes {
                id
              }
              pageInfo {
                ${this.pageInfoFields}
              }
            }
          }
        }
      }`;

    this.saveListEntryQuery = `
      mutation (
        $mediaId: Int,
        $scoreRaw: Int,
        $status: MediaListStatus
      ) {
        SaveMediaListEntry (
          mediaId: $mediaId,
          scoreRaw: $scoreRaw,
          status: $status
        ) {
          id
          status
        }
      }`;

    this.deleteListEntryQuery = `
      mutation (
        $id: Int
      ) {
        DeleteMediaListEntry (id: $id) {
          deleted
        }
      }`;

    this.toggleFavouriteEntryQuery = `
      mutation (
        $animeId: Int
      ) {
        ToggleFavourite (
          animeId: $animeId
        ) {
          anime {
            nodes {
              id
              title {
                userPreferred
              }
            }
          }
        }
      }`;
  }

}
