import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgxMultiLineEllipsisModule } from '@davidperis92/ngx-multi-line-ellipsis';
import { TranslateModule } from '@ngx-translate/core';

import { MaterialModule } from '../material/material.module';
import { AuthApi } from './api/auth/auth.api';
import { AuthCommands } from './commands/auth.commands';
import { FaIconComponent } from './components/fa-icon/fa-icon.component';
import {
  MtModalContentComponent,
} from './components/modal/mt-modal-content/mt-modal-content.component';
import {
  MtModalFooterComponent,
} from './components/modal/mt-modal-footer/mt-modal-footer.component';
import {
  MtModalHeaderComponent,
} from './components/modal/mt-modal-header/mt-modal-header.component';
import { MtModalComponent } from './components/modal/mt-modal/mt-modal.component';
import { MtFooterComponent } from './components/mt-footer/mt-footer.component';
import { MtHeaderComponent } from './components/mt-header/mt-header.component';
import { MtMenuActionComponent } from './components/mt-menu-action/mt-menu-action.component';
import { SortPipe } from './pipes/sort';
import { AuthService } from './services/auth.service';
import { TitleService } from './services/title.service';
import { ToastService } from './services/toast.service';
import { AuthStore } from './store/auth.store';
import { MediaStore } from './store/media.store';

const declarations = [
  FaIconComponent,
  MtFooterComponent,
  MtHeaderComponent,
  MtMenuActionComponent,
  MtModalComponent,
  MtModalContentComponent,
  MtModalFooterComponent,
  MtModalHeaderComponent,
  SortPipe,
];

const imports = [
  BrowserAnimationsModule,
  BrowserModule,
  CommonModule,
  FormsModule,
  HttpClientModule,
  MaterialModule,
  ReactiveFormsModule,
  RouterModule,
  TranslateModule,
  NgxMultiLineEllipsisModule,
];

@NgModule({
  declarations,
  imports,
  exports: [...declarations, ...imports],
  providers: [
    AuthApi,
    AuthCommands,
    AuthService,
    AuthStore,
    MediaStore,
    TitleService,
    ToastService,
  ],
})
export class SharedModule {}
