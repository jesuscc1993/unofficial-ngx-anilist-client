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
  getMediaFormats,
  getMediaFormatsForListEntries,
  getMediaStatusesForListEntries,
  getMediaTypePrefixedStorageKey,
  isAnime,
  matchesCountryFilter,
  matchesFormatFilter,
  matchesMediaStatusFilter,
  matchesScoreGreaterThanFilter,
  matchesScoreSmallerThanFilter,
  matchesStatusFilter,
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
  mediaFormats?: MediaFormat[];
  searching = true;
  scoreGreaterThan?: number;
  scoreSmallerThan?: number;
  selectedCountries?: MediaCountry[];
  selectedEntryStatuses?: ListEntryStatus[];
  selectedFormats?: MediaFormat[];
  selectedMediaStatuses?: MediaStatus[];

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
    this.mediaFormats = getMediaFormats(this.mediaType);

    this.selectedCountries = this.getStoredFilter<MediaCountry[]>(
      StorageKeys.Country,
      []
    );
    this.selectedFormats = this.getStoredFilter<MediaFormat[]>(
      StorageKeys.Format,
      []
    );
    this.selectedEntryStatuses = this.getStoredFilter<ListEntryStatus[]>(
      StorageKeys.EntryStatus,
      []
    );
    this.selectedMediaStatuses = this.getStoredFilter<MediaStatus[]>(
      StorageKeys.MediaStatus,
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
          this.mediaFormats = getMediaFormatsForListEntries(
            mediaListEntries,
            this.mediaType
          );
          this.listEntryStatuses =
            getMediaStatusesForListEntries(mediaListEntries);
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
          'countries',
          'entryStatuses',
          'formats',
          'mediaStatuses',
          'score',
        ],
        entryStatusOptions: this.listEntryStatuses ?? [],
        formatOptions: this.mediaFormats ?? [],
        mediaType: this.mediaType,
        titleKey: `${this.mediaType.toLowerCase()}.dashboard.recentlyUpdated`,
        selectedFilters: {
          countries: this.selectedCountries ?? [],
          entryStatuses: this.selectedEntryStatuses ?? [],
          formats: this.selectedFormats ?? [],
          mediaStatuses: this.selectedMediaStatuses ?? [],
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
    countries = [],
    entryStatuses = [],
    formats = [],
    mediaStatuses = [],
    scoreGreaterThan,
    scoreSmallerThan,
  }: MediaFilterSelection) {
    this.selectedCountries = countries;
    this.selectedEntryStatuses = entryStatuses;
    this.selectedFormats = formats;
    this.selectedMediaStatuses = mediaStatuses;
    this.scoreGreaterThan = scoreGreaterThan;
    this.processEntries();

    this.setStoredFilter(StorageKeys.Country, countries);
    this.setStoredFilter(StorageKeys.Format, formats);
    this.setStoredFilter(StorageKeys.MediaStatus, mediaStatuses);
    this.setStoredFilter(StorageKeys.ScoreGreaterThan, scoreGreaterThan);
    this.setStoredFilter(StorageKeys.ScoreSmallerThan, scoreGreaterThan);
    this.setStoredFilter(StorageKeys.ScoreSmallerThan, scoreSmallerThan);
    this.setStoredFilter(StorageKeys.EntryStatus, entryStatuses);
  }

  private sortEntries() {
    this.listEntries = (this.listEntries ?? []).sort((a, b) =>
      (a.updatedAt ?? -Infinity) > (b.updatedAt ?? -Infinity) ? -1 : 1
    );
  }

  private filterEntries() {
    this.filteredEntries = (this.listEntries ?? [])?.filter(
      (entry) =>
        matchesCountryFilter(entry, this.selectedCountries) &&
        matchesFormatFilter(entry, this.selectedFormats) &&
        matchesMediaStatusFilter(entry, this.selectedMediaStatuses) &&
        matchesScoreGreaterThanFilter(entry, this.scoreGreaterThan) &&
        matchesScoreSmallerThanFilter(entry, this.scoreSmallerThan) &&
        matchesStatusFilter(entry, this.selectedEntryStatuses)
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
