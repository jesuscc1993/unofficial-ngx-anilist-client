import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';

import { accessTokenCookieKey, userCookieKey } from '../app.constants';
import { User } from '../types/anilist/user.types';

@Injectable()
export class AuthStore {
  public setAccessToken(accessToken: string) {
    localStorage.setItem(accessTokenCookieKey, accessToken);
  }

  public getAccessToken() {
    return localStorage.getItem(accessTokenCookieKey);
  }

  public removeAccessToken() {
    localStorage.removeItem(accessTokenCookieKey);
  }

  public setUser(user: User) {
    this.setJsonItem(userCookieKey, user);
  }

  public getUser() {
    return this.getJsonItem<User>(userCookieKey);
  }

  public removeUser() {
    localStorage.removeItem(userCookieKey);
  }

  private setJsonItem(key: string, json: any) {
    localStorage.setItem(key, JSON.stringify(json));
  }

  private getJsonItem<T>(key: string) {
    const jsonString: string = localStorage.getItem(key);
    return jsonString ? (JSON.parse(jsonString) as T) : undefined;
  }
}
