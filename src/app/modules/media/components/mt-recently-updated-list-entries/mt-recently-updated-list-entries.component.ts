import { of } from 'rxjs';
import { catchError, takeUntil, tap } from 'rxjs/operators';

import {
  ChangeDetectorRef,
  Component,
  inject,
  Input,
  OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { largeModalOptions } from '../../../../app.constants';
import { AnimeCommands } from '../../../anime/commands/anime.commands';
import { MangaCommands } from '../../../manga/commands/manga.commands';
import { WithObservableOnDestroy } from '../../../shared/components/with-observable-on-destroy/with-observable-on-destroy.component';
import { listEntryStatuses } from '../../../shared/constants/listEntry.constants';
import {
  mediaCountries,
  mediaStatuses,
} from '../../../shared/constants/media.constants';
import {
  ListEntry,
  ListEntryStatus,
} from '../../../shared/types/anilist/listEntry.types';
import {
  MediaCountry,
  MediaFormat,
  MediaStatus,
  MediaType,
} from '../../../shared/types/anilist/media.types';
import { MediaCommands } from '../../commands/media.commands.interface';
import {
  getListEntryStatusesForListEntries,
  getMediaCountriesForListEntries,
  getMediaFormats,
  getMediaFormatsForListEntries,
  getMediaStatusesForListEntries,
  getMediaTypePrefixedStorageKey,
  isAnime,
  matchesCountryInFilter,
  matchesCountryNotInFilter,
  matchesFormatInFilter,
  matchesFormatNotInFilter,
  matchesMediaStatusInFilter,
  matchesMediaStatusNotInFilter,
  matchesScoreGreaterThanInFilter,
  matchesScoreSmallerThanFilter,
  matchesStatusInFilter,
  matchesStatusNotInFilter,
} from '../../domain/media.domain';
import {
  StorageKeys,
  StoragePrefixes,
  storageService,
} from '../../services/storage.service';
import {
  MediaFilterSelection,
  MtMediaFiltersComponent,
} from '../modals/mt-media-filters/mt-media-filters.component';

@Component({
  selector: 'mt-recently-updated-list-entries',
  templateUrl: './mt-recently-updated-list-entries.component.html',
  styleUrls: ['./mt-recently-updated-list-entries.component.scss'],
  standalone: false,
})
export class MtRecentlyUpdatedListEntriesComponent
  extends WithObservableOnDestroy
  implements OnInit
{
  private animeCommands = inject(AnimeCommands);
  private changeDetectorRef = inject(ChangeDetectorRef);
  private dialog = inject(MatDialog);
  private mangaCommands = inject(MangaCommands);

  @Input() mediaType!: MediaType;

  readonly isAnime = isAnime;

  mediaCommands!: MediaCommands;

  error?: Error;
  filteredEntries?: ListEntry[];
  listEntryStatuses?: ListEntryStatus[];
  mediaCountries?: MediaCountry[];
  mediaFormats?: MediaFormat[];
  mediaStatuses?: MediaStatus[];
  searching = true;

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

  private listEntries?: ListEntry[];

  constructor() {
    super();
  }

  ngOnInit() {
    if (isAnime(this.mediaType)) {
      this.mediaCommands = this.animeCommands;
    } else {
      this.mediaCommands = this.mangaCommands;
    }

    this.initialize();
  }

  initialize() {
    this.listEntryStatuses = listEntryStatuses;
    this.mediaCountries = mediaCountries;
    this.mediaFormats = getMediaFormats(this.mediaType);
    this.mediaStatuses = mediaStatuses;

    this.countryIn = this.getStoredFilter<MediaCountry[]>(
      StorageKeys.CountryIn,
      []
    );
    this.countryNotIn = this.getStoredFilter<MediaCountry[]>(
      StorageKeys.CountryNotIn,
      []
    );
    this.formatIn = this.getStoredFilter<MediaFormat[]>(
      StorageKeys.FormatIn,
      []
    );
    this.formatNotIn = this.getStoredFilter<MediaFormat[]>(
      StorageKeys.FormatNotIn,
      []
    );
    this.entryStatusIn = this.getStoredFilter<ListEntryStatus[]>(
      StorageKeys.EntryStatusIn,
      []
    );
    this.entryStatusNotIn = this.getStoredFilter<ListEntryStatus[]>(
      StorageKeys.EntryStatusNotIn,
      []
    );
    this.mediaStatusIn = this.getStoredFilter<MediaStatus[]>(
      StorageKeys.MediaStatusIn,
      []
    );
    this.mediaStatusNotIn = this.getStoredFilter<MediaStatus[]>(
      StorageKeys.MediaStatusNotIn,
      []
    );
    this.scoreGreaterThan = this.getStoredFilter<number>(
      StorageKeys.ScoreGreaterThan
    );
    this.scoreSmallerThan = this.getStoredFilter<number>(
      StorageKeys.ScoreSmallerThan
    );

    this.mediaCommands
      .getListEntries()
      .pipe(
        tap((mediaListEntries) => {
          this.listEntries = mediaListEntries;

          this.mediaCountries =
            getMediaCountriesForListEntries(mediaListEntries);

          this.mediaFormats = getMediaFormatsForListEntries(
            mediaListEntries,
            this.mediaType
          );

          this.mediaStatuses = getMediaStatusesForListEntries(mediaListEntries);

          this.listEntryStatuses =
            getListEntryStatusesForListEntries(mediaListEntries);

          this.processEntries();
        }),
        catchError((error) => this.onError(error)),
        tap(() => this.changeDetectorRef.markForCheck()),
        takeUntil(this.destroyed$)
      )
      .subscribe();
  }

  openFilters() {
    const dialogRef = this.dialog.open(MtMediaFiltersComponent, {
      ...largeModalOptions,
      data: {
        availableFilters: [
          'country',
          'entryStatuses',
          'format',
          'mediaStatus',
          'score',
        ],
        availableOptions: {
          entryStatuses: this.listEntryStatuses ?? [],
          formatOptions: this.mediaFormats ?? [],
          mediaCountries: this.mediaCountries ?? [],
          mediaStatuses: this.mediaStatuses ?? [],
        },
        mediaType: this.mediaType,
        titleKey: `${this.mediaType.toLowerCase()}.dashboard.recentlyUpdated`,
        selectedFilters: {
          countryIn: this.countryIn ?? [],
          countryNotIn: this.countryNotIn ?? [],
          entryStatusIn: this.entryStatusIn ?? [],
          entryStatusNotIn: this.entryStatusNotIn ?? [],
          formatIn: this.formatIn ?? [],
          formatNotIn: this.formatNotIn ?? [],
          mediaStatusIn: this.mediaStatusIn ?? [],
          mediaStatusNotIn: this.mediaStatusNotIn ?? [],
          scoreGreaterThan: this.scoreGreaterThan,
          scoreSmallerThan: this.scoreSmallerThan,
        },
      },
    });

    dialogRef.componentInstance.onSubmit.subscribe((filters) => {
      this.applyFilters(filters);
    });
  }

  private setStoredFilter<T>(key: string, value: T): void {
    storageService.setItem(
      getMediaTypePrefixedStorageKey(
        storageService.getPrefixedKey(StoragePrefixes.RecentlyUpdated, key),
        this.mediaType
      ),
      value
    );
  }

  private getStoredFilter<T>(key: string, fallback?: T): T | undefined {
    return storageService.getItem<T>(
      getMediaTypePrefixedStorageKey(
        storageService.getPrefixedKey(StoragePrefixes.RecentlyUpdated, key),
        this.mediaType
      ),
      fallback
    );
  }

  private applyFilters({
    countryIn = [],
    countryNotIn = [],
    entryStatusIn = [],
    entryStatusNotIn = [],
    formatIn = [],
    formatNotIn = [],
    mediaStatusIn = [],
    mediaStatusNotIn = [],
    scoreGreaterThan,
    scoreSmallerThan,
  }: MediaFilterSelection) {
    this.scoreGreaterThan = scoreGreaterThan;
    this.countryIn = countryIn;
    this.countryNotIn = countryNotIn;
    this.entryStatusIn = entryStatusIn;
    this.entryStatusNotIn = entryStatusNotIn;
    this.formatIn = formatIn;
    this.formatNotIn = formatNotIn;
    this.mediaStatusIn = mediaStatusIn;
    this.mediaStatusNotIn = mediaStatusNotIn;
    this.processEntries();

    this.setStoredFilter(StorageKeys.CountryIn, countryIn);
    this.setStoredFilter(StorageKeys.CountryNotIn, countryNotIn);
    this.setStoredFilter(StorageKeys.EntryStatusIn, entryStatusIn);
    this.setStoredFilter(StorageKeys.EntryStatusNotIn, entryStatusNotIn);
    this.setStoredFilter(StorageKeys.FormatIn, formatIn);
    this.setStoredFilter(StorageKeys.FormatNotIn, formatNotIn);
    this.setStoredFilter(StorageKeys.MediaStatusIn, mediaStatusIn);
    this.setStoredFilter(StorageKeys.MediaStatusNotIn, mediaStatusNotIn);
    this.setStoredFilter(StorageKeys.ScoreGreaterThan, scoreGreaterThan);
    this.setStoredFilter(StorageKeys.ScoreSmallerThan, scoreGreaterThan);
    this.setStoredFilter(StorageKeys.ScoreSmallerThan, scoreSmallerThan);
  }

  private sortEntries() {
    this.listEntries = (this.listEntries ?? []).sort((a, b) =>
      (a.updatedAt ?? -Infinity) > (b.updatedAt ?? -Infinity) ? -1 : 1
    );
  }

  private filterEntries() {
    this.filteredEntries = (this.listEntries ?? [])?.filter(
      (entry) =>
        matchesCountryInFilter(entry, this.countryIn) &&
        matchesCountryNotInFilter(entry, this.countryNotIn) &&
        matchesFormatInFilter(entry, this.formatIn) &&
        matchesFormatNotInFilter(entry, this.formatNotIn) &&
        matchesMediaStatusInFilter(entry, this.mediaStatusIn) &&
        matchesMediaStatusNotInFilter(entry, this.mediaStatusNotIn) &&
        matchesScoreGreaterThanInFilter(entry, this.scoreGreaterThan) &&
        matchesScoreSmallerThanFilter(entry, this.scoreSmallerThan) &&
        matchesStatusInFilter(entry, this.entryStatusIn) &&
        matchesStatusNotInFilter(entry, this.entryStatusNotIn)
    );
  }

  private processEntries() {
    this.sortEntries();
    this.filterEntries();
    this.searching = false;
    this.changeDetectorRef.markForCheck();
  }

  private onError(error: Error) {
    this.error = error;
    this.searching = false;

    return of();
  }
}
