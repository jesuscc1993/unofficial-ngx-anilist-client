import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { rootUrl } from '../../../shared/constants/navigation.constants';
import { TitleService } from '../../../shared/services/title.service';
import { AuthStore } from '../../../shared/store/auth.store';

@Component({
  selector: 'mt-manga-dashboard',
  templateUrl: './manga-dashboard.page.html',
  styleUrls: ['./manga-dashboard.page.scss'],
})
export class MangaDashboardPage {
  constructor(
    private router: Router,
    private titleService: TitleService,
    private authStore: AuthStore
  ) {
    this.titleService.setTranslatedTitle('manga.dashboard.title');

    if (!this.authStore.getUser()) {
      this.router.navigate([rootUrl]);
    }
  }
}
