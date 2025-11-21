/* eslint-disable no-console */
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

import { apiUrl } from '../../../app.constants';
import { AuthStore } from '../store/auth.store';
import { PageInfo, PageQuery } from '../types/anilist/pageInfo.types';
import { AnilistResponse } from '../types/anilist/response.types';
import { RequestOptions } from './api.types';

const DEFAULT_CACHE_MAX_AGE = 24 * 3600;

export class AniListApi {
  protected apiUrl = apiUrl;
  private loggingEnabled = false;

  constructor(
    protected httpClient: HttpClient,
    protected authStore: AuthStore
  ) {}

  protected getRequestOptions(headers?: Record<string, string>) {
    return { headers: this.getRequestHeaders(headers) };
  }

  protected getRequestHeaders(headers?: Record<string, string>) {
    const accessToken = this.authStore.getAccessToken();
    const authHeader = accessToken
      ? { Authorization: `Bearer ${accessToken}` }
      : {};
    return { ...authHeader, ...headers };
  }

  protected getQueryUrl(urlString: string, options: RequestOptions = {}) {
    const { cacheKey } = options;

    const url = new URL(urlString, window.location.origin);

    if (cacheKey) {
      const cacheMaxAge =
        options.cacheMaxAge || cacheKey ? DEFAULT_CACHE_MAX_AGE : undefined;

      url.searchParams.set('customCacheKey', cacheKey);
      url.searchParams.set('customCacheMaxAge', cacheMaxAge?.toString());
    }

    return url.toString();
  }

  protected getPageOptions(pageOptions?: PageQuery | PageInfo) {
    return {
      page: Math.max(pageOptions?.pageIndex ?? 1, 1),
      perPage: pageOptions ? pageOptions.perPage || 10 : 1,
    };
  }

  protected postGraphQlRequest<ResponseType, VariablesType = undefined>(
    query: string,
    variables?: VariablesType,
    options?: RequestOptions
  ): Observable<AnilistResponse<ResponseType>> {
    const parsedQuery = query
      .replace(/\s+/g, ' ')
      .replace(/( *[\(|\{]) */g, '$1')
      .replace(/ *([\)|\}] *)/g, '$1')
      .trim();

    const parsedVariables = { ...variables };
    if (parsedVariables) {
      Object.keys(parsedVariables).forEach((key) => {
        const value = parsedVariables[key];

        if (
          value === undefined ||
          value === null ||
          (['string', 'object'].includes(typeof value) && value.length === 0)
        ) {
          delete parsedVariables[key];
        }
      });
    }

    if (this.loggingEnabled) {
      console.debug('query:', parsedQuery.replace(/\n\s*/g, '\n'));
      console.debug('variables:', parsedVariables);
    }

    return this.httpClient
      .post(
        this.getQueryUrl(this.apiUrl, options),
        {
          query: parsedQuery,
          variables: parsedVariables,
        },
        this.getRequestOptions()
      )
      .pipe(this.mapResponseError());
  }

  protected isValidResponse<T>(response: AnilistResponse<T>) {
    return !!this.getResponseData(response);
  }

  protected getResponseData<T>(response: AnilistResponse<T>) {
    return !!response && response.data;
  }

  protected mapResponseError() {
    return catchError(({ message }) => {
      console.error('Received API Error:', message);
      return throwError(message);
    });
  }
}
