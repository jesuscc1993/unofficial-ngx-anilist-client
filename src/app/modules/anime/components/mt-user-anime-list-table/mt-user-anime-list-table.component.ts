import {
  AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { defaultModalOptions, pageSizeOptions } from '../../../../app.constants';
import { ScrollUtil } from '../../../../utils/generic.util';
import { getSizedCoverImage } from '../../../shared/domain/shared.domain';
import { ListEntry, ListEntryStatus } from '../../../shared/types/anilist/listEntry.types';
import { Anime, Media } from '../../../shared/types/anilist/media.types';
import { ModalOrigin } from '../../../shared/types/modal.types';
import {
  MtMediaDetailModalComponent,
} from '../modals/mt-media-detail-modal/mt-media-detail-modal.component';

@Component({
  selector: 'mt-user-anime-list-table',
  templateUrl: './mt-user-anime-list-table.component.html',
  styleUrls: ['./mt-user-anime-list-table.component.scss'],
})
export class MtUserAnimeListTableComponent implements AfterViewInit, OnChanges {
  @Input() tableStatus: ListEntryStatus;
  @Input() tableData: ListEntry[];
  @Input() favouriteIDs: number[];
  @Input() filter?: string;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  getSizedCoverImage = getSizedCoverImage;
  pageSizeOptions = pageSizeOptions;

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
  dataSource: MatTableDataSource<ListEntry>;

  constructor(private dialog: MatDialog, private elementRef: ElementRef) {}

  ngAfterViewInit() {
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
      maxWidth: '800px',
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
      const anime = listEntry.media as Anime;

      return {
        'title-romaji': anime.title.romaji.toLowerCase(),
        format: anime.format.toLowerCase(),
        'start-date': +anime.startDate.year,
        genres: anime.genres.length ? anime.genres[0] : '',
        score: +listEntry.scoreRaw,
        episodes: +anime.episodes,
      }[property];
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
