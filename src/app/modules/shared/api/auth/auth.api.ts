import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { userQuery } from '../../../anime/api/media/media.queries';
import { AuthStore } from '../../store/auth.store';
import { User } from '../../types/anilist/user.types';
import { AniListApi } from '../api';
import { UserDto } from './auth-api.types';

@Injectable()
export class AuthApi extends AniListApi {
  constructor(
    protected httpClient: HttpClient,
    protected authStore: AuthStore
  ) {
    super(httpClient, authStore);
  }

  queryUser(): Observable<User> {
    return this.postGraphQlRequest<UserDto>(userQuery).pipe(
      map((response) => this.getResponseData(response).Viewer)
    );
  }
}
