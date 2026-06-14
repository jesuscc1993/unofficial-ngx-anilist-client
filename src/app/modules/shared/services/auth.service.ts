import { Observable, of, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { inject, Injectable } from '@angular/core';

import { LocalStorage } from '../../../utils/local-storage.util';
import { StorageKeys } from '../../media/services/storage.service';
import { AuthApi } from '../api/auth/auth.api';
import { AuthStore } from '../store/auth.store';
import { User } from '../types/anilist/user.types';

@Injectable()
export class AuthService {
  private authApi = inject(AuthApi);
  private authStore = inject(AuthStore);

  userChange$: Observable<User>;
  private userChangeSubject: Subject<User> = new Subject<User>();

  constructor() {
    this.userChangeSubject = new Subject<User>();
    this.userChange$ = this.userChangeSubject.asObservable();
    this.getAccessToken();
    this.getUser();
  }

  logIn(accessToken: string) {
    this.setAccessToken(accessToken);
    return this.authApi.queryUser().pipe(
      tap((user) => {
        this.setUser(user);
        this.userChangeSubject.next(user);
      })
    );
  }

  validateToken() {
    return this.authApi.validateToken();
  }

  logOut() {
    this.removeAccessToken();
    this.removeUser();
    this.userChangeSubject.next();
    return of();
  }

  private setAccessToken(accessToken: string) {
    this.authStore.setAccessToken(accessToken);
    LocalStorage.setString(StorageKeys.AccessToken, accessToken);
  }
  private getAccessToken() {
    const accessToken = LocalStorage.getString(StorageKeys.AccessToken);
    if (accessToken) {
      this.authStore.setAccessToken(accessToken);
    }
  }
  private removeAccessToken() {
    this.authStore.removeAccessToken();
    LocalStorage.remove(StorageKeys.AccessToken);
  }

  private setUser(user: User) {
    this.authStore.setUser(user);
    LocalStorage.setObject(StorageKeys.UserData, user);
  }
  private getUser() {
    const user = LocalStorage.getObject<User>(StorageKeys.UserData);
    if (user) {
      this.authStore.setUser(user);
    }
  }
  private removeUser() {
    this.authStore.removeUser();
    LocalStorage.remove(StorageKeys.UserData);
  }
}
