import { Component, Input } from '@angular/core';

@Component({
  selector: 'mt-header-picker',
  templateUrl: './mt-header-picker.component.html',
  styleUrls: ['./mt-header-picker.component.scss'],
})
export class MtHeaderPickerComponent {
  @Input() iconName: string;
  @Input() compact?: boolean;
  @Input() multiple?: boolean;
  @Input() options: string[];
  @Input() placeholder?: string;
  @Input() title: string;
  @Input() truncate?: boolean;
  @Input() truncateMultiple?: boolean;
  @Input() value: unknown;
  @Input() getOptionLiteral?: (option: unknown) => string;
  @Input() onChange: (selection: unknown) => void;

  shouldTruncate() {
    return (
      this.truncate ||
      (this.truncateMultiple && (this.value as unknown[])?.length > 1)
    );
  }

  getTruncatedLiteral() {
    return this.value ? 'generic.ellipsis' : undefined;
  }
}
