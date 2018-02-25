import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Anime } from '../models/anilist/anime';
import { ListEntry } from '../models/anilist/listEntry';
import { Media } from '../models/anilist/media';
import { MediaFormat } from '../models/anilist/mediaFormat';
import { MediaQuery } from '../models/anilist/query';
import { MediaStatus } from '../models/anilist/mediaStatus';
import { MediaTypes } from '../models/anilist/mediaType';
import { PageQuery } from '../models/anilist/pageInfo';
import { User } from '../models/anilist/user';
import { mediaSorts } from '../models/anilist/mediaSorts';

@Injectable()
export class AnimeService {

  private apiUrl: string = 'https://graphql.anilist.co';
  private fallbackCover: string = 'assets/pictures/non-vectorial/no-cover-available.png';
  private accessTokenKey: string = 'accessToken';
  private userKey: string = 'user';
  private favouritesPageSize: number = 25;

  private animeFields: string;
  private userQuery: string;
  private searchQuery: string;
  private listQuery: string;
  private listFavouritesQuery: string;
  private saveListEntryQuery: string;
  private deleteListEntryQuery: string;
  private toggleFavouriteEntryQuery: string;

  constructor (
    private httpClient: HttpClient
  ) {
    this.initializeQueries();
  }

  public setAccessToken(accessToken: string): void {
    localStorage.setItem(this.accessTokenKey, accessToken);
  }
  public getAccessToken(): string {
    return localStorage.getItem(this.accessTokenKey);
  }
  public removeAccessToken(): void {
    localStorage.removeItem(this.accessTokenKey);
  }

  public setUser(user: User): void {
    localStorage.setItem(this.userKey, JSON.stringify(user));
  }
  public getUser(): User {
    const jsonString: string = localStorage.getItem(this.userKey);
    return jsonString ? JSON.parse(jsonString) : undefined;
  }
  public removeUser(): void {
    localStorage.removeItem(this.userKey);
  }

  public search(query: MediaQuery, pageInfo: PageQuery): Observable<any> {
    let options: any = {
      type: MediaTypes.ANIME
    };

    if (query.search) {
      options.search = query.search;
    }
    if (query.format) {
      options.format = query.format;
    }
    if (query.startDate_greater) {
      options.startDate_greater = query.startDate_greater;
    }
    if (query.startDate_lesser) {
      options.startDate_lesser = query.startDate_lesser;
    }

    options.page = pageInfo.pageIndex || 1;
    options.perPage = pageInfo.perPage || 10;
    options.sort = [mediaSorts[0].value];

    if (options.page < 1) {
      options.page = 1;
    }

    return this.httpClient.post(this.apiUrl, {
      query: this.searchQuery,
      variables: options

    }).map((response) => {
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
      userId: user.id
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
            this.parseAnimeData(entry.media);
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
          results = responseData.User.favourites.anime.nodes;
          favourites = favourites.concat(results);
        }
      }

      if (results.length >= this.favouritesPageSize) {
        options.page++;
        this.queryResultsPage(options, favourites, callback);

      } else {
        callback(favourites);
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

  public saveListEntry(listEntry: ListEntry): Observable<any> {
    let options: any = {
      status: MediaStatus.COMPLETED,
      mediaId: listEntry.media.id,
      scoreRaw: listEntry.scoreRaw
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
    const headers: any = {
      Authorization: `Bearer ${this.getAccessToken()}`
    };
    return { headers: headers };
  }

  private isValidResponse(response: any): boolean {
    return response && response.data;
  }

  private getResponseData(response: any): any {
    return response.data;
  }

  private parseAnimeData(anime: Anime): void {
    anime.format = new MediaFormat(anime.format).label;

    if (anime.coverImage && anime.coverImage.medium === 'https://cdn.anilist.co/img/dir/anime/med/noimg.jpg') {
      anime.coverImage.medium = this.fallbackCover;
    }
  }

  private initializeQueries(): void {
    this.animeFields = `
      id
      title {
        romaji
      }
      startDate {
        year
      },
      episodes
      coverImage {
        medium
      },
      genres
      meanScore,
      format`;

    this.userQuery = `
      {
        Viewer {
          id
          name
          avatar {
            large
          }
          options {
            displayAdultContent
          }
        }
      }`;

    this.searchQuery = `
      query (
        $id: Int,
        $page: Int,
        $perPage: Int,
        $search: String,
        $type: MediaType,
        $format: MediaFormat,
        $sort: [MediaSort],
        $startDate_greater: FuzzyDateInt,
        $startDate_lesser: FuzzyDateInt
      ) {
        Page (
          page: $page,
          perPage: $perPage
        ) {
          pageInfo {
            total
            currentPage
            lastPage
            hasNextPage
            perPage
          }
          media (
            id: $id,
            search: $search,
            type: $type,
            format: $format,
            sort: $sort,
            startDate_greater: $startDate_greater,
            startDate_lesser: $startDate_lesser
          ) {
            ${ this.animeFields }
          }
        }
      }`;

    this.listQuery = `
      query (
        $userId: Int!,
        $listType: MediaType
      ) {
        MediaListCollection (
          userId: $userId,
          type: $listType
        ) {
          statusLists {
            ... mediaListEntry
          }
          user {
            id
            name 
            avatar {
              large
            }
            mediaListOptions {
              scoreFormat
              rowOrder
            }
          }
        }
      }
  
      fragment mediaListEntry on MediaList {
        id
        scoreRaw: score (
          format: POINT_100
        )
        media {
          ${ this.animeFields }
        }
      }`;

    this.listFavouritesQuery = `
      query (
        $userId: Int!,
        $page: Int
      ) {
        User (
          id: $userId
        ) {
          favourites (
            page: $page
          ) {
            anime {
              nodes {
                ${ this.animeFields }
              }
            }
          }
        }
      }`;

    this.saveListEntryQuery = `
      mutation (
        $mediaId: Int,
        $status: MediaListStatus,
        $scoreRaw: Int
      ) {
        SaveMediaListEntry (
          mediaId: $mediaId,
          status: $status,
          scoreRaw: $scoreRaw
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
