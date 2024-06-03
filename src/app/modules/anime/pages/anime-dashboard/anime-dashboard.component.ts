import { Component } from '@angular/core';

import { TitleService } from '../../../shared/services/title.service';

@Component({
  selector: 'mt-anime-dashboard',
  templateUrl: './anime-dashboard.component.html',
  styleUrls: ['./anime-dashboard.component.scss'],
})
export class AnimeDashboardPageComponent {
  constructor(private titleService: TitleService) {
    this.titleService.setTranslatedTitle('anime.dashboard.title');
  }
}
