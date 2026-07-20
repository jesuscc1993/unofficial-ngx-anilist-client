import {
  Component, ElementRef, inject, Input, OnChanges, OnInit, SimpleChanges, ViewChild,
} from '@angular/core';
import { ControlContainer, FormControl } from '@angular/forms';

export interface MtSelectOption {
  label: string;
  value: unknown;
}

@Component({
  selector: 'mt-select',
  templateUrl: './mt-select.component.html',
  styleUrls: ['./mt-select.component.scss'],
  standalone: false,
})
export class MtSelectComponent implements OnInit, OnChanges {
  private controlContainer = inject(ControlContainer);

  @Input() controlName!: string;
  @Input() label!: string;
  @Input() optionPrefixLabel = '';
  @Input() multiple = false;
  @Input() values?: unknown[];

  control!: FormControl;
  filterControl = new FormControl('');
  options: MtSelectOption[] = [];
  filteredOptions: MtSelectOption[] = [];

  @ViewChild('filterInput') filterInputRef!: ElementRef<HTMLInputElement>;

  constructor() {
    this.filterControl.valueChanges.subscribe((filter) => {
      this.generateFilteredOptions(filter);
    });
  }

  ngOnInit(): void {
    const control = this.controlContainer.control?.get(this.controlName);
    if (!control) {
      throw new Error(
        `Control with name '${this.controlName}' not found in parent form group.`
      );
    }
    this.control = control as FormControl;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['values'] || changes['optionPrefixLabel']) {
      this.generateOptions();
    }
  }

  openedChange(opened: boolean): void {
    if (opened) {
      setTimeout(() => this.filterInputRef.nativeElement.focus());
    }
  }

  private generateOptions(): void {
    this.options = (this.values ?? []).map((v) => ({
      value: v,
      label: this.optionPrefixLabel + v,
    }));

    const filterValue = (this.filterControl.value ?? '').toLowerCase();
    this.generateFilteredOptions(filterValue);
  }

  private generateFilteredOptions(filter: string | null): void {
    const filterValue = (filter ?? '').toLowerCase();
    if (!filterValue) {
      this.filteredOptions = this.options;
      return;
    }

    const selectedOptions: unknown[] = this.control
      ? this.multiple
        ? (this.control.value ?? [])
        : this.control.value !== null
          ? [this.control.value]
          : []
      : [];

    this.filteredOptions = this.options.filter(
      (option) =>
        option.label.toLowerCase().includes(filterValue) ||
        selectedOptions.includes(option.value)
    );
  }
}
