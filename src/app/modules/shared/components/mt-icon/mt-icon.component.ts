import { Component, Input } from '@angular/core';

@Component({
  selector: 'mt-icon',
  templateUrl: './mt-icon.component.html',
  styleUrls: ['./mt-icon.component.scss'],
  standalone: false,
})
export class FaIconComponent {
  @Input() iconClass?: string;
  @Input() name!: string;
  @Input() title?: string;
  @Input() type?: 'fa-solid' | 'fa-brands';
}
