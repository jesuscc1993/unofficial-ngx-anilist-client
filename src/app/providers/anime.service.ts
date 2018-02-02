import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AnimeService {
  apiUrl: string = 'https://graphql.anilist.co';

  options: any = {
    type: 'ANIME'
  };

  query: string =
    `query ($id: Int, $page: Int, $perPage: Int, $search: String, $type: MediaType) {
      Page (page: $page, perPage: $perPage) {
        pageInfo {
          total
          currentPage
          lastPage
          hasNextPage
          perPage
        }
        media (id: $id, search: $search, type: $type) {
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
          meanScore
        }
      }
    }`;

  constructor (
    private http: Http
  ) {

  }

  public search(query: string, page?: number, perPage?: number): Observable<any> {
    if (typeof page !== 'number' || page < 1) {
      page = 1;
    }
    if (typeof perPage !== 'number') {
      perPage = 10;
    }

    let options: any = Object.assign({}, this.options);
    options.search = query;
    options.page = page;
    options.perPage = perPage;

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
