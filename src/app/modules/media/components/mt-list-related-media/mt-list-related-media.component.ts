import { Observable, of } from 'rxjs';
import { catchError, mergeMap, takeUntil, tap } from 'rxjs/operators';

import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  inject,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';

import { largeModalOptions } from '../../../../app.constants';
import { AnimeCommands } from '../../../anime/commands/anime.commands';
import { AnimeStore } from '../../../anime/store/anime.store';
import { MangaCommands } from '../../../manga/commands/manga.commands';
import { MangaStore } from '../../../manga/store/manga.store';
import { WithObservableOnDestroy } from '../../../shared/components/with-observable-on-destroy/with-observable-on-destroy.component';
import { basicMediaSorts } from '../../../shared/constants/media.constants';
import {
  Media,
  MediaFormat,
  MediaSort,
  MediaType,
} from '../../../shared/types/anilist/media.types';
import { PageInfo } from '../../../shared/types/anilist/pageInfo.types';
import { MediaCommands } from '../../commands/media.commands.interface';
import {
  getColCount,
  getMediaFormats,
  getMediaTypePrefixedStorageKey,
  getSortLiteral,
  isAnime,
} from '../../domain/media.domain';
import { StorageKeys, storageService } from '../../services/storage.service';
import { MediaStore } from '../../store/media.store';
import {
  MediaFilterSelection,
  MtMediaFiltersComponent,
} from '../modals/mt-media-filters/mt-media-filters.component';

@Component({
  selector: 'mt-list-related-media',
  templateUrl: './mt-list-related-media.component.html',
  styleUrls: ['./mt-list-related-media.component.scss'],
  standalone: false,
})
export class MtListRelatedMediaComponent
  extends WithObservableOnDestroy
  implements OnInit
{
  private animeCommands = inject(AnimeCommands);
  private animeStore = inject(AnimeStore);
  private changeDetectorRef = inject(ChangeDetectorRef);
  private dialog = inject(MatDialog);
  private mangaCommands = inject(MangaCommands);
  private mangaStore = inject(MangaStore);

  @Input() mediaType!: MediaType;
  @Input() preload!: boolean;

  @ViewChild('content', { read: ElementRef, static: true })
  content!: ElementRef;

  readonly isAnime = isAnime;
  readonly defaultAnimeFormats?: MediaFormat[] = undefined;
  readonly defaultMangaFormats?: MediaFormat[] = [MediaFormat.MANGA];
  readonly getSortLiteral = getSortLiteral;
  readonly mediaSorts = basicMediaSorts;
  readonly rowCount = 5;

  mediaCommands!: MediaCommands;
  mediaStore!: MediaStore;

  colCount: number;
  error?: Error;
  mediaFormats?: MediaFormat[];
  mediaList?: Media[];
  mediaListEntriesLength?: number;
  pagination?: PageInfo;
  relatedMediaIds?: number[];
  searching?: boolean;
  selectedFormats?: MediaFormat[];
  selectedScore?: number;
  selectedSort?: MediaSort;
  started?: boolean;

  constructor() {
    super();

    this.colCount = 0;

    this.initializeState();
  }

  @HostListener('window:resize')
  onResize() {
    const newColCount = getColCount(this.content);
    if (newColCount && newColCount !== this.colCount) {
      this.colCount = newColCount;

      this.initializeState();
      this.queryData()
        .pipe(
          catchError((error) => this.onError(error)),
          tap(() => this.changeDetectorRef.markForCheck()),
          takeUntil(this.destroyed$)
        )
        .subscribe();
    }
  }

  ngOnInit() {
    if (isAnime(this.mediaType)) {
      this.mediaCommands = this.animeCommands;
      this.mediaStore = this.animeStore;
    } else {
      this.mediaCommands = this.mangaCommands;
      this.mediaStore = this.mangaStore;
    }

    this.initialize();
  }

  initialize() {
    this.mediaFormats = getMediaFormats(this.mediaType);

    this.selectedFormats = this.getStoredFilter<MediaFormat[]>(
      StorageKeys.RelatedMedia.Format,
      []
    );
    this.selectedScore = this.getStoredFilter<number>(
      StorageKeys.RelatedMedia.Score
    );
    this.selectedSort = this.getStoredFilter<MediaSort>(
      StorageKeys.RelatedMedia.Sort,
      MediaSort.END_DATE_DESC
    );

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
        catchError((error) => this.onError(error)),
        tap(() => this.changeDetectorRef.markForCheck()),
        takeUntil(this.destroyed$)
      )
      .subscribe();
  }

  queryData(): Observable<number[]> {
    return this.started
      ? this.mediaCommands.queryRelatedMediaIds().pipe(
          tap((relatedMediaIds) => {
            this.relatedMediaIds = relatedMediaIds;
            this.search(0, this.colCount * this.rowCount);
          })
        )
      : of([]);
  }

  enable() {
    this.searching = true;
    this.started = true;

    this.queryData()
      .pipe(
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
        availableFilters: ['formats', 'score'],
        formatOptions: this.mediaFormats ?? [],
        mediaType: this.mediaType,
        titleKey: `${this.mediaType.toLowerCase()}.dashboard.relatedMedia`,
        selectedFilters: {
          formats: this.selectedFormats ?? [],
          score: this.selectedScore,
        },
      },
    });

    dialogRef.componentInstance.onSubmit.subscribe((filters) => {
      this.applyFilters(filters);
    });
  }

  changePage({ pageIndex, pageSize }: PageEvent) {
    this.search(pageIndex + 1, pageSize);
  }

  setSelectedSort = (selectedSort: MediaSort) => {
    this.selectedSort = selectedSort;
    this.search(0, this.pagination?.perPage);

    this.setStoredFilter(StorageKeys.RelatedMedia.Sort, selectedSort);
  };

  private initializeState() {
    this.error = undefined;
    this.pagination = undefined;
    this.relatedMediaIds = undefined;
    this.searching = this.preload ?? false;
    this.started = this.preload ?? false;
  }

  private search(pageIndex = 0, perPage = this.pagination?.perPage || 0) {
    if (this.relatedMediaIds) {
      this.searching = true;
      this.error = undefined;

      this.mediaCommands
        .getMediaFromIds(
          this.relatedMediaIds,
          {
            formatIn: this.selectedFormats?.length
              ? this.selectedFormats
              : isAnime(this.mediaType)
                ? this.defaultAnimeFormats
                : this.defaultMangaFormats,
            onList: false,
            sort: this.selectedSort,
            averageScoreGreaterThan: this.selectedScore,
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
          catchError((error) => this.onError(error)),
          tap(() => this.changeDetectorRef.markForCheck()),
          takeUntil(this.destroyed$)
        )
        .subscribe();
    }
  }

  private setStoredFilter<T>(key: string, value: T): void {
    storageService.setItem(
      getMediaTypePrefixedStorageKey(key, this.mediaType),
      value
    );
  }

  private getStoredFilter<T>(key: string, fallback?: T): T | undefined {
    return storageService.getItem<T>(
      getMediaTypePrefixedStorageKey(key, this.mediaType),
      fallback
    );
  }

  private applyFilters({ formats = [], score }: MediaFilterSelection) {
    this.selectedFormats = formats;
    this.selectedScore = score;
    this.search(0, this.pagination?.perPage);

    this.setStoredFilter(StorageKeys.RelatedMedia.Format, formats);
    this.setStoredFilter(StorageKeys.RelatedMedia.Score, score);
  }

  private onError(error: Error) {
    this.error = error;
    this.searching = false;

    return of();
  }
}
