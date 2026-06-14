import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { rootUrl } from '../../../shared/constants/navigation.constants';
import { TitleService } from '../../../shared/services/title.service';
import { AuthStore } from '../../../shared/store/auth.store';

@Component({
  selector: 'mt-manga-dashboard',
  templateUrl: './manga-dashboard.page.html',
  styleUrls: ['./manga-dashboard.page.scss'],
  standalone: false,
})
export class MangaDashboardPage {
  private authStore = inject(AuthStore);
  private router = inject(Router);
  private titleService = inject(TitleService);

  constructor() {
    this.titleService.setTranslatedTitle(
      'media.sourceValues.MANGA',
      'media.board'
    );

    if (!this.authStore.getUser()) {
      this.router.navigate([rootUrl]);
    }
  }
}
