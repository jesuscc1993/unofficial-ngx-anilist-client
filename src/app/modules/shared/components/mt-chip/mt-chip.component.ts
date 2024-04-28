import { Component, Input } from '@angular/core';

@Component({
  selector: 'mt-chip',
  templateUrl: './mt-chip.component.html',
  styleUrls: ['./mt-chip.component.scss'],
})
export class MtChipComponent {
  @Input() title?: boolean;
}
