import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'mt-modal-header',
  templateUrl: './mt-modal-header.component.html',
  styleUrls: ['./mt-modal-header.component.scss'],
})
export class MtModalHeaderComponent {
  @Output() onClosePressed: EventEmitter<void> = new EventEmitter<void>();
}
