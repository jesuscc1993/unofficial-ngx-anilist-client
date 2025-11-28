import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { rootUrl } from '../../../shared/constants/navigation.constants';
import { TitleService } from '../../../shared/services/title.service';
import { AuthStore } from '../../../shared/store/auth.store';

@Component({
    selector: 'mt-anime-dashboard',
    templateUrl: './anime-dashboard.page.html',
    styleUrls: ['./anime-dashboard.page.scss'],
    standalone: false
})
export class AnimeDashboardPage {
  constructor(
    private router: Router,
    private titleService: TitleService,
    private authStore: AuthStore
  ) {
    this.titleService.setTranslatedTitle('anime.dashboard.title');

    if (!this.authStore.getUser()) {
      this.router.navigate([rootUrl]);
    }
  }
}
