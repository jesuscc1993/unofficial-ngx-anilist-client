import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { accessTokenCookieKey, userCookieKey } from '../../../app.constants';
import { LocalStorage } from '../../../utils/local-storage.util';
import { AuthApi } from '../api/auth/auth.api';
import { AuthStore } from '../store/auth.store';
import { User } from '../types/anilist/user.types';

@Injectable()
export class AuthService {
  public userChange: Subject<User> = new Subject<User>();

  constructor(private authApi: AuthApi, private authStore: AuthStore) {
    this.getAccessToken();
    this.getUser();
  }

  public logIn(accessToken: string) {
    this.setAccessToken(accessToken);

    this.authApi
      .queryUser()
      .pipe(
        tap(user => {
          this.setUser(user);
          this.userChange.next(user);
        })
      )
      .subscribe();
  }

  public logOut() {
    this.removeAccessToken();
    this.removeUser();
    this.userChange.next();
  }

  private setAccessToken(accessToken: string) {
    this.authStore.setAccessToken(accessToken);
    LocalStorage.setString(accessTokenCookieKey, accessToken);
  }
  private getAccessToken() {
    const accessToken = LocalStorage.getString(accessTokenCookieKey);
    this.authStore.setAccessToken(accessToken);
  }
  private removeAccessToken() {
    this.authStore.removeAccessToken();
    LocalStorage.remove(accessTokenCookieKey);
  }

  private setUser(user: User) {
    this.authStore.setUser(user);
    LocalStorage.setObject(userCookieKey, user);
  }
  private getUser() {
    const user = LocalStorage.getObject<User>(userCookieKey);
    this.authStore.setUser(user);
  }
  private removeUser() {
    this.authStore.removeUser();
    LocalStorage.remove(userCookieKey);
  }
}
