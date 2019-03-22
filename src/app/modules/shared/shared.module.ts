import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material/material.module';
import { FaIconComponent } from './components/fa-icon/fa-icon.component';
import { MtModalContent } from './components/modal/mt-modal-content/mt-modal-content.component';
import { MtModalFooter } from './components/modal/mt-modal-footer/mt-modal-footer.component';
import { MtModalHeader } from './components/modal/mt-modal-header/mt-modal-header.component';
import { MtModal } from './components/modal/mt-modal/mt-modal.component';

@NgModule({
  declarations: [FaIconComponent, MtModal, MtModalContent, MtModalFooter, MtModalHeader],
  imports: [CommonModule, MaterialModule],
  exports: [FaIconComponent, MtModal, MtModalContent, MtModalFooter, MtModalHeader],
})
export class SharedModule {}
