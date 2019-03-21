import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fa-icon',
  templateUrl: './fa-icon.component.html',
  styleUrls: ['./fa-icon.component.scss'],
})
export class FaIconComponent {
  @Input() type?: 'fas' | 'fab';
  @Input() name: string;
  @Input() class?: string;
}
