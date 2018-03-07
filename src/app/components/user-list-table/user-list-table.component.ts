import {
  AfterViewInit, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges,
  ViewChild
} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { ListEntry } from '../../models/anilist/listEntry';
import { Anime } from '../../models/anilist/anime';

@Component({
  selector: 'app-user-list-table',
  templateUrl: './user-list-table.component.html',
  styleUrls: ['./user-list-table.component.scss']
})
export class UserListTableComponent implements AfterViewInit, OnChanges {
  @Input() tableStatus: string;
  @Input() tableData: ListEntry[];
  @Input() favouriteIDs: number[];
  @Input() filter?: string;
  @Output() onEntryUpdate?: EventEmitter<ListEntry> = new EventEmitter<ListEntry>();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  tableRows: string[] = ['actions', 'cover-image', 'title', 'format', 'start-date', 'genres', 'score', 'episodes'];
  dataSource: MatTableDataSource<ListEntry>;

  constructor() {

  }

  ngAfterViewInit(): void {
    // TODO: Fix ExpressionChangedAfterItHasBeenCheckedError
    this.initializeDataSource();
    this.bindChildComponents();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.dataSource && changes.filter) {
      this.dataSource.filter = changes.filter.currentValue;
    }
  }

  onUpdate(listEntry?: ListEntry): void {
    this.onEntryUpdate.emit(listEntry);
  }

  private initializeDataSource(): void {
    this.dataSource = new MatTableDataSource<ListEntry>(this.tableData);
  }

  private bindChildComponents(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.dataSource.sortingDataAccessor = (listEntry: ListEntry, property: string) => {
      const anime: Anime = (<Anime> listEntry.media);

      return {
        'title': anime.title.romaji.toLowerCase(),
        'format': anime.format.toLowerCase(),
        'start-date': +anime.startDate.year,
        'genres': anime.genres.length ? anime.genres[0] : '',
        'score': +listEntry.scoreRaw,
        'episodes': +anime.episodes

      }[property];
    };

    this.dataSource.filterPredicate = (listEntry: ListEntry, filter: string) => {
      return listEntry.media.title.romaji.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) >= 0;
    };
  }
}
