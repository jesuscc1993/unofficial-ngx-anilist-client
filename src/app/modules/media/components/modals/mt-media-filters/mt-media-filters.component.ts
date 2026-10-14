import { Component, inject, output } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { animeFormats } from '../../../../anime/constants/anime.constants';
import { mangaFormats } from '../../../../manga/constants/manga.constants';
import { listEntryStatuses } from '../../../../shared/constants/listEntry.constants';
import {
  mediaCountries,
  mediaScores,
  mediaStatuses,
} from '../../../../shared/constants/media.constants';
import { SharedModule } from '../../../../shared/shared.module';
import { ListEntryStatus } from '../../../../shared/types/anilist/listEntry.types';
import {
  MediaCountry,
  MediaFormat,
  MediaStatus,
  MediaType,
} from '../../../../shared/types/anilist/media.types';
import { isAnime } from '../../../domain/media.domain';

export type MediaFilter =
  | 'countries'
  | 'entryStatuses'
  | 'formats'
  | 'mediaStatuses'
  | 'score';

export type MediaFilterSelection = {
  countries?: MediaCountry[];
  entryStatuses?: ListEntryStatus[];
  formats?: MediaFormat[];
  mediaStatuses?: MediaStatus[];
  score?: number;
};

export type MediaFilterDialogData = {
  availableFilters: MediaFilter[];
  entryStatusOptions?: ListEntryStatus[];
  formatOptions?: MediaFormat[];
  mediaType: MediaType;
  selectedFilters: MediaFilterSelection;
  titleKey?: string;
};

@Component({
  selector: 'mt-media-filters',
  templateUrl: './mt-media-filters.component.html',
  styleUrl: './mt-media-filters.component.scss',
  standalone: true,
  imports: [SharedModule],
})
export class MtMediaFiltersComponent {
  private data = inject<MediaFilterDialogData>(MAT_DIALOG_DATA);
  private dialogRef =
    inject<MatDialogRef<MtMediaFiltersComponent>>(MatDialogRef);
  private formBuilder = inject(UntypedFormBuilder);

  readonly onSubmit = output<MediaFilterSelection>();

  readonly availableFilters = this.data.availableFilters;
  readonly mediaType = this.data.mediaType;
  readonly titleKey = this.data.titleKey;

  readonly filterForm = this.formBuilder.group({
    countries: [this.data.selectedFilters.countries ?? []],
    entryStatuses: [this.data.selectedFilters.entryStatuses ?? []],
    formats: [this.data.selectedFilters.formats ?? []],
    mediaStatuses: [this.data.selectedFilters.mediaStatuses ?? []],
    score: [this.data.selectedFilters.score],
  });

  readonly entryStatuses = this.data.entryStatusOptions ?? listEntryStatuses;
  readonly mediaCountries = mediaCountries;
  readonly mediaScores = mediaScores;
  readonly mediaStatusOptions = mediaStatuses;
  readonly mediaFormats =
    this.data.formatOptions ??
    (isAnime(this.mediaType) ? animeFormats : mangaFormats);

  getScoreLiteral = (score: unknown) => {
    return typeof score === 'number' && score
      ? `≥ ${score}`
      : 'media.scoreValues.undefined';
  };

  submit = () => {
    this.onSubmit.emit(this.filterForm.getRawValue());
    this.dismiss();
  };

  dismiss = () => {
    this.dialogRef.close();
  };
}
