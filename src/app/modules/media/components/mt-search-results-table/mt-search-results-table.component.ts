import {
  AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { defaultModalOptions } from '../../../../app.constants';
import { getSizedCoverImage } from '../../../shared/domain/shared.domain';
import { Anime, Media, MediaSort, MediaType } from '../../../shared/types/anilist/media.types';
import { ModalOrigin } from '../../../shared/types/modal.types';
import {
  getMediaProgress, getMediaSortFromSort, getMediaTypeProgressLiteral,
} from '../../domain/media.domain';
import {
  MtMediaDetailModalComponent,
} from '../modals/mt-media-detail-modal/mt-media-detail-modal.component';

@Component({
  selector: 'mt-search-results-table',
  templateUrl: './mt-search-results-table.component.html',
  styleUrls: ['./mt-search-results-table.component.scss'],
})
export class MtSearchResultsTableComponent
  implements AfterViewInit, OnInit, OnChanges
{
  @Input() tableData: Anime[];
  @Output() onSortChange: EventEmitter<MediaSort> =
    new EventEmitter<MediaSort>();
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  getSizedCoverImage = getSizedCoverImage;

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

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.tableData.currentValue !== changes.tableData.previousValue) {
      this.initializeDataSource();
    }
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  openDetailModal(media: Media) {
    this.dialog.open(MtMediaDetailModalComponent, {
      ...defaultModalOptions,
      maxWidth: '800px',
      data: {
        media,
        origin: ModalOrigin.View,
      },
    });
  }

  sortBy(sort: Sort) {
    this.onSortChange.emit(getMediaSortFromSort(sort));
  }

  getMediaTypeProgressLiteral(mediaType: MediaType) {
    return getMediaTypeProgressLiteral(mediaType);
  }

  getMediaProgress(media: Media) {
    return getMediaProgress(media);
  }

  private initializeDataSource() {
    this.dataSource = new MatTableDataSource<Anime>(this.tableData);
  }
}
