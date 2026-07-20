import { Component, inject } from '@angular/core';
import { MatSnackBarConfig } from '@angular/material/snack-bar';

import { listEntryStatuses } from '../../constants/media.constants';
import { TitleService } from '../../services/title.service';
import { defaultToastOptions, ToastService } from '../../services/toast.service';

@Component({
  selector: 'mt-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
  standalone: false,
})
export class GalleryPage {
  private titleService = inject(TitleService);
  private toastService = inject(ToastService);

  constructor() {
    this.titleService.setTranslatedTitle('app.title');
  }

  feedbackVariants = [undefined, 'info', 'warning', 'success', 'error'];
  buttonVariants = [undefined, 'primary', 'accent', 'warn'];
  listEntryStatuses = listEntryStatuses;

  showToast(
    message: string,
    action?: string,
    config: MatSnackBarConfig = defaultToastOptions
  ) {
    this.toastService.showToast(message, action, config);
  }

  showToastType(type?: string) {
    this.showToast(`${type?.toUpperCase() ?? 'Default'} toast`, undefined, {
      ...defaultToastOptions,
      // duration: 65535,
      panelClass: type,
    });
  }
}
