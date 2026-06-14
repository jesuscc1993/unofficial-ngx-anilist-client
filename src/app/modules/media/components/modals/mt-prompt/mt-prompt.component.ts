import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export type PromptData = {
  cancelLiteral?: string;
  confirmLiteral?: string;
  content?: string;
  confirmColor?: string;
  cancelColor?: string;
  hasCancel?: boolean;
  hasConfirm?: boolean;
  title?: string;
  cancel?: () => void;
  confirm?: () => void;
  dismiss?: () => void;
};

@Component({
  selector: 'mt-prompt',
  templateUrl: './mt-prompt.component.html',
  styleUrls: ['./mt-prompt.component.scss'],
  standalone: false,
})
export class MtPromptComponent {
  private dialogRef = inject<MatDialogRef<MtPromptComponent>>(MatDialogRef);
  protected promptData = inject<PromptData>(MAT_DIALOG_DATA);

  readonly data: PromptData;

  constructor() {
    const promptData = this.promptData;

    this.data = promptData;
  }

  cancel() {
    this.data.cancel?.();
    this.close();
  }

  confirm() {
    this.data.confirm?.();
    this.close();
  }

  dismiss() {
    this.data.dismiss?.();
    this.close();
  }

  close() {
    this.dialogRef.close();
  }
}
