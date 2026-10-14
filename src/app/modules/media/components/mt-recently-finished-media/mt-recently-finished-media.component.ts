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
  matchesCountryFilter,
  matchesFormatFilter,
  matchesScoreFilter,
} from '../../domain/media.domain';
import { StorageKeys, storageService } from '../../services/storage.service';
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
  selectedCountries?: MediaCountry[];
  selectedFormats?: MediaFormat[];
  selectedScore?: number;
  selectedSort?: MediaSort;

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

    this.selectedScore = storageService.getItem<number>(
      getMediaTypePrefixedStorageKey(
        StorageKeys.RecentlyFinished.Score,
        this.mediaType
      )
    );

    this.selectedSort = storageService.getItem<MediaSort>(
      getMediaTypePrefixedStorageKey(
        StorageKeys.RecentlyFinished.Sort,
        this.mediaType
      ),
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
        availableFilters: ['countries', 'formats', 'score'],
        formatOptions: this.mediaFormats ?? [],
        mediaType: this.mediaType,
        titleKey: `${this.mediaType.toLowerCase()}.dashboard.finishedReleasing`,
        selectedFilters: {
          countries: this.selectedCountries ?? [],
          formats: this.selectedFormats ?? [],
          score: this.selectedScore,
        },
      },
    });

    dialogRef.componentInstance.onSubmit.subscribe((filters) => {
      this.applyFilters(filters);
    });
  }

  private applyFilters({
    countries = [],
    formats = [],
    score,
  }: MediaFilterSelection) {
    this.selectedCountries = countries;
    this.selectedFormats = formats;
    this.selectedScore = score;
    this.processEntries();

    storageService.setItem(
      getMediaTypePrefixedStorageKey(
        StorageKeys.RecentlyFinished.Score,
        this.mediaType
      ),
      score
    );
    storageService.setItem(
      getMediaTypePrefixedStorageKey(
        StorageKeys.RecentlyFinished.Country,
        this.mediaType
      ),
      countries
    );
    storageService.setItem(
      getMediaTypePrefixedStorageKey(
        StorageKeys.RecentlyFinished.Format,
        this.mediaType
      ),
      formats
    );
  }

  setSelectedSort = (selectedSort: MediaSort) => {
    this.selectedSort = selectedSort;
    this.processEntries();

    storageService.setItem(
      getMediaTypePrefixedStorageKey(
        StorageKeys.RecentlyFinished.Sort,
        this.mediaType
      ),
      selectedSort
    );
  };

  private sortEntries() {
    const sortFunction = getSortFunctionByMediaSort(this.selectedSort);
    if (sortFunction) {
      this.listEntries = sortFunction(this.listEntries ?? []);
    }
  }

  private filterEntries() {
    this.filteredEntries = (this.listEntries ?? [])?.filter(
      (entry) =>
        matchesCountryFilter(entry, this.selectedCountries) &&
        matchesFormatFilter(entry, this.selectedFormats) &&
        matchesScoreFilter(entry, this.selectedScore)
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
