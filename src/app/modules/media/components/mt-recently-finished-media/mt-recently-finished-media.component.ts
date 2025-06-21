import { of } from 'rxjs';
import { catchError, takeUntil, tap } from 'rxjs/operators';

import { Component, Input, OnInit } from '@angular/core';

import { AnimeCommands } from '../../../anime/commands/anime.commands';
import { animeFormats } from '../../../anime/constants/anime.constants';
import { MangaCommands } from '../../../manga/commands/manga.commands';
import { mangaFormats } from '../../../manga/constants/manga.constants';
import {
  WithObservableOnDestroy,
} from '../../../shared/components/with-observable-on-destroy/with-observable-on-destroy.component';
import { basicMediaSorts, mediaCountries } from '../../../shared/constants/media.constants';
import { ListEntry } from '../../../shared/types/anilist/listEntry.types';
import {
  MediaCountry, MediaFormat, MediaSort, MediaType,
} from '../../../shared/types/anilist/media.types';
import { MediaCommands } from '../../commands/media.commands.interface';
import {
  getCountryLiteral, getFormatLiteral, getMediaTypePrefixedStorageKey, getSortLiteral, isAnime,
  isManga, sortListEntriesByMediaEndDate, sortListEntriesByMediaScore, sortListEntriesByMediaTitle,
} from '../../domain/media.domain';
import { StorageKeys, storageService } from '../../services/storage.service';

@Component({
  selector: 'mt-recently-finished-media',
  templateUrl: './mt-recently-finished-media.component.html',
  styleUrls: ['./mt-recently-finished-media.component.scss'],
})
export class MtRecentlyFinishedMediaComponent
  extends WithObservableOnDestroy
  implements OnInit
{
  @Input() mediaType: MediaType;

  readonly getCountryLiteral = getCountryLiteral;
  readonly getFormatLiteral = getFormatLiteral;
  readonly getSortLiteral = getSortLiteral;
  readonly isAnime = isAnime;
  readonly isManga = isManga;
  readonly mediaSorts = basicMediaSorts;

  error: Error;
  filteredEntries: ListEntry[];
  mediaCommands: MediaCommands;
  mediaCountries: MediaCountry[];
  mediaFormats: MediaFormat[];
  searching = true;
  selectedCountries: MediaCountry[];
  selectedFormats: MediaFormat[];
  selectedSort: MediaSort;

  private listEntries: ListEntry[];

  constructor(
    private animeCommands: AnimeCommands,
    private mangaCommands: MangaCommands
  ) {
    super();

    this.setSelectedCountries = this.setSelectedCountries.bind(this);
    this.setSelectedFormats = this.setSelectedFormats.bind(this);
    this.setSelectedSort = this.setSelectedSort.bind(this);
    this.onError = this.onError.bind(this);
  }

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    this.mediaCommands = isAnime(this.mediaType)
      ? this.animeCommands
      : this.mangaCommands;

    this.mediaCommands
      .getPendingMedia()
      .pipe(
        tap((mediaListEntries) => {
          this.listEntries = mediaListEntries;
          this.mediaCountries = mediaCountries;
          this.mediaFormats = (
            isAnime(this.mediaType) ? animeFormats : mangaFormats
          ).filter(
            (format) =>
              !!mediaListEntries.find((entry) => entry.media.format === format)
          );
          this.sortEntries();
          this.searching = false;
        }),
        catchError(this.onError),
        takeUntil(this.destroyed$)
      )
      .subscribe();

    this.selectedCountries = storageService.getItem<MediaCountry[]>(
      getMediaTypePrefixedStorageKey(
        StorageKeys.RecentlyFinished.Country,
        this.mediaType
      ),
      []
    );

    this.selectedFormats = storageService.getItem<MediaFormat[]>(
      getMediaTypePrefixedStorageKey(
        StorageKeys.RecentlyFinished.Format,
        this.mediaType
      ),
      []
    );

    this.selectedSort = storageService.getItem<MediaSort>(
      getMediaTypePrefixedStorageKey(
        StorageKeys.RecentlyFinished.Sort,
        this.mediaType
      ),
      MediaSort.END_DATE_DESC
    );
  }

  setSelectedCountries(selectedCountries: MediaCountry[]) {
    this.selectedCountries = selectedCountries;
    this.filterEntries();

    storageService.setItem(
      getMediaTypePrefixedStorageKey(
        StorageKeys.RecentlyFinished.Country,
        this.mediaType
      ),
      selectedCountries
    );
  }

  setSelectedFormats(selectedFormats: MediaFormat[]) {
    this.selectedFormats = selectedFormats;
    this.filterEntries();

    storageService.setItem(
      getMediaTypePrefixedStorageKey(
        StorageKeys.RecentlyFinished.Format,
        this.mediaType
      ),
      selectedFormats
    );
  }

  setSelectedSort(selectedSort: MediaSort) {
    this.selectedSort = selectedSort;
    this.sortEntries();

    storageService.setItem(
      getMediaTypePrefixedStorageKey(
        StorageKeys.RecentlyFinished.Sort,
        this.mediaType
      ),
      selectedSort
    );
  }

  private filterEntries() {
    this.filteredEntries = this.listEntries.filter(
      (entry) => this.isFormatValid(entry) && this.isCountryValid(entry)
    );
  }

  private isFormatValid(entry: ListEntry) {
    return (
      !this.selectedFormats?.length ||
      this.selectedFormats?.includes(entry.media.format)
    );
  }

  private isCountryValid(entry: ListEntry) {
    return (
      !this.selectedCountries?.length ||
      this.selectedCountries?.includes(entry.media.countryOfOrigin)
    );
  }

  private sortEntries() {
    const sort = {
      [MediaSort.END_DATE_DESC]: sortListEntriesByMediaEndDate,
      [MediaSort.SCORE_DESC]: sortListEntriesByMediaScore,
      [MediaSort.TITLE_ROMAJI]: sortListEntriesByMediaTitle,
    }[this.selectedSort];

    if (sort) {
      this.listEntries = sort(this.listEntries);
    }

    this.filterEntries();
  }

  private onError(error: Error) {
    this.error = error;
    this.searching = false;

    return of();
  }
}
