import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { animeFormats } from '../../../../anime/constants/anime.constants';
import { getAnimeStatusLiteral } from '../../../../anime/domain/anime.domain';
import { mangaFormats } from '../../../../manga/constants/manga.constants';
import { getMangaStatusLiteral } from '../../../../manga/domain/manga.domain';
import { listEntryStatuses } from '../../../../shared/constants/listEntry.constants';
import {
  basicMediaSorts,
  mediaCountries,
} from '../../../../shared/constants/media.constants';
import { ListEntryStatus } from '../../../../shared/types/anilist/listEntry.types';
import {
  MediaCountry,
  MediaFormat,
  MediaSort,
  MediaStatus,
  MediaType,
} from '../../../../shared/types/anilist/media.types';
import {
  getCountryLiteral,
  getFormatLiteral,
  getSortLiteral,
  isAnime,
} from '../../../domain/media.domain';

@Component({
  selector: 'mt-media-filters',
  templateUrl: './mt-media-filters.component.html',
  styleUrls: ['./mt-media-filters.component.scss'],
})
export class MtMediaFiltersComponent implements OnInit {
  @Input() mediaType: MediaType;

  @Output() onEntryStatusesChange: EventEmitter<ListEntryStatus[]>;
  @Output() onMediaCountriesChange: EventEmitter<MediaCountry[]>;
  @Output() onMediaFormatsChange: EventEmitter<MediaFormat[]>;
  @Output() onSortChange: EventEmitter<MediaSort>;

  readonly isAnime = isAnime;
  readonly getCountryLiteral = getCountryLiteral;
  readonly getFormatLiteral = getFormatLiteral;
  readonly getSortLiteral = getSortLiteral;

  entryStatuses: ListEntryStatus[];
  mediaCountries: MediaCountry[];
  mediaFormats: MediaFormat[];
  mediaSorts: MediaSort[];

  selectedCountries: MediaCountry[];
  selectedEntryStatuses: ListEntryStatus[];
  selectedFormats: MediaFormat[];
  selectedSort: MediaSort;

  getStatusLiteral: (mediaStatus: MediaStatus) => string;

  ngOnInit() {
    this.mediaCountries = mediaCountries;
    this.mediaSorts = basicMediaSorts;
    this.entryStatuses = listEntryStatuses;

    if (isAnime(this.mediaType)) {
      this.mediaFormats = animeFormats;
      this.getStatusLiteral = getAnimeStatusLiteral;
    } else {
      this.mediaFormats = mangaFormats;
      this.getStatusLiteral = getMangaStatusLiteral;
    }
  }

  setSelectedCountries(selectedCountries: MediaCountry[]) {
    this.selectedCountries = selectedCountries;
    this.onMediaCountriesChange.emit(selectedCountries);
  }

  setSelectedFormats(selectedFormats: MediaFormat[]) {
    this.selectedFormats = selectedFormats;
    this.onMediaFormatsChange.emit(selectedFormats);
  }

  setSelectedSort(selectedSort: MediaSort) {
    this.selectedSort = selectedSort;
    this.onSortChange.emit(selectedSort);
  }

  setSelectedEntryStatuses(selectedEntryStatuses: ListEntryStatus[]) {
    this.selectedEntryStatuses = selectedEntryStatuses;
    this.onEntryStatusesChange.emit(selectedEntryStatuses);
  }
}
