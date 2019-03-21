import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';

import { AuthApi } from '../api/auth/auth.api';
import { AuthStore } from '../store/auth.store';
import { User } from '../types/anilist/user.types';

@Injectable()
export class AuthService {
  public userChange: Subject<User> = new Subject<User>();

  constructor(private authApi: AuthApi, private authStore: AuthStore) {}

  public logIn(accessToken: string) {
    this.authStore.setAccessToken(accessToken);

    this.authApi
      .queryUser()
      .pipe(
        tap(user => {
          this.authStore.setUser(user);
          this.userChange.next(user);
        })
      )
      .subscribe();
  }

  public logOut() {
    this.authStore.removeAccessToken();
    this.authStore.removeUser();
    this.userChange.next();
  }
}
