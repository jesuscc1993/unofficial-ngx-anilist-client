import { of } from 'rxjs';
import { catchError, takeUntil, tap } from 'rxjs/operators';

import { Component, Input, OnInit, inject } from '@angular/core';

import { AnimeCommands } from '../../../anime/commands/anime.commands';
import { getAnimeStatusLiteral } from '../../../anime/domain/anime.domain';
import { MangaCommands } from '../../../manga/commands/manga.commands';
import { getMangaStatusLiteral } from '../../../manga/domain/manga.domain';
import { WithObservableOnDestroy } from '../../../shared/components/with-observable-on-destroy/with-observable-on-destroy.component';
import { listEntryStatuses } from '../../../shared/constants/listEntry.constants';
import {
  ListEntry,
  ListEntryStatus,
} from '../../../shared/types/anilist/listEntry.types';
import {
  MediaFormat,
  MediaType,
} from '../../../shared/types/anilist/media.types';
import { MediaCommands } from '../../commands/media.commands.interface';
import {
  getFormatLiteral,
  getMediaFormats,
  getMediaFormatsForListEntries,
  getMediaStatusesForListEntries,
  getMediaTypePrefixedStorageKey,
  isAnime,
} from '../../domain/media.domain';
import { StorageKeys, storageService } from '../../services/storage.service';

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
  private mangaCommands = inject(MangaCommands);

  @Input() mediaType!: MediaType;

  readonly getFormatLiteral = getFormatLiteral;
  readonly getAnimeStatusLiteral = getAnimeStatusLiteral;
  readonly getMangaStatusLiteral = getMangaStatusLiteral;
  readonly isAnime = isAnime;

  mediaCommands!: MediaCommands;

  error?: Error;
  filteredEntries?: ListEntry[];
  listEntryStatuses?: ListEntryStatus[];
  mediaFormats?: MediaFormat[];
  searching = true;
  selectedFormats?: MediaFormat[];
  selectedStatuses?: ListEntryStatus[];

  private listEntries?: ListEntry[];

  constructor() {
    super();

    this.setSelectedFormats = this.setSelectedFormats.bind(this);
    this.setSelectedStatuses = this.setSelectedStatuses.bind(this);
    this.onError = this.onError.bind(this);
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

    this.mediaCommands
      .getListEntries()
      .pipe(
        tap((mediaListEntries) => {
          this.listEntries = mediaListEntries.sort((a, b) =>
            (a.updatedAt ?? -Infinity) > (b.updatedAt ?? -Infinity) ? -1 : 1
          );
          this.listEntryStatuses =
            getMediaStatusesForListEntries(mediaListEntries);
          this.mediaFormats = getMediaFormatsForListEntries(
            mediaListEntries,
            this.mediaType
          );
          this.filterEntries();
          this.searching = false;
        }),
        catchError(this.onError),
        takeUntil(this.destroyed$)
      )
      .subscribe();

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
  }

  setSelectedFormats(selectedFormats: MediaFormat[]) {
    this.selectedFormats = selectedFormats;
    this.filterEntries();

    storageService.setItem(
      getMediaTypePrefixedStorageKey(
        StorageKeys.RecentlyUpdated.Format,
        this.mediaType
      ),
      selectedFormats
    );
  }

  setSelectedStatuses(selectedStatuses: ListEntryStatus[]) {
    this.selectedStatuses = selectedStatuses;
    this.filterEntries();

    storageService.setItem(
      getMediaTypePrefixedStorageKey(
        StorageKeys.RecentlyUpdated.Status,
        this.mediaType
      ),
      selectedStatuses
    );
  }

  private filterEntries() {
    this.filteredEntries = this.listEntries?.filter(
      (entry) => this.isFormatValid(entry) && this.isStatusValid(entry)
    );
  }

  private isFormatValid(entry: ListEntry) {
    if (this.mediaType === MediaType.MANGA || !this.selectedFormats?.length) {
      return true;
    }
    return this.selectedFormats?.includes(entry.media.format);
  }

  private isStatusValid(entry: ListEntry) {
    if (!this.selectedStatuses?.length) {
      return true;
    }
    return this.selectedStatuses?.includes(entry.status);
  }

  private onError(error: Error) {
    this.error = error;
    this.searching = false;

    return of();
  }
}
