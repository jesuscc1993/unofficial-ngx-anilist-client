import { Component, inject } from '@angular/core';

import { apiLoginUrl } from '../../../../app.constants';
import { TitleService } from '../../services/title.service';

@Component({
  selector: 'mt-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {
  private titleService = inject(TitleService);

  apiLoginUrl = apiLoginUrl;

  constructor() {
    this.titleService.setTitle();
  }
}
