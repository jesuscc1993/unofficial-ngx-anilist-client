import { Component, Input } from '@angular/core';

/* TODO give this another try; currently blocked with T | T[] | undefined handling */
/* eslint-disable @typescript-eslint/no-explicit-any */
@Component({
  selector: 'mt-header-select',
  templateUrl: './mt-header-select.component.html',
  styleUrls: ['./mt-header-select.component.scss'],
  standalone: false,
})
export class MtHeaderSelectComponent {
  @Input() iconName!: string;
  @Input() multiple?: boolean;
  @Input() options?: unknown[];
  @Input() placeholder?: string;
  @Input() title!: string;
  @Input() truncate?: boolean;
  @Input() truncateMultiple?: boolean;
  @Input() value: unknown | undefined;
  @Input() getOptionLiteral?: (option: any) => string;
  @Input() onChange!: (selection: any | undefined) => void;

  shouldTruncate() {
    return (
      this.truncate ||
      (this.truncateMultiple && (this.value as unknown[])?.length > 1)
    );
  }

  getTruncatedLiteral() {
    return this.value ? 'generic.ellipsis' : '';
  }

  getLabel(option: unknown): string {
    return this.getOptionLiteral
      ? this.getOptionLiteral(option)
      : (option as string);
  }
}
