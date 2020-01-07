import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { ModalOrigin } from '../../../../shared/types/modal.types';

export type PromptData = {
  cancelLiteral?: string;
  confirmLiteral?: string;
  content?: string;
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
})
export class MtPromptComponent {
  readonly origin: ModalOrigin;
  readonly data: PromptData;

  constructor(
    private dialogRef: MatDialogRef<MtPromptComponent>,
    @Inject(MAT_DIALOG_DATA) protected promptData: PromptData
  ) {
    this.data = promptData;
  }

  cancel() {
    this.data.cancel && this.data.cancel();
    this.dialogRef.close();
  }

  confirm() {
    this.data.confirm && this.data.confirm();
    this.dialogRef.close();
  }

  dismiss() {
    this.data.dismiss && this.data.dismiss();
    this.dialogRef.close();
  }
}
