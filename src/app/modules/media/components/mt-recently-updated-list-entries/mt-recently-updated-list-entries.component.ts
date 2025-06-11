import { of } from 'rxjs';
import { catchError, takeUntil, tap, timeout } from 'rxjs/operators';

import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { loadTimeout } from '../../../../app.constants';
import { AnimeCommands } from '../../../anime/commands/anime.commands';
import { getAnimeStatusLiteral } from '../../../anime/domain/anime.domain';
import { MangaCommands } from '../../../manga/commands/manga.commands';
import { getMangaStatusLiteral } from '../../../manga/domain/manga.domain';
import {
  WithObservableOnDestroy,
} from '../../../shared/components/with-observable-on-destroy/with-observable-on-destroy.component';
import { listEntryStatuses } from '../../../shared/constants/listEntry.constants';
import { mediaFormats } from '../../../shared/constants/media.constants';
import { ListEntry, ListEntryStatus } from '../../../shared/types/anilist/listEntry.types';
import { MediaFormat, MediaType } from '../../../shared/types/anilist/media.types';
import { MediaCommands } from '../../commands/media.commands.interface';
import {
  getFormatLiteral, getMediaTypePrefixedStorageKey, isAnime,
} from '../../domain/media.domain';
import { StorageKeys, storageService } from '../../services/storage.service';

@Component({
  selector: 'mt-recently-updated-list-entries',
  templateUrl: './mt-recently-updated-list-entries.component.html',
  styleUrls: ['./mt-recently-updated-list-entries.component.scss'],
})
export class MtRecentlyUpdatedListEntriesComponent
  extends WithObservableOnDestroy
  implements OnInit, OnChanges
{
  @Input() mediaType: MediaType;

  readonly getFormatLiteral = getFormatLiteral;
  readonly getAnimeStatusLiteral = getAnimeStatusLiteral;
  readonly getMangaStatusLiteral = getMangaStatusLiteral;
  readonly isAnime = isAnime;

  error: Error;
  filteredEntries: ListEntry[];
  listEntryStatuses: ListEntryStatus[];
  mediaCommands: MediaCommands;
  mediaFormats: MediaFormat[];
  searching = true;
  selectedFormats: MediaFormat[];
  selectedStatuses: ListEntryStatus[];

  private listEntries: ListEntry[];

  constructor(
    private animeCommands: AnimeCommands,
    private mangaCommands: MangaCommands
  ) {
    super();

    this.setSelectedFormats = this.setSelectedFormats.bind(this);
    this.setSelectedStatuses = this.setSelectedStatuses.bind(this);
    this.onError = this.onError.bind(this);
  }

  ngOnInit() {
    this.initialize();
  }

  ngOnChanges() {
    this.initialize();
  }

  initialize() {
    this.mediaCommands = isAnime(this.mediaType)
      ? this.animeCommands
      : this.mangaCommands;

    this.mediaCommands
      .getListEntries()
      .pipe(
        timeout(loadTimeout),
        tap((mediaListEntries) => {
          this.listEntries = mediaListEntries.sort((a, b) =>
            a.updatedAt > b.updatedAt ? -1 : 1
          );
          this.listEntryStatuses = listEntryStatuses.filter(
            (status) =>
              !!mediaListEntries.find((entry) => entry.status === status)
          );
          this.mediaFormats = mediaFormats.filter(
            (format) =>
              !!mediaListEntries.find((entry) => entry.media.format === format)
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
    this.filteredEntries = this.listEntries.filter(
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
