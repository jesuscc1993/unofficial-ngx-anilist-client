import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { TitleService } from '../../modules/shared/services/title.service';

@Component({
  selector: 'mt-anime-dashboard',
  templateUrl: './anime-dashboard.component.html',
  styleUrls: ['./anime-dashboard.component.scss'],
})
export class AnimeDashboardPageComponent {
  constructor(
    private titleService: TitleService,
    private translateService: TranslateService
  ) {
    this.titleService.setTitle(
      this.translateService.instant('anime.dashboard.title')
    );
  }
}
