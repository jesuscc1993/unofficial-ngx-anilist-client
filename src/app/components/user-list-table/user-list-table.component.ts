import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ListEntry } from "../../models/anilist/listEntry";

@Component({
  selector: 'app-user-list-table',
  templateUrl: './user-list-table.component.html',
  styleUrls: ['./user-list-table.component.scss']
})
export class UserListTableComponent implements AfterViewInit {
  @Input() tableData: ListEntry[];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  private tableRows: string[] = ['cover-image', 'title', 'format', 'start-date', 'genres', 'score', 'episodes'];
  private dataSource: MatTableDataSource<ListEntry>;

  constructor() {

  }

  ngAfterViewInit(): void {
    // TODO: Fix ExpressionChangedAfterItHasBeenCheckedError
    this.initializeDataSource();
    this.bindChildComponents();
  }

  private initializeDataSource(): void {
    this.dataSource = new MatTableDataSource<ListEntry>(this.tableData);
  }

  private bindChildComponents(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
}
