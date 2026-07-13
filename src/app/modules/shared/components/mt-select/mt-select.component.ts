import { Component, inject, Input, OnInit } from '@angular/core';
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
export class MtSelectComponent implements OnInit {
  private controlContainer = inject(ControlContainer);

  @Input() controlName!: string;
  @Input() label!: string;
  @Input() optionPrefixLabel = '';
  @Input() multiple = false;
  @Input() values: unknown[] = [];

  control!: FormControl;

  ngOnInit(): void {
    const control = this.controlContainer.control?.get(this.controlName);
    if (!control) {
      throw new Error(
        `Control with name '${this.controlName}' not found in parent form group.`
      );
    }
    this.control = control as FormControl;
  }

  getOptions(): MtSelectOption[] {
    return this.values.map((v) => ({
      value: v,
      label: this.optionPrefixLabel + v,
    }));
  }
}
