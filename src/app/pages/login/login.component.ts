import { Component } from '@angular/core';

import { apiLoginUrl } from '../../app.constants';
import { TitleService } from '../../modules/shared/services/title.service';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginPageComponent {
  apiLoginUrl = apiLoginUrl;

  constructor(private titleService: TitleService) {
    this.titleService.setTitle();
  }
}
