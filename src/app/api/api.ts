import 'rxjs/add/operator/map';

import { HttpClient } from '@angular/common/http';

import { apiUrl } from '../app.constants';
import { AuthStore } from '../store/auth.store';
import { ServerResponse } from '../types/anilist/response.types';

export class AniListApi {
  protected apiUrl: string = apiUrl;

  constructor(protected httpClient: HttpClient, protected authStore: AuthStore) {}

  protected getRequestOptions() {
    const accessToken = this.authStore.getAccessToken();
    return { headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {} };
  }

  protected postRequest({ query, variables }: { query: string; variables?: any }) {
    return this.httpClient.post(
      this.apiUrl,
      {
        query,
        variables
      },
      this.getRequestOptions()
    );
  }

  protected isValidResponse(response: ServerResponse) {
    return !!response && response.data;
  }

  protected getResponseData(response: ServerResponse) {
    return response.data;
  }
}
