import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, Sort } from '@angular/material';

import { MediaSort } from '../../../../types/anilist/enums/mediaSorts';
import { Anime } from '../../../../types/anilist/media.types';

@Component({
  selector: 'mt-search-results-table',
  templateUrl: './mt-search-results-table.component.html',
  styleUrls: ['./mt-search-results-table.component.scss'],
})
export class MtSearchResultsTableComponent implements OnInit, OnChanges {
  @Input() tableData: Anime[];
  @Output() onSortChange: EventEmitter<MediaSort> = new EventEmitter<MediaSort>();
  @ViewChild(MatSort) sort: MatSort;

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
    this.onSortChange.emit(MediaSort.fromSort(sort));
  }

  private initializeDataSource() {
    this.dataSource = new MatTableDataSource<Anime>(this.tableData);
  }
}
