import { Component, Input } from '@angular/core';

@Component({
  selector: 'mt-header-select',
  templateUrl: './mt-header-select.component.html',
  styleUrls: ['./mt-header-select.component.scss'],
  standalone: false,
})
export class MtHeaderSelectComponent {
  @Input() iconName!: string;
  @Input() multiple?: boolean;
  @Input() options!: string[];
  @Input() placeholder?: string;
  @Input() title!: string;
  @Input() truncate?: boolean;
  @Input() truncateMultiple?: boolean;
  @Input() value!: unknown;
  @Input() getOptionLiteral?: (option: unknown) => string;
  @Input() onChange!: (selection: unknown) => void;

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
