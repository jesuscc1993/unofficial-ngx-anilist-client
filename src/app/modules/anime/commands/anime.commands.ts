import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';

import { MediaCommands } from '../../media/commands/media.commands';
import { ToastService } from '../../shared/services/toast.service';
import { AuthStore } from '../../shared/store/auth.store';
import { AnimeService } from '../services/anime.service';

@Injectable()
export class AnimeCommands extends MediaCommands {
  constructor(
    protected authStore: AuthStore,
    protected dialog: MatDialog,
    protected toastService: ToastService,
    protected translateService: TranslateService,
    protected animeService: AnimeService
  ) {
    super(authStore, dialog, toastService, translateService, animeService);
  }
}
