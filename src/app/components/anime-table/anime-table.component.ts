import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Anime } from '../../models/anilist/anime';

@Component({
  selector: 'app-anime-table',
  templateUrl: './anime-table.component.html',
  styleUrls: ['./anime-table.component.scss']
})
export class AnimeTableComponent implements OnInit, OnChanges {
  @Input() tableData: Anime[];
  @ViewChild(MatSort) sort: MatSort;

  tableRows: string[] = ['cover-image', 'title', 'start-date', 'genres', 'mean-score', 'episodes'];
  dataSource: MatTableDataSource<Anime>;

  constructor() {

  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.tableData.currentValue !== changes.tableData.previousValue) {
      this.initializeDataSource();
    }
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  private initializeDataSource(): void {
    this.dataSource = new MatTableDataSource<Anime>(this.tableData);
  }
}
