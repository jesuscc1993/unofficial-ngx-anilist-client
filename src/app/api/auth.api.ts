import 'rxjs/add/operator/map';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthStore } from '../store/auth.store';
import { User } from '../types/anilist/user.types';
import { userQuery } from './anime-queries';
import { AniListApi } from './api';

@Injectable()
export class AuthApi extends AniListApi {
  constructor(protected httpClient: HttpClient, protected authStore: AuthStore) {
    super(httpClient, authStore);
  }

  public queryUser(): Observable<User> {
    return this.postRequest({
      query: userQuery
    }).map(response => (this.isValidResponse(response) ? this.getResponseData(response).Viewer : undefined));
  }
}
