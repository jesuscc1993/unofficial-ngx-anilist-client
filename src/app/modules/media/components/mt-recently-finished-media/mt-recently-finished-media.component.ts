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
import { basicMediaSorts } from '../../../shared/constants/media.constants';
import { ListEntry } from '../../../shared/types/anilist/listEntry.types';
import {
  MediaCountry,
  MediaFormat,
  MediaSort,
  MediaType,
} from '../../../shared/types/anilist/media.types';
import { MediaCommands } from '../../commands/media.commands.interface';
import {
  getMediaFormats,
  getMediaFormatsForListEntries,
  getMediaTypePrefixedStorageKey,
  getSortFunctionByMediaSort,
  getSortLiteral,
  isAnime,
  matchesCountryInFilter,
  matchesCountryNotInFilter,
  matchesFormatInFilter,
  matchesFormatNotInFilter,
  matchesScoreGreaterThanInFilter,
  matchesScoreSmallerThanFilter,
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
  selector: 'mt-recently-finished-media',
  templateUrl: './mt-recently-finished-media.component.html',
  styleUrls: ['./mt-recently-finished-media.component.scss'],
  standalone: false,
})
export class MtRecentlyFinishedMediaComponent
  extends WithObservableOnDestroy
  implements OnInit
{
  private animeCommands = inject(AnimeCommands);
  private changeDetectorRef = inject(ChangeDetectorRef);
  private dialog = inject(MatDialog);
  private mangaCommands = inject(MangaCommands);

  @Input() mediaType!: MediaType;

  readonly isAnime = isAnime;
  readonly getSortLiteral = getSortLiteral;
  readonly mediaSorts = basicMediaSorts;

  mediaCommands!: MediaCommands;

  error?: Error;
  filteredEntries?: ListEntry[];
  maxEndDate?: Date;
  mediaFormats?: MediaFormat[];
  searching = true;

  countryIn?: MediaCountry[];
  countryNotIn?: MediaCountry[];
  formatIn?: MediaFormat[];
  formatNotIn?: MediaFormat[];
  scoreGreaterThan?: number;
  scoreSmallerThan?: number;
  sortBy?: MediaSort;

  private listEntries?: ListEntry[];
  private monthsAhead = 1;

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
    const now = new Date();
    this.maxEndDate = now;
    this.maxEndDate.setMonth(now.getMonth() + this.monthsAhead);

    this.mediaFormats = getMediaFormats(this.mediaType);

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
    this.scoreGreaterThan = this.getStoredFilter<number>(
      StorageKeys.ScoreGreaterThan
    );
    this.scoreSmallerThan = this.getStoredFilter<number>(
      StorageKeys.ScoreSmallerThan
    );
    this.sortBy = this.getStoredFilter<MediaSort>(
      StorageKeys.SortBy,
      MediaSort.END_DATE_DESC
    );

    this.mediaCommands
      .getPendingMedia(this.maxEndDate)
      .pipe(
        tap((mediaListEntries) => {
          this.listEntries = mediaListEntries;
          this.mediaFormats = getMediaFormatsForListEntries(
            mediaListEntries,
            this.mediaType
          );
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
        availableFilters: ['country', 'format', 'score'],
        formatOptions: this.mediaFormats ?? [],
        mediaType: this.mediaType,
        titleKey: `${this.mediaType.toLowerCase()}.dashboard.finishedReleasing`,
        selectedFilters: {
          countryIn: this.countryIn ?? [],
          countryNotIn: this.countryNotIn ?? [],
          formatIn: this.formatIn ?? [],
          formatNotIn: this.formatNotIn ?? [],
          scoreGreaterThan: this.scoreGreaterThan,
          scoreSmallerThan: this.scoreSmallerThan,
        },
      },
    });

    dialogRef.componentInstance.onSubmit.subscribe((filters) => {
      this.applyFilters(filters);
    });
  }

  private applyFilters({
    countryIn = [],
    countryNotIn = [],
    formatIn = [],
    formatNotIn = [],
    scoreGreaterThan,
    scoreSmallerThan,
  }: MediaFilterSelection) {
    this.countryIn = countryIn;
    this.countryNotIn = countryNotIn;
    this.formatIn = formatIn;
    this.formatNotIn = formatNotIn;
    this.scoreGreaterThan = scoreGreaterThan;
    this.scoreSmallerThan = scoreSmallerThan;
    this.processEntries();

    this.setStoredFilter(StorageKeys.CountryIn, countryIn);
    this.setStoredFilter(StorageKeys.CountryNotIn, countryNotIn);
    this.setStoredFilter(StorageKeys.FormatIn, formatIn);
    this.setStoredFilter(StorageKeys.FormatNotIn, formatNotIn);
    this.setStoredFilter(StorageKeys.ScoreGreaterThan, scoreGreaterThan);
    this.setStoredFilter(StorageKeys.ScoreSmallerThan, scoreSmallerThan);
  }

  setSortBy = (sortBy: MediaSort) => {
    this.sortBy = sortBy;
    this.processEntries();

    this.setStoredFilter(StorageKeys.SortBy, sortBy);
  };

  private sortEntries() {
    const sortFunction = getSortFunctionByMediaSort(this.sortBy);
    if (sortFunction) {
      this.listEntries = sortFunction(this.listEntries ?? []);
    }
  }

  private setStoredFilter<T>(key: string, value: T): void {
    storageService.setItem(
      getMediaTypePrefixedStorageKey(
        storageService.getPrefixedKey(StoragePrefixes.RecentlyFinished, key),
        this.mediaType
      ),
      value
    );
  }

  private getStoredFilter<T>(key: string, fallback?: T): T | undefined {
    return storageService.getItem<T>(
      getMediaTypePrefixedStorageKey(
        storageService.getPrefixedKey(StoragePrefixes.RecentlyFinished, key),
        this.mediaType
      ),
      fallback
    );
  }

  private filterEntries() {
    this.filteredEntries = (this.listEntries ?? [])?.filter(
      (entry) =>
        matchesCountryInFilter(entry, this.countryIn) &&
        matchesCountryNotInFilter(entry, this.countryNotIn) &&
        matchesFormatInFilter(entry, this.formatIn) &&
        matchesFormatNotInFilter(entry, this.formatNotIn) &&
        matchesScoreGreaterThanInFilter(entry, this.scoreGreaterThan) &&
        matchesScoreSmallerThanFilter(entry, this.scoreSmallerThan)
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
