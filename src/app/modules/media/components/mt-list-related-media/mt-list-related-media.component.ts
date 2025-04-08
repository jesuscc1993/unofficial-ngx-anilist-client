import { Observable, of } from 'rxjs';
import { catchError, mergeMap, takeUntil, tap } from 'rxjs/operators';

import {
  Component, ElementRef, HostListener, Input, OnChanges, OnInit, ViewChild,
} from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { AnimeCommands } from '../../../anime/commands/anime.commands';
import { AnimeStore } from '../../../anime/store/anime.store';
import { MangaCommands } from '../../../manga/commands/manga.commands';
import { MangaStore } from '../../../manga/store/manga.store';
import {
  WithObservableOnDestroy,
} from '../../../shared/components/with-observable-on-destroy/with-observable-on-destroy.component';
import {
  basicMediaSorts, mediaFormats, mediaScores,
} from '../../../shared/constants/media.constants';
import {
  Media, MediaFormat, MediaSort, MediaType,
} from '../../../shared/types/anilist/media.types';
import { PageInfo } from '../../../shared/types/anilist/pageInfo.types';
import { MediaCommands } from '../../commands/media.commands.interface';
import {
  getColCount, getFormatLiteral, getMediaTypePrefixedStorageKey, getSortLiteral, isAnime,
} from '../../domain/media.domain';
import { StorageKeys, storageService } from '../../services/storage.service';
import { MediaStore } from '../../store/media.store';

@Component({
  selector: 'mt-list-related-media',
  templateUrl: './mt-list-related-media.component.html',
  styleUrls: ['./mt-list-related-media.component.scss'],
})
export class MtListRelatedMediaComponent
  extends WithObservableOnDestroy
  implements OnInit, OnChanges
{
  @Input() mediaType: MediaType;
  @ViewChild('content', { read: ElementRef, static: true }) content: ElementRef;

  readonly getFormatLiteral = getFormatLiteral;
  readonly getSortLiteral = getSortLiteral;
  readonly isAnime = isAnime;
  readonly mediaSorts = basicMediaSorts;
  readonly mediaFormats = mediaFormats;
  readonly mediaScores = mediaScores;
  readonly rowCount = 5;

  colCount: number;
  enabled: boolean;
  error: Error;
  mediaCommands: MediaCommands;
  mediaList: Media[];
  mediaListEntriesLength: number;
  mediaStore: MediaStore;
  pagination: PageInfo;
  relatedMediaIds: number[];
  searching: boolean;
  selectedFormats: MediaFormat[];
  selectedScore: number;
  selectedSort: MediaSort;

  constructor(
    private animeCommands: AnimeCommands,
    private mangaCommands: MangaCommands,
    private animeStore: AnimeStore,
    private mangaStore: MangaStore
  ) {
    super();

    this.onError = this.onError.bind(this);
    this.setSelectedFormats = this.setSelectedFormats.bind(this);
    this.setSelectedScore = this.setSelectedScore.bind(this);
    this.setSelectedSort = this.setSelectedSort.bind(this);

    this.initializeState();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    const newColCount = getColCount(this.content);

    if (newColCount !== this.colCount) {
      this.colCount = newColCount;

      this.initializeState();
      this.queryData()
        .pipe(catchError(this.onError), takeUntil(this.destroyed$))
        .subscribe();
    }
  }

  ngOnInit() {
    this.initialize();
  }

  ngOnChanges() {
    this.initialize();
  }

  initialize() {
    if (isAnime(this.mediaType)) {
      this.mediaCommands = this.animeCommands;
      this.mediaStore = this.animeStore;
    } else {
      this.mediaCommands = this.mangaCommands;
      this.mediaStore = this.mangaStore;
    }

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
            this.initializeState();
            return this.queryData();
          }

          this.mediaListEntriesLength = mediaListEntries.length;
          return of(undefined);
        }),
        catchError(this.onError),
        takeUntil(this.destroyed$)
      )
      .subscribe();

    this.selectedFormats = storageService.getItem<MediaFormat[]>(
      getMediaTypePrefixedStorageKey(
        StorageKeys.RelatedMedia.Format,
        this.mediaType
      ),
      []
    );

    this.selectedScore = storageService.getItem<number>(
      getMediaTypePrefixedStorageKey(
        StorageKeys.RelatedMedia.Score,
        this.mediaType
      )
    );

    this.selectedSort = storageService.getItem<MediaSort>(
      getMediaTypePrefixedStorageKey(
        StorageKeys.RelatedMedia.Sort,
        this.mediaType
      ),
      MediaSort.END_DATE_DESC
    );
  }

  queryData(): Observable<number[]> {
    return this.enabled
      ? this.mediaCommands.queryRelatedMediaIds().pipe(
          tap((relatedMediaIds) => {
            this.relatedMediaIds = relatedMediaIds;
            this.search(0, this.colCount * this.rowCount);
          })
        )
      : of([]);
  }

  enable() {
    this.enabled = true;
    this.searching = true;

    this.queryData()
      .pipe(catchError(this.onError), takeUntil(this.destroyed$))
      .subscribe();
  }

  setSelectedFormats(selectedFormats: MediaFormat[]) {
    this.selectedFormats = selectedFormats;
    this.search(0, this.pagination.perPage);

    storageService.setItem(
      getMediaTypePrefixedStorageKey(
        StorageKeys.RelatedMedia.Format,
        this.mediaType
      ),
      selectedFormats
    );
  }

  setSelectedSort(selectedSort: MediaSort) {
    this.selectedSort = selectedSort;
    this.search(0, this.pagination.perPage);

    storageService.setItem(
      getMediaTypePrefixedStorageKey(
        StorageKeys.RelatedMedia.Sort,
        this.mediaType
      ),
      selectedSort
    );
  }

  setSelectedScore(score: number) {
    this.selectedScore = score;
    this.search(0, this.pagination.perPage);

    storageService.setItem(
      getMediaTypePrefixedStorageKey(
        StorageKeys.RelatedMedia.Score,
        this.mediaType
      ),
      score
    );
  }

  changePage({ pageIndex, pageSize }: PageEvent) {
    this.search(pageIndex + 1, pageSize);
  }

  getScoreLiteral(score: number) {
    return score ? `> ${score}` : 'media.scoreValues.undefined';
  }

  private initializeState() {
    this.searching = false;
    this.relatedMediaIds = undefined;
    this.pagination = undefined;
    this.error = undefined;
  }

  private search(pageIndex?: number, perPage?: number) {
    if (this.enabled) {
      this.searching = true;
      this.error = undefined;

      this.mediaCommands
        .getMediaFromIds(
          this.relatedMediaIds,
          {
            formatIn: isAnime(this.mediaType)
              ? this.selectedFormats?.length
                ? this.selectedFormats
                : undefined
              : [MediaFormat.MANGA],
            onList: false,
            sort: this.selectedSort,
            averageScoreGreaterThan:
              this.selectedScore && this.selectedScore * 10,
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
  }

  private onError(error: Error) {
    this.error = error;
    this.searching = false;

    return of();
  }
}
