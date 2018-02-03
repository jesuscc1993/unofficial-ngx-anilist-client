import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  gitHubUrl: string = 'https://github.com/jesuscc1993/angular-material-demo';

  constructor() { }

  ngOnInit() {

  }

  viewOnGitHub(): void {
    window.open(this.gitHubUrl);
  }

}
