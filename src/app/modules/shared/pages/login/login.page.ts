import { Component } from '@angular/core';

import { apiLoginUrl } from '../../../../app.constants';
import { TitleService } from '../../services/title.service';

@Component({
  selector: 'mt-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {
  apiLoginUrl = apiLoginUrl;

  constructor(private titleService: TitleService) {
    this.titleService.setTitle();
  }
}
