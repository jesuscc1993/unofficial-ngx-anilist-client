import { Component } from '@angular/core';

import { TitleService } from '../../../shared/services/title.service';

@Component({
  selector: 'mt-manga-dashboard',
  templateUrl: './manga-dashboard.component.html',
  styleUrls: ['./manga-dashboard.component.scss'],
})
export class MangaDashboardPageComponent {
  constructor(private titleService: TitleService) {
    this.titleService.setTranslatedTitle('manga.dashboard.title');
  }
}
