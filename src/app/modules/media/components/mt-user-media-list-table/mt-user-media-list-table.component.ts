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

import {
  defaultModalOptions,
  pageSizeOptions,
} from '../../../../app.constants';
import { ScrollUtil } from '../../../../utils/generic.util';
import { getSizedCoverImage } from '../../../shared/domain/shared.domain';
import {
  ListEntry,
  ListEntryStatus,
} from '../../../shared/types/anilist/listEntry.types';
import { Media, MediaType } from '../../../shared/types/anilist/media.types';
import { ModalOrigin } from '../../../shared/types/modal.types';
import {
  getMediaProgress,
  getMediaTypeProgressLiteral,
} from '../../domain/media.domain';
import { MtMediaDetailModalComponent } from '../modals/mt-media-detail-modal/mt-media-detail-modal.component';

@Component({
  selector: 'mt-user-media-list-table',
  templateUrl: './mt-user-media-list-table.component.html',
  styleUrls: ['./mt-user-media-list-table.component.scss'],
})
export class MtUserMediaListTableComponent implements AfterViewInit, OnChanges {
  @Input() favouriteIDs: number[];
  @Input() filter?: string;
  @Input() mediaType: MediaType;
  @Input() tableData: ListEntry[];
  @Input() tableStatus: ListEntryStatus;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  readonly getMediaProgress = getMediaProgress;
  readonly getMediaTypeProgressLiteral = getMediaTypeProgressLiteral;
  readonly getSizedCoverImage = getSizedCoverImage;
  pageSizeOptions = pageSizeOptions;

  tableRows: string[];
  dataSource: MatTableDataSource<ListEntry>;

  constructor(private dialog: MatDialog, private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.tableRows = [
      'actions',
      'cover-image',
      'title-romaji',
      'format',
      'start-date',
      'genres',
      'score',
      this.mediaType === MediaType.ANIME ? 'episodes' : 'chapters',
    ];

    // TODO: Fix ExpressionChangedAfterItHasBeenCheckedError
    this.initializeDataSource();
    this.bindChildComponents();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.dataSource && changes.filter) {
      this.dataSource.filter = changes.filter.currentValue;
    }
  }

  onPageChange() {
    ScrollUtil.scrollToRef(this.elementRef);
  }

  openDetailModal(media: Media) {
    this.dialog.open(MtMediaDetailModalComponent, {
      ...defaultModalOptions,
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

      const data = {
        'title-romaji': media.title.romaji.toLowerCase(),
        format: media.format.toLowerCase(),
        'start-date': +media.startDate.year,
        genres: media.genres.length ? media.genres[0] : '',
        score: +listEntry.scoreRaw,
        episodes: undefined,
        chapters: undefined,
      };

      if (this.mediaType === MediaType.ANIME) {
        data.episodes = +getMediaProgress(media);
      } else {
        data.chapters = +getMediaProgress(media);
      }

      return data[property];
    };

    this.dataSource.filterPredicate = (
      listEntry: ListEntry,
      filter: string
    ) => {
      return listEntry.media.title.romaji
        .trim()
        .toLowerCase()
        .includes(filter.trim().toLowerCase());
    };
  }
}
