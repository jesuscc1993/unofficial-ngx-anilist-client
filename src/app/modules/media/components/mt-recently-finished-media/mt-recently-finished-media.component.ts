import { takeUntil, tap } from 'rxjs/operators';

import { Component, Input, OnInit } from '@angular/core';

import { AnimeCommands } from '../../../anime/commands/anime.commands';
import { MangaCommands } from '../../../manga/commands/manga.commands';
import { WithObservableOnDestroy } from '../../../shared/components/with-observable-on-destroy/with-observable-on-destroy.component';
import {
  basicMediaSorts,
  mediaFormats,
} from '../../../shared/constants/media.constants';
import { ListEntry } from '../../../shared/types/anilist/listEntry.types';
import {
  MediaFormat,
  MediaSort,
  MediaType,
} from '../../../shared/types/anilist/media.types';
import { MediaCommandsInterface } from '../../commands/media.commands.interface';
import {
  getFormatLiteral,
  getSortLiteral,
  sortListEntriesByMediaEndDate,
  sortListEntriesByMediaScore,
  sortListEntriesByMediaTitle,
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

  readonly getFormatLiteral = getFormatLiteral;
  readonly getSortLiteral = getSortLiteral;
  readonly mediaSorts = basicMediaSorts;

  filteredEntries: ListEntry[];
  mediaCommands: MediaCommandsInterface;
  mediaFormats: MediaFormat[];
  searching = true;

  selectedFormats = storageService.getItem<MediaFormat[]>(
    StorageKeys.RecentlyFinished.Format,
    []
  );

  selectedSort = storageService.getItem<MediaSort>(
    StorageKeys.RecentlyFinished.Sort,
    MediaSort.END_DATE_DESC
  );

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
    this.mediaCommands =
      this.mediaType === MediaType.ANIME
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
  }

  setSort(selectedSort: MediaSort) {
    this.selectedSort = selectedSort;
    this.sortEntries();
    storageService.setItem(StorageKeys.RecentlyFinished.Sort, selectedSort);
  }

  setFormats(selectedFormats: MediaFormat[]) {
    this.selectedFormats = selectedFormats;
    this.filterEntries();
    storageService.setItem(
      StorageKeys.RecentlyFinished.Format,
      selectedFormats
    );
  }

  private filterEntries() {
    this.filteredEntries =
      this.mediaType === MediaType.ANIME && this.selectedFormats.length
        ? this.listEntries.filter((entry) =>
            this.selectedFormats.includes(entry.media.format)
          )
        : this.listEntries;
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
