import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  gitHubProjectUrl: string = 'https://github.com/jesuscc1993/angular-material-demo';

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon('anilist', sanitizer.bypassSecurityTrustResourceUrl('assets/pictures/vectorial/icons/anilist.svg'));
  }

}
