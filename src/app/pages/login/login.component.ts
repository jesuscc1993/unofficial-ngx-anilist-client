import { Component, OnInit } from '@angular/core';
import { apiLoginUrl } from '../../app.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  apiLoginUrl: string = apiLoginUrl;

  constructor() {

  }

  ngOnInit(): void {

  }

}
