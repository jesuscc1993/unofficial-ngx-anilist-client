import { takeUntil, tap } from 'rxjs/operators';

import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { AnimeCommands } from '../../../anime/commands/anime.commands';
import { MangaCommands } from '../../../manga/commands/manga.commands';
import {
  WithObservableOnDestroy,
} from '../../../shared/components/with-observable-on-destroy/with-observable-on-destroy.component';
import { basicMediaSorts, mediaFormats } from '../../../shared/constants/media.constants';
import { ListEntry } from '../../../shared/types/anilist/listEntry.types';
import { MediaFormat, MediaSort, MediaType } from '../../../shared/types/anilist/media.types';
import { MediaCommands } from '../../commands/media.commands.interface';
import {
  getFormatLiteral, getMediaTypePrefixedStorageKey, getSortLiteral, isAnime,
  sortListEntriesByMediaEndDate, sortListEntriesByMediaScore, sortListEntriesByMediaTitle,
} from '../../domain/media.domain';
import { StorageKeys, storageService } from '../../services/storage.service';

@Component({
  selector: 'mt-recently-finished-media',
  templateUrl: './mt-recently-finished-media.component.html',
  styleUrls: ['./mt-recently-finished-media.component.scss'],
})
export class MtRecentlyFinishedMediaComponent
  extends WithObservableOnDestroy
  implements OnInit, OnChanges
{
  @Input() mediaType: MediaType;

  readonly getFormatLiteral = getFormatLiteral;
  readonly getSortLiteral = getSortLiteral;
  readonly isAnime = isAnime;
  readonly mediaSorts = basicMediaSorts;

  filteredEntries: ListEntry[];
  mediaCommands: MediaCommands;
  mediaFormats: MediaFormat[];
  searching = true;
  selectedFormats: MediaFormat[];
  selectedSort: MediaSort;

  private listEntries: ListEntry[];

  constructor(
    private animeCommands: AnimeCommands,
    private mangaCommands: MangaCommands
  ) {
    super();

    this.setFormats = this.setFormats.bind(this);
    this.setSort = this.setSort.bind(this);
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
      .getPendingMedia()
      .pipe(
        tap((mediaListEntries) => {
          this.listEntries = mediaListEntries;
          this.mediaFormats = mediaFormats.filter(
            (format) =>
              !!mediaListEntries.find((entry) => entry.media.format === format)
          );
          this.sortEntries();
          this.searching = false;
        }),
        takeUntil(this.destroyed$)
      )
      .subscribe();

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

  setFormats(selectedFormats: MediaFormat[]) {
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

  setSort(selectedSort: MediaSort) {
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
    this.filteredEntries = this.listEntries.filter((entry) =>
      this.isFormatValid(entry)
    );
  }

  private isFormatValid(entry: ListEntry) {
    if (this.mediaType === MediaType.MANGA || !this.selectedFormats?.length) {
      return true;
    }
    return this.selectedFormats?.includes(entry.media.format);
  }

  private sortEntries() {
    const sort = {
      [MediaSort.END_DATE_DESC]: sortListEntriesByMediaEndDate,
      [MediaSort.SCORE_DESC]: sortListEntriesByMediaScore,
      [MediaSort.TITLE_ROMAJI]: sortListEntriesByMediaTitle,
    }[this.selectedSort];

    this.listEntries = sort(this.listEntries);

    this.filterEntries();
  }
}
