import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material/material.module';
import { FaIconComponent } from './components/fa-icon/fa-icon.component';
import { MtModalContent } from './components/modal/mt-modal-content/mt-modal-content.component';
import { MtModalFooter } from './components/modal/mt-modal-footer/mt-modal-footer.component';
import { MtModalHeader } from './components/modal/mt-modal-header/mt-modal-header.component';
import { MtModal } from './components/modal/mt-modal/mt-modal.component';
import { MtMenuActionComponent } from './components/mt-menu-action/mt-menu-action.component';

const references = [FaIconComponent, MtMenuActionComponent, MtModal, MtModalContent, MtModalFooter, MtModalHeader];

@NgModule({
  declarations: references,
  imports: [CommonModule, MaterialModule],
  exports: references,
})
export class SharedModule {}
