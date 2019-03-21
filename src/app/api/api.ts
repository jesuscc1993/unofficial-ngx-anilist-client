import 'rxjs/add/operator/map';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { _throw } from 'rxjs/observable/throw';
import { catchError } from 'rxjs/operators';

import { apiUrl } from '../app.constants';
import { AuthStore } from '../store/auth.store';
import { ServerResponse } from '../types/anilist/response.types';
import {
  DeleteListEntryRequest,
  MediaCollectionFilters,
  MediaFilters,
  PageQueryDto,
  SaveListEntryRequest,
  SearchFilters,
  ToggleFavouriteMediaRequest,
} from './anime/anime-api.types';

export class AniListApi {
  protected apiUrl: string = apiUrl;

  constructor(protected httpClient: HttpClient, protected authStore: AuthStore) {}

  protected getRequestOptions() {
    const accessToken = this.authStore.getAccessToken();
    return { headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {} };
  }

  protected postRequest<T>(
    query: string,
    options?: {
      variables?: (
        | MediaCollectionFilters
        | MediaFilters
        | SearchFilters
        | SaveListEntryRequest
        | DeleteListEntryRequest
        | ToggleFavouriteMediaRequest) &
        Partial<PageQueryDto>;
    }
  ): Observable<ServerResponse<T>> {
    return this.httpClient
      .post(
        this.apiUrl,
        {
          query,
          variables: options && options.variables,
        },
        this.getRequestOptions()
      )
      .pipe(this.mapObjectErrorToStringError());
  }

  protected isValidResponse<T>(response: ServerResponse<T>) {
    return !!this.getResponseData(response);
  }

  protected getResponseData<T>(response: ServerResponse<T>) {
    return !!response && response.data;
  }

  protected mapObjectErrorToStringError() {
    return catchError(error => _throw(JSON.stringify(error, undefined, 2)));
  }
}
