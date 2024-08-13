import { Injectable } from '@angular/core';

import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthCommands {
  constructor(private authService: AuthService) {}

  logIn(accessToken: string) {
    return this.authService.logIn(accessToken);
  }

  validateToken() {
    return this.authService.validateToken();
  }

  logOut() {
    return this.authService.logOut();
  }

  onUserChange() {
    return this.authService.userChange$;
  }
}
