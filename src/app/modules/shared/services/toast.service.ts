import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

export const defaultToastOptions: MatSnackBarConfig = {
  duration: 3000,
  panelClass: 'success',
};

@Injectable()
export class ToastService {
  constructor(private matSnackBar: MatSnackBar) {}

  showToast(message: string, action?: string, config: MatSnackBarConfig = defaultToastOptions) {
    this.matSnackBar.open(message, action, config);
  }
}
