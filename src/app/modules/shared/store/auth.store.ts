import { Injectable } from '@angular/core';

import { User } from '../types/anilist/user.types';
import { Store } from './store';

export type AuthStoreState = {
  accessToken?: string;
  user?: User;
};

@Injectable()
export class AuthStore extends Store<AuthStoreState> {
  constructor() {
    super({});
  }

  setAccessToken(accessToken: string) {
    this.setState({ accessToken });
  }
  getAccessToken() {
    return this.getState().accessToken;
  }
  removeAccessToken() {
    this.setState({ accessToken: undefined });
  }

  setUser(user: User) {
    this.setState({ user });
  }
  getUser() {
    return this.getState().user;
  }
  removeUser() {
    this.setState({ user: undefined });
  }
}
