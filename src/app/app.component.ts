import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'mt-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private translateService: TranslateService) {
    const availableLanguages = ['en', 'es'];
    const browserLanguage = navigator.language.split('-')[0];
    this.translateService.setDefaultLang(
      availableLanguages.includes(browserLanguage) ? browserLanguage : availableLanguages[0]
    );
  }
}
