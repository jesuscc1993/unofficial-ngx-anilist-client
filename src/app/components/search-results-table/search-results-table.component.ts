import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

import { Anime } from '../../models/anilist/anime';

@Component({
  selector: 'app-search-results-table',
  templateUrl: './search-results-table.component.html',
  styleUrls: ['./search-results-table.component.scss']
})
export class SearchResultsTableComponent implements OnInit, OnChanges {
  @Input() tableData: Anime[];
  @ViewChild(MatSort) sort: MatSort;

  tableRows: string[] = ['cover-image', 'title', 'format', 'start-date', 'genres', 'mean-score', 'episodes'];
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

  private initializeDataSource(): void {
    this.dataSource = new MatTableDataSource<Anime>(this.tableData);
  }
}
