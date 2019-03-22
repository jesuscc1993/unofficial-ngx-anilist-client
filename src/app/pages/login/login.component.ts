import { Component, OnInit } from '@angular/core';

import { apiLoginUrl } from '../../app.constants';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginPageComponent implements OnInit {
  apiLoginUrl: string = apiLoginUrl;

  constructor() {}

  ngOnInit() {}
}
