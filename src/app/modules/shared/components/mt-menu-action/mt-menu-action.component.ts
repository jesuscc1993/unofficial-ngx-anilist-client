import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mt-menu-action',
  templateUrl: './mt-menu-action.component.html',
  styleUrls: ['./mt-menu-action.component.scss'],
})
export class MtMenuActionComponent {
  @Input() disabled?: boolean;
  @Input() icon?: string;
  @Output() onPress: EventEmitter<void> = new EventEmitter<void>();
}
