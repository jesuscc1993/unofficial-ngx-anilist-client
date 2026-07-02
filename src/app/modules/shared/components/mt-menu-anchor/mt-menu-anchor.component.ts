import { Component, Input } from '@angular/core';

@Component({
  selector: 'mt-menu-anchor',
  templateUrl: './mt-menu-anchor.component.html',
  styleUrls: ['./mt-menu-anchor.component.scss'],
  standalone: false,
})
export class MtMenuAnchorComponent {
  @Input() href?: string;
  @Input() icon?: string;
  @Input() target?: string;
}
