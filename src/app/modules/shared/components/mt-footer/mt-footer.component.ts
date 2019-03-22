import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'mt-footer',
  templateUrl: './mt-footer.component.html',
  styleUrls: ['./mt-footer.component.scss'],
})
export class MtFooterComponent {
  gitHubProjectUrl: string = 'https://github.com/jesuscc1993/unofficial-ng5-anilist-client';

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'anilist',
      sanitizer.bypassSecurityTrustResourceUrl('assets/pictures/vectorial/icons/anilist.svg')
    );
  }
}
