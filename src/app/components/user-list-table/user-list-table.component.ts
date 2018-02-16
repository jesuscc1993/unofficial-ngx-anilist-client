import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ListEntry } from "../../models/anilist/listEntry";

@Component({
  selector: 'app-user-list-table',
  templateUrl: './user-list-table.component.html',
  styleUrls: ['./user-list-table.component.scss']
})
export class UserListTableComponent implements OnInit, OnChanges {
  @Input() tableData: ListEntry[];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  private tableRows: string[] = ['cover-image', 'title', 'format', 'start-date', 'genres', 'score', 'episodes'];
  private dataSource: MatTableDataSource<ListEntry>;

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
    this.dataSource.paginator = this.paginator;
    this.dataSource.sortingDataAccessor = (listEntry: ListEntry, property: string) => {
      return {
        'title': listEntry.media.title.romaji.toLowerCase(),
        'format': listEntry.media.format.toLowerCase(),
        'start-date': +listEntry.media.startDate.year,
        'genres': listEntry.media.genres.length ? listEntry.media.genres[0] : '',
        'score': +listEntry.scoreRaw,
        'episodes': +listEntry.media.episodes

      }[property];
    };
  }

  private initializeDataSource(): void {
    this.dataSource = new MatTableDataSource<ListEntry>(this.tableData);
  }
}
