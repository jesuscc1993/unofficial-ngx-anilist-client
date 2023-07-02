import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { TitleService } from '../../../shared/services/title.service';

@Component({
  selector: 'mt-manga-dashboard',
  templateUrl: './manga-dashboard.component.html',
  styleUrls: ['./manga-dashboard.component.scss'],
})
export class MangaDashboardPageComponent {
  constructor(
    private titleService: TitleService,
    private translateService: TranslateService
  ) {
    this.titleService.setTitle(
      this.translateService.instant('manga.dashboard.title')
    );
  }
}
