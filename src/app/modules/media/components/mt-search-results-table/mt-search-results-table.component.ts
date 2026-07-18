import {
  AfterViewInit,
  Component,
  EventEmitter,
  inject,
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
  Media,
  MediaSort,
  MediaType,
} from '../../../shared/types/anilist/media.types';
import { MediaColumn } from '../../../shared/types/media.types';
import { ModalOrigin } from '../../../shared/types/modal.types';
import {
  getFormattedMediaYearRange,
  getMediaLength,
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
  standalone: false,
})
export class MtSearchResultsTableComponent implements AfterViewInit, OnChanges {
  private dialog = inject(MatDialog);

  @Input() favouriteIDs!: number[];
  @Input() mediaType!: MediaType;
  @Input() tableData!: Media[];

  @Output() onSortChange: EventEmitter<MediaSort>;

  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  readonly getFormattedMediaYearRange = getFormattedMediaYearRange;
  readonly getMediaLength = getMediaLength;
  readonly getMediaTitle = getMediaTitle;
  readonly getMediaTypeProgressLiteral = getMediaTypeProgressLiteral;
  readonly getSizedCoverImage = getSizedCoverImage;

  tableRows = [
    MediaColumn.Actions,
    MediaColumn.CoverImage,
    MediaColumn.TitleRomaji,
    MediaColumn.Format,
    MediaColumn.Date,
    MediaColumn.Score,
    MediaColumn.Episodes,
    MediaColumn.Genres,
  ];
  dataSource?: MatTableDataSource<Media>;

  constructor() {
    this.onSortChange = new EventEmitter<MediaSort>();
  }

  ngOnChanges({ tableData }: SimpleChanges) {
    if (tableData && tableData.currentValue !== tableData.previousValue) {
      this.initializeDataSource();
    }
  }

  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.sort = this.sort;
    }
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
    this.dataSource = new MatTableDataSource<Media>(this.tableData);
  }
}
