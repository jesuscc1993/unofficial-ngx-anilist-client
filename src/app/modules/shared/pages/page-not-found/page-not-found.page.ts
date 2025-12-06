import { Component } from '@angular/core';

import { TitleService } from '../../services/title.service';

@Component({
  selector: 'mt-page-not-found',
  templateUrl: './page-not-found.page.html',
  styleUrls: ['./page-not-found.page.scss'],
  standalone: false,
})
export class PageNotFoundPage {
  constructor(private titleService: TitleService) {
    this.titleService.setTranslatedTitle('app.pageNotFound');
  }
}
