import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { TitleService } from '../../modules/shared/services/title.service';

@Component({
  selector: 'mt-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundPageComponent {
  constructor(
    private titleService: TitleService,
    private translateService: TranslateService
  ) {
    this.titleService.setTitle(
      this.translateService.instant('app.pageNotFound')
    );
  }
}
