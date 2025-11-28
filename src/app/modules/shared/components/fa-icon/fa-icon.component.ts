import { Component, Input } from '@angular/core';

@Component({
    selector: 'fa-icon',
    templateUrl: './fa-icon.component.html',
    styleUrls: ['./fa-icon.component.scss'],
    standalone: false
})
export class FaIconComponent {
  @Input() iconClass?: string;
  @Input() name: string;
  @Input() title?: string;
  @Input() type?: 'fa-solid' | 'fa-brands';
}
