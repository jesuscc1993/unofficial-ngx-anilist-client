import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';

import {
  userQuery,
  validateTokenQuery,
} from '../../../media/api/media.queries';
import { User } from '../../types/anilist/user.types';
import { AniListApi } from '../api';
import { UserDto } from './auth-api.types';

@Injectable()
export class AuthApi extends AniListApi {
  queryUser(): Observable<User> {
    return this.postGraphQlRequest<UserDto>(userQuery).pipe(
      map((response) => this.getResponseData(response)!.Viewer)
    );
  }

  validateToken(): Observable<void> {
    return this.postGraphQlRequest<void>(validateTokenQuery).pipe(
      map((response) => this.getResponseData(response))
    );
  }
}
