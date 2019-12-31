import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { takeUntil, tap } from 'rxjs/operators';

import { integerPattern, scorePattern } from '../../../../../app.constants';
import {
  WithObservableOnDestroy,
} from '../../../../shared/components/with-observable-on-destroy/with-observable-on-destroy.component';
import { ListEntry, listEntryStatuses } from '../../../../shared/types/anilist/listEntry.types';
import { Media } from '../../../../shared/types/anilist/media.types';
import { ModalOrigin } from '../../../../shared/types/modal.types';
import { AnimeCommands } from '../../../commands/anime.commands';

type ListEntryFormModalParameters = {
  listEntry?: ListEntry;
  media: Media;
  origin: ModalOrigin;
};

@Component({
  selector: 'mt-list-entry-form-modal',
  templateUrl: './mt-list-entry-form-modal.component.html',
  styleUrls: ['./mt-list-entry-form-modal.component.scss'],
})
export class MtListEntryFormModalComponent extends WithObservableOnDestroy {
  readonly listEntryStatuses = listEntryStatuses;

  readonly origin: ModalOrigin;
  readonly media: Media;
  readonly listEntry: ListEntry;
  readonly listEntryForm: FormGroup;

  constructor(
    private animeCommands: AnimeCommands,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<MtListEntryFormModalComponent>,
    @Inject(MAT_DIALOG_DATA) protected data: ListEntryFormModalParameters
  ) {
    super();

    const { progress, repeat, scoreRaw, status } = data.listEntry || ({} as ListEntry);
    this.origin = data.origin;
    this.media = data.media;
    this.listEntry = data.listEntry;

    this.listEntryForm = this.formBuilder.group({
      status: [status || 'PLANNING', [Validators.required]],
      repeat: [repeat || 0, [Validators.required, Validators.pattern(integerPattern)]],
      score: [(scoreRaw && scoreRaw / 10) || 0, [Validators.required, Validators.pattern(scorePattern)]],
      progress: [
        progress || 0,
        [Validators.required, Validators.pattern(integerPattern), Validators.max(this.media.episodes)],
      ],
    });
  }

  saveEntry() {
    const formListEntry: ListEntry = this.getFormEntry();

    this.animeCommands
      .saveAnimeListEntry(formListEntry)
      .pipe(
        takeUntil(this.destroyed$),
        tap(savedListEntry => {
          const success: boolean = savedListEntry.id !== undefined;
          if (success) {
            this.dialog.closeAll();
          }
        })
      )
      .subscribe();
  }

  deleteEntry(event?: Event) {
    this.preventDefault(event);

    this.animeCommands
      .deleteAnimeListEntry(this.listEntry)
      .pipe(
        takeUntil(this.destroyed$),
        tap(success => {
          if (success) {
            this.dialog.closeAll();
          }
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

  onListEntryChanges(listEntry: ListEntry) {
    this.dismiss();
  }

  private getFormEntry(): ListEntry {
    const { progress, repeat, score, status } = this.listEntryForm.value;
    return {
      ...this.listEntry,
      status,
      repeat: parseInt(repeat),
      scoreRaw: Math.trunc(parseFloat(score) * 10),
      progress: parseInt(progress),
    };
  }

  private preventDefault(event: Event) {
    if (event) {
      event.preventDefault();
    }
  }
}
