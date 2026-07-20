import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { rootUrl } from '../../../shared/constants/navigation.constants';
import { TitleService } from '../../../shared/services/title.service';
import { AuthStore } from '../../../shared/store/auth.store';
import { MediaType } from '../../../shared/types/anilist/media.types';

@Component({
  selector: 'mt-anime-dashboard',
  templateUrl: './anime-dashboard.page.html',
  styleUrls: ['./anime-dashboard.page.scss'],
  standalone: false,
})
export class AnimeDashboardPage {
  private authStore = inject(AuthStore);
  private router = inject(Router);
  private titleService = inject(TitleService);

  readonly mediaType = MediaType.ANIME;

  constructor() {
    this.titleService.setTranslatedTitle(
      'media.sourceValues.ANIME',
      'media.board'
    );

    if (!this.authStore.getUser()) {
      this.router.navigate([rootUrl]);
    }
  }
}
