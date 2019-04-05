import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class TitleService {
  constructor(private title: Title, private translateService: TranslateService) {}

  setTitle(title?: string) {
    this.title.setTitle(
      title
        ? `${this.translateService.instant('app.titleShort')} - ${title}`
        : this.translateService.instant('app.title')
    );
  }
}
