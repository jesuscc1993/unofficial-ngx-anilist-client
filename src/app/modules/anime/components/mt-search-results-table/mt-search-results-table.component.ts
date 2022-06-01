import {
  AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Anime } from '../../../shared/types/anilist/media.types';
import { MediaSort } from '../../../shared/types/anilist/mediaSort.types';
import { getMediaSortFromSort } from '../../domain/media.domain';

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

  tableRows: string[] = [
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

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.tableData.currentValue !== changes.tableData.previousValue) {
      this.initializeDataSource();
    }
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  sortBy(sort: Sort) {
    this.onSortChange.emit(getMediaSortFromSort(sort));
  }

  private initializeDataSource() {
    this.dataSource = new MatTableDataSource<Anime>(this.tableData);
  }
}
