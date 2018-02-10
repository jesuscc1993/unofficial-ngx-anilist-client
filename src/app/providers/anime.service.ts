import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { MediaQuery } from '../models/anilist/query';
import { PageQuery } from '../models/anilist/pageInfo';
import { Anime } from '../models/anilist/anime';
import { MediaFormat } from '../models/anilist/mediaFormat';
import { mediaSorts } from '../models/anilist/mediaSorts';

@Injectable()
export class AnimeService {
  apiUrl: string = 'https://graphql.anilist.co';

  options: any = {
    type: 'ANIME'
  };

  fallbackCover: string = 'assets/pictures/non-vectorial/no-cover-available.png';

  query: string =
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
          format
        }
      }
    }`;

  constructor (
    private http: Http
  ) {

  }

  public setAccessToken(accessToken: string): void {
    localStorage.setItem('accessToken', accessToken);
  }
  public getAccessToken(): string {
    return localStorage.getItem('accessToken');
  }

  public search(query: MediaQuery, pageInfo: PageQuery): Observable<any> {
    let options: any = Object.assign({}, this.options);

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
      query: this.query,
      variables: options

    }).map((response) => {
      let serverResponse;

      if (this.isValidResponse(response)) {
        serverResponse = this.getResponseData(response);

        serverResponse.media.forEach((anime: Anime) => {
          anime.format = new MediaFormat(anime.format).label;

          if (anime.coverImage.medium === 'https://cdn.anilist.co/img/dir/anime/med/noimg.jpg') {
            anime.coverImage.medium = this.fallbackCover;

          }
        });
      }

      return serverResponse;
    });
  }

  private isValidResponse(response: any): boolean {
    return response && response.json() && response.json().data && response.json().data.Page;
  }

  private getResponseData(response: any): any {
    return response.json().data.Page;
  }

}
