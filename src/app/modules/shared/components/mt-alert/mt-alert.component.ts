import { Component, Input } from '@angular/core';

@Component({
    selector: 'mt-alert',
    templateUrl: './mt-alert.component.html',
    styleUrls: ['./mt-alert.component.scss'],
    standalone: false
})
export class MtAlertComponent {
  @Input() type: string;
}
