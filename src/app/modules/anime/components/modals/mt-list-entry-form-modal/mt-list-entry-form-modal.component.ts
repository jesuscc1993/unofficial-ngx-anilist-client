import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { tap } from 'rxjs/operators';

import { integerPattern, scorePattern } from '../../../../../app.constants';
import { ToastService } from '../../../../shared/services/toast.service';
import { ListEntry, listEntryStatuses } from '../../../../shared/types/anilist/listEntry.types';
import { Media } from '../../../../shared/types/anilist/media.types';
import { ModalOrigin } from '../../../../shared/types/modal.types';
import { AnimeService } from '../../../services/anime.service';

type ListEntryFormModalParameters = {
  listEntry: ListEntry;
  media: Media;
  origin: ModalOrigin;
};

@Component({
  selector: 'mt-list-entry-form-modal',
  templateUrl: './mt-list-entry-form-modal.component.html',
  styleUrls: ['./mt-list-entry-form-modal.component.scss'],
})
export class MtListEntryFormModalComponent {
  readonly listEntryStatuses = listEntryStatuses;

  readonly origin: ModalOrigin;
  readonly listEntry: ListEntry;
  readonly listEntryForm: FormGroup;

  constructor(
    private translateService: TranslateService,
    private toastService: ToastService,
    private animeService: AnimeService,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<MtListEntryFormModalComponent>,
    @Inject(MAT_DIALOG_DATA) protected data: ListEntryFormModalParameters
  ) {
    this.origin = data.origin;
    this.listEntry = data.listEntry;

    this.listEntryForm = this.formBuilder.group({
      status: [(this.listEntry && this.listEntry.status) || 'PLANNING', [Validators.required]],
      repeat: [
        (this.listEntry && this.listEntry.repeat) || 0,
        [Validators.required, Validators.pattern(integerPattern)],
      ],
      score: [
        (this.listEntry && this.listEntry.scoreRaw && this.listEntry.scoreRaw / 10) || 0,
        [Validators.required, Validators.pattern(scorePattern)],
      ],
    });
  }

  saveEntry() {
    const formListEntry: ListEntry = this.getFormEntry();

    this.animeService
      .saveAnimeListEntry(formListEntry)
      .pipe(
        tap(savedListEntry => {
          const success: boolean = savedListEntry.id !== undefined;
          if (success) {
            this.toastService.showToast(
              this.translateService.instant('listEntry.update.success', {
                mediaTitle: savedListEntry.media.title.romaji,
              })
            );
          }

          this.dialogRef.close();
        })
      )
      .subscribe();
  }

  dismiss(event?: Event) {
    this.preventDefault(event);
    this.dialogRef.close();
  }

  isSubmitAvailable(): boolean {
    return !this.listEntry || JSON.stringify(this.getFormEntry()) !== JSON.stringify(this.listEntry);
  }

  private getFormEntry(): ListEntry {
    const { repeat, score, status } = this.listEntryForm.value;
    return {
      ...this.listEntry,
      status,
      repeat: parseInt(repeat),
      scoreRaw: Math.trunc(parseInt(score) * 10),
    };
  }

  private preventDefault(event: Event) {
    if (event) {
      event.preventDefault();
    }
  }
}
