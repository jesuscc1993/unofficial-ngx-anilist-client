import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {
  HttpCacheInterceptorModule,
  useHttpCacheLocalStorage,
} from '@ngneat/cashew';
import { TranslateModule } from '@ngx-translate/core';

import { MaterialModule } from '../material/material.module';
import { AuthApi } from './api/auth/auth.api';
import { AuthCommands } from './commands/auth.commands';
import { MtModalContentComponent } from './components/modal/mt-modal-content/mt-modal-content.component';
import { MtModalFooterComponent } from './components/modal/mt-modal-footer/mt-modal-footer.component';
import { MtModalHeaderComponent } from './components/modal/mt-modal-header/mt-modal-header.component';
import { MtModalComponent } from './components/modal/mt-modal/mt-modal.component';
import { MtAlertComponent } from './components/mt-alert/mt-alert.component';
import { MtChipComponent } from './components/mt-chip/mt-chip.component';
import { MtFooterComponent } from './components/mt-footer/mt-footer.component';
import { MtHeaderSelectComponent } from './components/mt-header-select/mt-header-select.component';
import { MtHeaderComponent } from './components/mt-header/mt-header.component';
import { FaIconComponent } from './components/mt-icon/mt-icon.component';
import { MtMenuAnchorComponent } from './components/mt-menu-anchor/mt-menu-anchor.component';
import { MtMenuButtonComponent } from './components/mt-menu-button/mt-menu-button.component';
import { MtSelectComponent } from './components/mt-select/mt-select.component';
import { SortPipe } from './pipes/sort';
import { AuthService } from './services/auth.service';
import { TitleService } from './services/title.service';
import { ToastService } from './services/toast.service';
import { AuthStore } from './store/auth.store';

const declarations = [
  FaIconComponent,
  MtAlertComponent,
  MtChipComponent,
  MtFooterComponent,
  MtHeaderComponent,
  MtHeaderSelectComponent,
  MtMenuAnchorComponent,
  MtMenuButtonComponent,
  MtSelectComponent,
  MtModalComponent,
  MtModalContentComponent,
  MtModalFooterComponent,
  MtModalHeaderComponent,
  SortPipe,
];

const imports = [
  BrowserModule,
  CommonModule,
  FormsModule,
  MaterialModule,
  ReactiveFormsModule,
  RouterModule,
  TranslateModule,
];

@NgModule({
  declarations,
  imports: [...imports, HttpCacheInterceptorModule.forRoot()],
  exports: [...declarations, ...imports],
  providers: [
    AuthApi,
    AuthCommands,
    AuthService,
    AuthStore,
    TitleService,
    ToastService,
    provideHttpClient(),
    useHttpCacheLocalStorage,
  ],
})
export class SharedModule {}
