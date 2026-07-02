import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mt-menu-button',
  templateUrl: './mt-menu-button.component.html',
  styleUrls: ['./mt-menu-button.component.scss'],
  standalone: false,
})
export class MtMenuButtonComponent {
  @Input() disabled?: boolean;
  @Input() icon?: string;

  @Output() onPress: EventEmitter<void>;

  constructor() {
    this.onPress = new EventEmitter<void>();
  }
}
