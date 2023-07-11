import { takeUntil, tap } from 'rxjs/operators';

import { Component, Input, OnInit } from '@angular/core';

import { AnimeCommands } from '../../../anime/commands/anime.commands';
import { getAnimeStatusLiteral } from '../../../anime/domain/anime.domain';
import { MangaCommands } from '../../../manga/commands/manga.commands';
import { getMangaStatusLiteral } from '../../../manga/domain/manga.domain';
import { WithObservableOnDestroy } from '../../../shared/components/with-observable-on-destroy/with-observable-on-destroy.component';
import { listEntryStatuses } from '../../../shared/constants/listEntry.constants';
import { mediaFormats } from '../../../shared/constants/media.constants';
import {
  ListEntry,
  ListEntryStatus,
} from '../../../shared/types/anilist/listEntry.types';
import {
  MediaFormat,
  MediaType,
} from '../../../shared/types/anilist/media.types';
import { MediaCommandsInterface } from '../../commands/media.commands.interface';
import { getFormatLiteral } from '../../domain/media.domain';
import { StorageKeys, storageService } from '../../services/storage.service';

@Component({
  selector: 'mt-recently-updated-list-entries',
  templateUrl: './mt-recently-updated-list-entries.component.html',
  styleUrls: ['./mt-recently-updated-list-entries.component.scss'],
})
export class MtRecentlyUpdatedListEntriesComponent
  extends WithObservableOnDestroy
  implements OnInit
{
  @Input() mediaType: MediaType;

  readonly getFormatLiteral = getFormatLiteral;
  readonly getAnimeStatusLiteral = getAnimeStatusLiteral;
  readonly getMangaStatusLiteral = getMangaStatusLiteral;

  filteredEntries: ListEntry[];
  listEntryStatuses: ListEntryStatus[];
  mediaCommands: MediaCommandsInterface;
  mediaFormats: MediaFormat[];
  searching = true;

  selectedStatuses = storageService.getItem<ListEntryStatus[]>(
    StorageKeys.RecentlyUpdated.Status,
    []
  );

  selectedFormats = storageService.getItem<MediaFormat[]>(
    StorageKeys.RecentlyUpdated.Format,
    []
  );

  private listEntries: ListEntry[];

  constructor(
    private animeCommands: AnimeCommands,
    private mangaCommands: MangaCommands
  ) {
    super();

    this.setFormats = this.setFormats.bind(this);
    this.setStatuses = this.setStatuses.bind(this);
  }

  ngOnInit() {
    this.mediaCommands =
      this.mediaType === MediaType.ANIME
        ? this.animeCommands
        : this.mangaCommands;

    this.mediaCommands
      .getListEntries()
      .pipe(
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
        takeUntil(this.destroyed$)
      )
      .subscribe();
  }

  setStatuses(selectedStatuses: ListEntryStatus[]) {
    this.selectedStatuses = selectedStatuses;
    this.filterEntries();
    storageService.setItem(
      StorageKeys.RecentlyUpdated.Status,
      selectedStatuses
    );
  }

  setFormats(selectedFormats: MediaFormat[]) {
    this.selectedFormats = selectedFormats;
    this.filterEntries();
    storageService.setItem(StorageKeys.RecentlyUpdated.Format, selectedFormats);
  }

  private filterEntries() {
    this.filteredEntries =
      this.mediaType === MediaType.ANIME
        ? this.listEntries.filter(
            (entry) =>
              (!this.selectedFormats.length ||
                this.selectedFormats.includes(entry.media.format)) &&
              (!this.selectedStatuses.length ||
                this.selectedStatuses.includes(entry.status))
          )
        : this.listEntries;
  }
}