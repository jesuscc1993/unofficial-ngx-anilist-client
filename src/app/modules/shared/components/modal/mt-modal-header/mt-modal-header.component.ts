import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mt-modal-header',
  templateUrl: './mt-modal-header.component.html',
  styleUrls: ['./mt-modal-header.component.scss'],
})
export class MtModalHeaderComponent {
  @Input() titleClass?: string;

  @Output() onClosePressed: EventEmitter<void>;

  constructor() {
    this.onClosePressed = new EventEmitter<void>();
  }
}
