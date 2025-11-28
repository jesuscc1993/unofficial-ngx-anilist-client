import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'mt-footer',
    templateUrl: './mt-footer.component.html',
    styleUrls: ['./mt-footer.component.scss'],
    standalone: false
})
export class MtFooterComponent {
  gitHubProjectUrl =
    'https://github.com/jesuscc1993/unofficial-ngx-anilist-client';

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'anilist',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/pictures/vectorial/icons/anilist.svg'
      )
    );
  }
}
