import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { largeModalOptions } from '../../../../app.constants';
import {
  Anime,
  Media,
  MediaSort,
  MediaType,
} from '../../../shared/types/anilist/media.types';
import { ModalOrigin } from '../../../shared/types/modal.types';
import {
  getFormattedMediaYearRange,
  getMediaProgress,
  getMediaSortFromSort,
  getMediaTitle,
  getMediaTypeProgressLiteral,
  getSizedCoverImage,
} from '../../domain/media.domain';
import { MtMediaDetailModalComponent } from '../modals/mt-media-detail-modal/mt-media-detail-modal.component';

@Component({
  selector: 'mt-search-results-table',
  templateUrl: './mt-search-results-table.component.html',
  styleUrls: ['./mt-search-results-table.component.scss'],
})
export class MtSearchResultsTableComponent implements AfterViewInit, OnChanges {
  @Input() mediaType: MediaType;
  @Input() tableData: Anime[];

  @Output() onSortChange: EventEmitter<MediaSort>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  readonly getFormattedMediaYearRange = getFormattedMediaYearRange;
  readonly getMediaProgress = getMediaProgress;
  readonly getMediaTitle = getMediaTitle;
  readonly getMediaTypeProgressLiteral = getMediaTypeProgressLiteral;
  readonly getSizedCoverImage = getSizedCoverImage;

  tableRows = [
    'actions',
    'cover-image',
    'title-romaji',
    'format',
    'start-date',
    'genres',
    'score',
    'episodes',
  ];
  dataSource: MatTableDataSource<Anime>;

  constructor(private dialog: MatDialog) {
    this.onSortChange = new EventEmitter<MediaSort>();
  }

  ngOnChanges({ tableData }: SimpleChanges) {
    if (tableData && tableData.currentValue !== tableData.previousValue) {
      this.initializeDataSource();
    }
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
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

  sortBy(sort: Sort) {
    this.onSortChange.emit(getMediaSortFromSort(sort));
  }

  private initializeDataSource() {
    this.dataSource = new MatTableDataSource<Anime>(this.tableData);
  }
}
