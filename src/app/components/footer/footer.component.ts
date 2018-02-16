import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  gitHubProjectUrl: string = 'https://github.com/jesuscc1993/angular-material-demo';

  constructor() {

  }

  ngOnInit(): void {

  }

}
