import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { tap } from 'rxjs/operators';

import { ToastService } from '../../../../shared/services/toast.service';
import { ListEntry, ListEntryStatus } from '../../../../shared/types/anilist/listEntry.types';
import { Media } from '../../../../shared/types/anilist/media.types';
import { AnimeService } from '../../../services/anime.service';

type ListEntryFormModalParameters = {
  listEntry: ListEntry;
  media: Media;
};

@Component({
  selector: 'mt-list-entry-form-modal',
  templateUrl: './mt-list-entry-form-modal.component.html',
  styleUrls: ['./mt-list-entry-form-modal.component.scss'],
})
export class MtListEntryFormModalComponent {
  protected listEntry: ListEntry;
  protected listEntryForm: FormGroup;
  protected listEntryStatusList: ListEntryStatus[] = [
    'COMPLETED',
    'DROPPED',
    'PAUSED',
    'PLANNING',
    'REPEATING',
    'CURRENT',
  ];

  constructor(
    private translateService: TranslateService,
    private toastService: ToastService,
    private animeService: AnimeService,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<MtListEntryFormModalComponent>,
    @Inject(MAT_DIALOG_DATA) protected data: ListEntryFormModalParameters
  ) {
    this.listEntry = data.listEntry;

    this.listEntryForm = this.formBuilder.group({
      status: [(this.listEntry && this.listEntry.status) || 'COMPLETED', [Validators.required]],
      score: [
        this.listEntry && this.listEntry.scoreRaw && this.listEntry.scoreRaw / 10,
        [Validators.max(10), Validators.min(0)],
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
    return {
      ...this.listEntry,
      scoreRaw: Math.trunc(this.listEntryForm.value.score * 10),
      status: this.listEntryForm.value.status,
    };
  }

  private preventDefault(event: Event) {
    if (event) {
      event.preventDefault();
    }
  }
}
