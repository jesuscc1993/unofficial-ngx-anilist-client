import { Component, inject, output } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';

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

export type AvailableFilter =
  | 'country'
  | 'entryStatuses'
  | 'format'
  | 'mediaStatus'
  | 'score';

export type MediaFilterSelection = {
  countryIn?: MediaCountry[];
  countryNotIn?: MediaCountry[];
  entryStatusIn?: ListEntryStatus[];
  entryStatusNotIn?: ListEntryStatus[];
  formatIn?: MediaFormat[];
  formatNotIn?: MediaFormat[];
  mediaStatusIn?: MediaStatus[];
  mediaStatusNotIn?: MediaStatus[];
  scoreGreaterThan?: number;
  scoreSmallerThan?: number;
};

export type MediaFilterDialogData = {
  availableFilters: AvailableFilter[];
  availableOptions: AvailableOptions;
  mediaType: MediaType;
  selectedFilters: MediaFilterSelection;
  titleKey?: string;
};

export type AvailableOptions = {
  entryStatuses?: ListEntryStatus[];
  formatOptions?: MediaFormat[];
  mediaCountries?: MediaCountry[];
  mediaStatuses?: MediaStatus[];
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
  private translate = inject(TranslateService);

  protected getFilterSelectLabel = (key: string, filterKey: string) =>
    `${this.translate.instant(key)} ${this.translate.instant(filterKey)}...`;

  readonly onSubmit = output<MediaFilterSelection>();

  readonly availableFilters = this.data.availableFilters;
  readonly availableOptions = this.data.availableOptions;
  readonly mediaType = this.data.mediaType;
  readonly titleKey = this.data.titleKey;

  readonly filterForm = this.formBuilder.group({
    countryIn: [this.data.selectedFilters.countryIn ?? []],
    countryNotIn: [this.data.selectedFilters.countryNotIn ?? []],
    entryStatusIn: [this.data.selectedFilters.entryStatusIn ?? []],
    entryStatusNotIn: [this.data.selectedFilters.entryStatusNotIn ?? []],
    formatIn: [this.data.selectedFilters.formatIn ?? []],
    formatNotIn: [this.data.selectedFilters.formatNotIn ?? []],
    mediaStatusIn: [this.data.selectedFilters.mediaStatusIn ?? []],
    mediaStatusNotIn: [this.data.selectedFilters.mediaStatusNotIn ?? []],
    scoreGreaterThan: [this.data.selectedFilters.scoreGreaterThan],
    scoreSmallerThan: [this.data.selectedFilters.scoreSmallerThan],
  });

  readonly entryStatuses =
    this.availableOptions.entryStatuses ?? listEntryStatuses;

  readonly mediaCountries =
    this.availableOptions.mediaCountries ?? mediaCountries;

  readonly mediaScores = mediaScores;

  readonly mediamediaStatuses =
    this.availableOptions.mediaStatuses ?? mediaStatuses;

  readonly mediaFormats =
    this.availableOptions.formatOptions ??
    (isAnime(this.mediaType) ? animeFormats : mangaFormats);

  getScoreGreaterThanLiteral = (score: unknown) => {
    return typeof score === 'number' && score
      ? `≥ ${score}`
      : 'media.scoreValues.undefined';
  };

  getScoreSmallerThanLiteral = (score: unknown) => {
    return typeof score === 'number' && score
      ? `< ${score}`
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
