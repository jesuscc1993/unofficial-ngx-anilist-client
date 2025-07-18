import { takeUntil, tap } from 'rxjs/operators';

import { Component, Inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

import { integerPattern, scorePattern } from '../../../../../app.constants';
import { AnimeCommands } from '../../../../anime/commands/anime.commands';
import { MangaCommands } from '../../../../manga/commands/manga.commands';
import {
  WithObservableOnDestroy,
} from '../../../../shared/components/with-observable-on-destroy/with-observable-on-destroy.component';
import { listEntryStatuses } from '../../../../shared/constants/listEntry.constants';
import { ListEntry } from '../../../../shared/types/anilist/listEntry.types';
import { Anime, Manga, Media } from '../../../../shared/types/anilist/media.types';
import { ModalOrigin } from '../../../../shared/types/modal.types';
import { MediaCommands } from '../../../commands/media.commands.interface';
import {
  getMediaProgress, getMediaTypeProgressLiteral, isAnime,
} from '../../../domain/media.domain';

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
  readonly getMediaProgress = getMediaProgress;
  readonly getMediaTypeProgressLiteral = getMediaTypeProgressLiteral;
  readonly isAnime = isAnime;
  readonly listEntryStatuses = listEntryStatuses;

  readonly origin: ModalOrigin;
  readonly media: Media;
  readonly listEntry: ListEntry;
  readonly listEntryForm: UntypedFormGroup;
  readonly mediaCommands: MediaCommands;

  constructor(
    private animeCommands: AnimeCommands,
    private mangaCommands: MangaCommands,
    private formBuilder: UntypedFormBuilder,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<MtListEntryFormModalComponent>,
    @Inject(MAT_DIALOG_DATA) protected data: ListEntryFormModalParameters
  ) {
    super();

    const { progress, repeat, scoreRaw, status } =
      data.listEntry || ({} as ListEntry);
    this.origin = data.origin;
    this.media = data.media;
    this.listEntry = data.listEntry;

    if (isAnime(data.media)) {
      this.mediaCommands = this.animeCommands;
    } else {
      this.mediaCommands = this.mangaCommands;
    }

    this.listEntryForm = this.formBuilder.group({
      status: [status || 'PLANNING', [Validators.required]],
      repeat: [
        repeat || 0,
        [Validators.required, Validators.pattern(integerPattern)],
      ],
      score: [
        (scoreRaw && scoreRaw / 10) || 0,
        [Validators.required, Validators.pattern(scorePattern)],
      ],
      progress: [
        progress || 0,
        [
          Validators.required,
          Validators.pattern(integerPattern),
          Validators.max(
            (this.media as Anime).episodes || (this.media as Manga).chapters
          ),
        ],
      ],
    });
  }

  saveEntry(event) {
    this.preventDefault(event);

    const formListEntry: ListEntry = this.getFormEntry();

    this.mediaCommands
      .saveListEntry(formListEntry)
      .pipe(
        tap((savedListEntry) => {
          const success = savedListEntry.id !== undefined;
          if (success) {
            this.dialog.closeAll();
          }
        }),
        takeUntil(this.destroyed$)
      )
      .subscribe();
  }

  deleteEntry(event?: Event) {
    this.preventDefault(event);

    this.mediaCommands
      .deleteListEntry(this.listEntry)
      .pipe(
        tap((success) => {
          if (success) {
            this.dialog.closeAll();
          }
        }),
        takeUntil(this.destroyed$)
      )
      .subscribe();
  }

  dismiss(event?: Event) {
    this.preventDefault(event);
    this.dialogRef.close();
  }

  isSubmitAvailable(): boolean {
    return (
      !this.listEntry ||
      JSON.stringify(this.getFormEntry()) !== JSON.stringify(this.listEntry)
    );
  }

  onListEntryChanges(_: ListEntry) {
    this.dismiss();
  }

  private getFormEntry(): ListEntry {
    const { progress, repeat, score, status } = this.listEntryForm.value;
    return {
      ...this.listEntry,
      status,
      repeat: parseInt(repeat, 10),
      scoreRaw: Math.trunc(parseFloat(score) * 10),
      progress: parseInt(progress, 10),
    };
  }

  private preventDefault(event: Event) {
    if (event) {
      event.preventDefault();
    }
  }
}
