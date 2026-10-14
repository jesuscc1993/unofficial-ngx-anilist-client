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
  matchesScoreFilter,
  matchesStatusFilter,
} from '../../domain/media.domain';
import { StorageKeys, storageService } from '../../services/storage.service';
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
  selectedCountries?: MediaCountry[];
  selectedFormats?: MediaFormat[];
  selectedMediaStatuses?: MediaStatus[];
  selectedScore?: number;
  selectedStatuses?: ListEntryStatus[];

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

    this.selectedCountries = storageService.getItem<MediaCountry[]>(
      getMediaTypePrefixedStorageKey(
        StorageKeys.RecentlyUpdated.Country,
        this.mediaType
      ),
      []
    );

    this.selectedFormats = storageService.getItem<MediaFormat[]>(
      getMediaTypePrefixedStorageKey(
        StorageKeys.RecentlyUpdated.Format,
        this.mediaType
      ),
      []
    );

    this.selectedStatuses = storageService.getItem<ListEntryStatus[]>(
      getMediaTypePrefixedStorageKey(
        StorageKeys.RecentlyUpdated.Status,
        this.mediaType
      ),
      []
    );
    this.selectedMediaStatuses = storageService.getItem<MediaStatus[]>(
      getMediaTypePrefixedStorageKey(
        StorageKeys.RecentlyUpdated.MediaStatus,
        this.mediaType
      ),
      []
    );
    this.selectedScore = storageService.getItem<number>(
      getMediaTypePrefixedStorageKey(
        StorageKeys.RecentlyUpdated.Score,
        this.mediaType
      )
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
          'formats',
          'entryStatuses',
          'mediaStatuses',
          'score',
        ],
        entryStatusOptions: this.listEntryStatuses ?? [],
        formatOptions: this.mediaFormats ?? [],
        mediaType: this.mediaType,
        titleKey: `${this.mediaType.toLowerCase()}.dashboard.recentlyUpdated`,
        selectedFilters: {
          countries: this.selectedCountries ?? [],
          entryStatuses: this.selectedStatuses ?? [],
          formats: this.selectedFormats ?? [],
          mediaStatuses: this.selectedMediaStatuses ?? [],
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
    entryStatuses = [],
    formats = [],
    mediaStatuses = [],
    score,
  }: MediaFilterSelection) {
    this.selectedCountries = countries;
    this.selectedStatuses = entryStatuses;
    this.selectedFormats = formats;
    this.selectedMediaStatuses = mediaStatuses;
    this.selectedScore = score;
    this.processEntries();

    storageService.setItem(
      getMediaTypePrefixedStorageKey(
        StorageKeys.RecentlyUpdated.Score,
        this.mediaType
      ),
      score
    );
    storageService.setItem(
      getMediaTypePrefixedStorageKey(
        StorageKeys.RecentlyUpdated.Country,
        this.mediaType
      ),
      countries
    );
    storageService.setItem(
      getMediaTypePrefixedStorageKey(
        StorageKeys.RecentlyUpdated.Format,
        this.mediaType
      ),
      formats
    );
    storageService.setItem(
      getMediaTypePrefixedStorageKey(
        StorageKeys.RecentlyUpdated.Status,
        this.mediaType
      ),
      entryStatuses
    );
    storageService.setItem(
      getMediaTypePrefixedStorageKey(
        StorageKeys.RecentlyUpdated.MediaStatus,
        this.mediaType
      ),
      mediaStatuses
    );
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
        matchesScoreFilter(entry, this.selectedScore) &&
        matchesStatusFilter(entry, this.selectedStatuses)
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
