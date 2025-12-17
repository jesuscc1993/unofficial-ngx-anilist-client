import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { largeModalOptions, pageSizeOptions } from '../../../../app.constants';
import { ScrollUtil } from '../../../../utils/generic.util';
import {
  ListEntry,
  ListEntryStatus,
} from '../../../shared/types/anilist/listEntry.types';
import { Media, MediaType } from '../../../shared/types/anilist/media.types';
import { ModalOrigin } from '../../../shared/types/modal.types';
import {
  getFormattedMediaYearRange,
  getMediaProgress,
  getMediaTitle,
  getMediaTypeProgressLiteral,
  getSizedCoverImage,
  isAnime,
} from '../../domain/media.domain';
import { MtMediaDetailModalComponent } from '../modals/mt-media-detail-modal/mt-media-detail-modal.component';

@Component({
  selector: 'mt-user-media-list-table',
  templateUrl: './mt-user-media-list-table.component.html',
  styleUrls: ['./mt-user-media-list-table.component.scss'],
  standalone: false,
})
export class MtUserMediaListTableComponent implements AfterViewInit, OnChanges {
  @Input() favouriteIDs: number[];
  @Input() filter?: string;
  @Input() mediaType: MediaType;
  @Input() tableData: ListEntry[];
  @Input() tableStatus: ListEntryStatus;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  readonly getFormattedMediaYearRange = getFormattedMediaYearRange;
  readonly getMediaProgress = getMediaProgress;
  readonly getMediaTitle = getMediaTitle;
  readonly getMediaTypeProgressLiteral = getMediaTypeProgressLiteral;
  readonly getSizedCoverImage = getSizedCoverImage;
  readonly isAnime = isAnime;

  pageSizeOptions = pageSizeOptions;

  tableRows: string[];
  dataSource: MatTableDataSource<ListEntry>;

  constructor(
    private dialog: MatDialog,
    private elementRef: ElementRef
  ) {}

  ngAfterViewInit() {
    this.tableRows = [
      'actions',
      'cover-image',
      'title-romaji',
      'format',
      'start-date',
      'score',
      isAnime(this.mediaType) ? 'episodes' : 'chapters',
      'genres',
    ];

    // TODO: Fix ExpressionChangedAfterItHasBeenCheckedError
    this.initializeDataSource();
    this.bindChildComponents();
  }

  ngOnChanges({ filter }: SimpleChanges) {
    if (this.dataSource && filter) {
      this.dataSource.filter = filter.currentValue;
    }
  }

  onPageChange() {
    ScrollUtil.scrollToRef(this.elementRef);
  }

  openDetailModal(media: Media) {
    this.dialog.open(MtMediaDetailModalComponent, {
      ...largeModalOptions,
      data: {
        media,
        origin: ModalOrigin.View,
      },
    });
  }

  private initializeDataSource() {
    this.dataSource = new MatTableDataSource<ListEntry>(this.tableData);
  }

  private bindChildComponents() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.dataSource.sortingDataAccessor = (
      listEntry: ListEntry,
      property: string
    ) => {
      const { media } = listEntry;
      switch (property) {
        case 'title-romaji':
          return media.title.romaji?.toLowerCase() ?? '';
        case 'title-english':
          return media.title.english?.toLowerCase() ?? '';
        case 'format':
          return media.format?.toLowerCase() ?? '';
        case 'start-date':
          return media.startDate?.year ?? 0;
        case 'genres':
          return media.genres.length ? media.genres[0] : '';
        case 'score':
          return listEntry.scoreRaw ?? 0;
        case 'episodes':
          return +getMediaProgress(media);
        case 'chapters':
          return +getMediaProgress(media);
        default:
          return '';
      }
    };

    this.dataSource.filterPredicate = (
      listEntry: ListEntry,
      filter: string
    ) => {
      const title = listEntry.media.title;
      return (
        (title.romaji && this.filterByTitle(title.romaji, filter)) ||
        (title.english && this.filterByTitle(title.english, filter))
      );
    };
  }

  private filterByTitle(title: string, filter: string) {
    return title.trim().toLowerCase().includes(filter.trim().toLowerCase());
  }
}
