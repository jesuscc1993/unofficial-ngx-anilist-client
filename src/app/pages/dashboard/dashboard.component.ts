import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { TitleService } from '../../modules/shared/services/title.service';

@Component({
  selector: 'mt-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardPageComponent {
  constructor(private titleService: TitleService, private translateService: TranslateService) {
    this.titleService.setTitle(this.translateService.instant('anime.dashboard.title'));
  }
}
