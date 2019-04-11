import { Injectable } from '@angular/core';

import { User } from '../types/anilist/user.types';
import { Store } from './store';

export type AuthStoreState = { accessToken?: string; user?: User };

@Injectable()
export class AuthStore extends Store<AuthStoreState> {
  constructor() {
    super({});
  }

  public setAccessToken(accessToken: string) {
    this.setState({ accessToken });
  }
  public getAccessToken() {
    return this.getState().accessToken;
  }
  public removeAccessToken() {
    this.setState({ accessToken: undefined });
  }

  public setUser(user: User) {
    this.setState({ user });
  }
  public getUser() {
    return this.getState().user;
  }
  public removeUser() {
    this.setState({ user: undefined });
  }
}
