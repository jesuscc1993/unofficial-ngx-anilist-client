import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';
import { FaIconComponent } from './components/fa-icon/fa-icon.component';
import { MtModalContentComponent } from './components/modal/mt-modal-content/mt-modal-content.component';
import { MtModalFooterComponent } from './components/modal/mt-modal-footer/mt-modal-footer.component';
import { MtModalHeaderComponent } from './components/modal/mt-modal-header/mt-modal-header.component';
import { MtModalComponent } from './components/modal/mt-modal/mt-modal.component';
import { MtFooterComponent } from './components/mt-footer/mt-footer.component';
import { MtHeaderComponent } from './components/mt-header/mt-header.component';
import { MtMenuActionComponent } from './components/mt-menu-action/mt-menu-action.component';

const references = [
  FaIconComponent,
  MtFooterComponent,
  MtHeaderComponent,
  MtMenuActionComponent,
  MtModalComponent,
  MtModalContentComponent,
  MtModalFooterComponent,
  MtModalHeaderComponent,
];

@NgModule({
  declarations: references,
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: references,
})
export class SharedModule {}
