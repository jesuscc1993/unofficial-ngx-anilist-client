import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { MediaQuery } from '../models/anilist/query';
import { PageQuery } from '../models/anilist/pageInfo';
import { Anime } from '../models/anilist/anime';
import { MediaFormat } from '../models/anilist/mediaFormat';
import { mediaSorts } from '../models/anilist/mediaSorts';
import { User } from '../models/anilist/user';

@Injectable()
export class AnimeService {
  private apiUrl: string = 'https://graphql.anilist.co';
  private accessTokenKey: string = 'accessToken';
  private userKey: string = 'user';

  private fallbackCover: string = 'assets/pictures/non-vectorial/no-cover-available.png';

  private animeFields: string =
    `id
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

  private searchQuery: string =
    `query (
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

  private userQuery: string =
    `{
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

  private listQuery: string =
    `query ($id: Int!, $listType: MediaType) {
      MediaListCollection (userId: $id, type: $listType) {
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
      scoreRaw: score (format: POINT_100)
      media {
        ${ this.animeFields }
      }
    }`;

  constructor (
    private http: Http
  ) {

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
      type: 'ANIME'
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

    return this.http.post(this.apiUrl, {
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
    return this.http.post(this.apiUrl, {
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
      listType: 'ANIME',
      id: user.id
    };

    return this.http.post(this.apiUrl, {
      query: this.listQuery,
      variables: options

    }, this.getRequestOptions()).map((response) => {
      let statusLists: any;

      if (this.isValidResponse(response)) {
        statusLists = this.getResponseData(response).MediaListCollection.statusLists;
        let statuses: string[] = Object.keys(statusLists);

        statuses.forEach((status: string) => {
          statusLists[status].forEach((entry: any) => {
            this.parseAnimeData(entry.media);
          });
        });
      }

      return statusLists;
    });
  }

  private getRequestOptions(): RequestOptions {
    const headers: any = {
      Authorization: `Bearer ${this.getAccessToken()}`
    };
    return new RequestOptions({ headers: headers });
  }

  private isValidResponse(response: any): boolean {
    return response && response.json() && response.json().data;
  }

  private getResponseData(response: any): any {
    return response.json().data;
  }

  private parseAnimeData(anime: Anime): void {
    anime.format = new MediaFormat(anime.format).label;

    if (anime.coverImage && anime.coverImage.medium === 'https://cdn.anilist.co/img/dir/anime/med/noimg.jpg') {
      anime.coverImage.medium = this.fallbackCover;
    }
  }

}
