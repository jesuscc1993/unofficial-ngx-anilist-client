import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Query } from '../models/anilist/query';
import { PageInfo } from '../models/anilist/pageInfo';

@Injectable()
export class AnimeService {
  apiUrl: string = 'https://graphql.anilist.co';

  options: any = {
    type: 'ANIME'
  };

  query: string =
    `query ($id: Int, $page: Int, $perPage: Int, $search: String, $type: MediaType, $format: MediaFormat) {
      Page (page: $page, perPage: $perPage) {
        pageInfo {
          total
          currentPage
          lastPage
          hasNextPage
          perPage
        }
        media (id: $id, search: $search, type: $type, format: $format) {
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

  public search(query: Query, pageInfo: PageInfo): Observable<any> {
    let options: any = Object.assign({}, this.options);

    if (query.search) {
      options.search = query.search;
    }
    if (query.format) {
      options.format = query.format;
    }

    options.page = pageInfo.pageIndex || 1;
    options.perPage = pageInfo.perPage || 10;

    if (options.page < 1) {
      options.page = 1;
    }

    return this.http.post(this.apiUrl, {
      query: this.query,
      variables: options
    });
  }

  public isValidResponse(response: any): boolean {
    return response && response.json() && response.json().data && response.json().data.Page;
  }

  public getResponseData(response: any): any {
    return response.json().data.Page;
  }

}
