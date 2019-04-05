import { Injectable } from '@angular/core';

import { User } from '../types/anilist/user.types';

export type AuthStoreState = { accessToken?: string; user?: User };

@Injectable()
export class AuthStore {
  private state: AuthStoreState = {};

  public setAccessToken(accessToken: string) {
    this.state = { ...this.state, accessToken };
  }
  public getAccessToken() {
    return this.state.accessToken;
  }
  public removeAccessToken() {
    this.state = { ...this.state, accessToken: undefined };
  }

  public setUser(user: User) {
    this.state = { ...this.state, user };
  }
  public getUser() {
    return this.state.user;
  }
  public removeUser() {
    this.state = { ...this.state, user: undefined };
  }
}
