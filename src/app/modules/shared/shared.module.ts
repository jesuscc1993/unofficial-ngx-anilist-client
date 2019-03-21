import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FaIconComponent } from './components/fa-icon/fa-icon.component';

@NgModule({
  declarations: [FaIconComponent],
  imports: [CommonModule],
  exports: [FaIconComponent],
})
export class SharedModule {}
