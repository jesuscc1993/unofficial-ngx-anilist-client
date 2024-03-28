import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';

import { MediaCommands } from '../../media/commands/media.commands';
import { ToastService } from '../../shared/services/toast.service';
import { AuthStore } from '../../shared/store/auth.store';
import { MangaService } from '../services/manga.service';

@Injectable()
export class MangaCommands extends MediaCommands {
  constructor(
    protected authStore: AuthStore,
    protected dialog: MatDialog,
    protected toastService: ToastService,
    protected translateService: TranslateService,
    protected mangaService: MangaService
  ) {
    super(authStore, dialog, toastService, translateService, mangaService);
  }
}
