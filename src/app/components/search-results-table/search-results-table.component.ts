import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

import { Anime } from '../../models/anilist/anime';
import { MediaSort } from '../../models/anilist/mediaSorts';

@Component({
  selector: 'app-search-results-table',
  templateUrl: './search-results-table.component.html',
  styleUrls: ['./search-results-table.component.scss']
})
export class SearchResultsTableComponent implements OnInit, OnChanges {
  @Input() tableData: Anime[];
  @Output() onSortChange: EventEmitter<MediaSort> = new EventEmitter<MediaSort>();
  @ViewChild(MatSort) sort: MatSort;

  tableRows: string[] = ['actions', 'cover-image', 'title-romaji', 'format', 'start-date', 'genres', 'score', 'episodes'];
  dataSource: MatTableDataSource<Anime>;

  constructor() {

  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.tableData.currentValue !== changes.tableData.previousValue) {
      this.initializeDataSource();
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  sortBy(sort: any): void {
    this.onSortChange.emit(MediaSort.fromSort(sort));
  }

  private initializeDataSource(): void {
    this.dataSource = new MatTableDataSource<Anime>(this.tableData);
  }
}
