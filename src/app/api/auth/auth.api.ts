import 'rxjs/add/operator/map';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthStore } from '../../store/auth.store';
import { User } from '../../types/anilist/user.types';
import { userQuery } from '../anime/anime-api.queries';
import { AniListApi } from '../api';
import { UserDto } from './auth-api.types';

@Injectable()
export class AuthApi extends AniListApi {
  constructor(protected httpClient: HttpClient, protected authStore: AuthStore) {
    super(httpClient, authStore);
  }

  public queryUser(): Observable<User> {
    return this.postGraphQlRequest<UserDto>(userQuery).map(response => {
      const listEntriesDto = this.getResponseData(response);
      return listEntriesDto && listEntriesDto.Viewer;
    });
  }
}
