import { of } from 'rxjs';
import { catchError, mergeMap, takeUntil, tap } from 'rxjs/operators';

import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { AnimeCommands } from '../../../anime/commands/anime.commands';
import { AnimeStore } from '../../../anime/store/anime.store';
import { MangaCommands } from '../../../manga/commands/manga.commands';
import { MangaStore } from '../../../manga/store/manga.store';
import { WithObservableOnDestroy } from '../../../shared/components/with-observable-on-destroy/with-observable-on-destroy.component';
import {
  basicMediaSorts,
  mediaFormats,
} from '../../../shared/constants/media.constants';
import {
  Media,
  MediaFormat,
  MediaSort,
  MediaType,
} from '../../../shared/types/anilist/media.types';
import { PageInfo } from '../../../shared/types/anilist/pageInfo.types';
import { MediaCommandsInterface } from '../../commands/media.commands.interface';
import { getFormatLiteral, getSortLiteral } from '../../domain/media.domain';
import { StorageKeys, storageService } from '../../services/storage.service';
import { MediaStore } from '../../store/media.store';

const gridCard = 96;
const gridSpacing = 6;

@Component({
  selector: 'mt-list-related-media',
  templateUrl: './mt-list-related-media.component.html',
  styleUrls: ['./mt-list-related-media.component.scss'],
})
export class MtListRelatedMediaComponent
  extends WithObservableOnDestroy
  implements OnInit
{
  @Input() mediaType: MediaType;
  @ViewChild('content', { read: ElementRef, static: true }) content: ElementRef;

  readonly getFormatLiteral = getFormatLiteral;
  readonly getSortLiteral = getSortLiteral;
  readonly mediaSorts = basicMediaSorts;
  readonly mediaFormats = mediaFormats;
  readonly rowCount = 4;

  colCount?: number;

  relatedMediaIds: number[];
  mediaCommands: MediaCommandsInterface;
  mediaStore: MediaStore;
  mediaList: Media[];
  pagination: PageInfo;

  selectedFormats = storageService.getItem<MediaFormat[]>(
    StorageKeys.RelatedMedia.Format,
    []
  );

  selectedSort = storageService.getItem<MediaSort>(
    StorageKeys.RelatedMedia.Sort,
    MediaSort.END_DATE_DESC
  );

  mediaListEntriesLength: number;
  searching: boolean;
  error: Error;

  constructor(
    private animeCommands: AnimeCommands,
    private mangaCommands: MangaCommands,
    private animeStore: AnimeStore,
    private mangaStore: MangaStore
  ) {
    super();

    this.onError = this.onError.bind(this);
    this.setFormats = this.setFormats.bind(this);
    this.setSort = this.setSort.bind(this);

    this.initialize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    const newColCount = Math.floor(
      this.content.nativeElement.offsetWidth / (gridCard + gridSpacing)
    );

    if (newColCount !== this.colCount) {
      this.colCount = Math.floor(
        this.content.nativeElement.offsetWidth / (gridCard + gridSpacing)
      );

      this.initialize();
      this.queryData()
        .pipe(catchError(this.onError), takeUntil(this.destroyed$))
        .subscribe();
    }
  }

  ngOnInit() {
    this.mediaCommands =
      this.mediaType === MediaType.ANIME
        ? this.animeCommands
        : this.mangaCommands;

    this.mediaStore =
      this.mediaType === MediaType.ANIME ? this.animeStore : this.mangaStore;

    this.onResize();

    this.mediaStore
      .onListEntriesChanges()
      .pipe(
        mergeMap((mediaListEntries) => {
          // check this.mediaListEntriesLength is set to prevent reloading when the list is first loaded
          if (
            this.mediaListEntriesLength &&
            this.mediaListEntriesLength !== mediaListEntries.length
          ) {
            this.mediaListEntriesLength = mediaListEntries.length;
            this.initialize();
            return this.queryData();
          }

          this.mediaListEntriesLength = mediaListEntries.length;
          return of(undefined);
        }),
        catchError(this.onError),
        takeUntil(this.destroyed$)
      )
      .subscribe();
  }

  queryData() {
    return this.mediaCommands.queryRelatedMediaIds().pipe(
      tap((relatedMediaIds) => {
        this.relatedMediaIds = relatedMediaIds;
        this.search(0, this.colCount * this.rowCount);
      })
    );
  }

  setSort(selectedSort: MediaSort) {
    this.selectedSort = selectedSort;
    this.search(0, this.pagination.perPage);
    storageService.setItem(StorageKeys.RelatedMedia.Sort, selectedSort);
  }

  setFormats(selectedFormats: MediaFormat[]) {
    this.selectedFormats = selectedFormats;
    this.search(0, this.pagination.perPage);
    storageService.setItem(StorageKeys.RelatedMedia.Format, selectedFormats);
  }

  changePage({ pageIndex, pageSize }: PageEvent) {
    this.search(pageIndex + 1, pageSize);
  }

  private initialize() {
    this.searching = true;
    this.relatedMediaIds = undefined;
    this.pagination = undefined;
    this.error = undefined;
  }

  private search(pageIndex?: number, perPage?: number) {
    this.searching = true;
    this.error = undefined;

    this.mediaCommands
      .getMediaFromIds(
        this.relatedMediaIds,
        {
          formatIn:
            this.mediaType === MediaType.ANIME
              ? this.selectedFormats.length
                ? this.selectedFormats
                : undefined
              : [MediaFormat.MANGA],
          onList: false,
          sort: this.selectedSort,
        },
        {
          pageIndex,
          perPage,
        }
      )
      .pipe(
        tap((response) => {
          this.mediaList = response.media;
          this.pagination = response.pageInfo;
          this.pagination.pageIndex = response.pageInfo.currentPage - 1;
          this.searching = false;
        }),
        catchError(this.onError),
        takeUntil(this.destroyed$)
      )
      .subscribe();
  }

  private onError(error: Error) {
    this.error = error;
    this.searching = false;

    return of();
  }
}
