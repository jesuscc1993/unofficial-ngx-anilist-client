import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { Anime } from '../../types/anilist/anime.types';
import { ListEntry } from '../../types/anilist/listEntry.types';
import { GenericUtil } from '../../utils/generic.util';

@Component({
  selector: 'mt-user-list-table',
  templateUrl: './user-list-table.component.html',
  styleUrls: ['./user-list-table.component.scss'],
})
export class UserListTableComponent implements AfterViewInit, OnChanges {
  @Input() tableStatus: string;
  @Input() tableData: ListEntry[];
  @Input() favouriteIDs: number[];
  @Input() filter?: string;
  @Output() onEntryUpdate?: EventEmitter<ListEntry> = new EventEmitter<ListEntry>();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

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
  dataSource: MatTableDataSource<ListEntry>;

  constructor(private elementRef: ElementRef) {}

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

  onUpdate(listEntry?: ListEntry) {
    this.onEntryUpdate.emit(listEntry);
  }

  private initializeDataSource() {
    this.dataSource = new MatTableDataSource<ListEntry>(this.tableData);
  }

  private bindChildComponents() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.dataSource.sortingDataAccessor = (listEntry: ListEntry, property: string) => {
      const anime: Anime = <Anime>listEntry.media;

      return {
        'title-romaji': anime.title.romaji.toLowerCase(),
        format: anime.format.toLowerCase(),
        'start-date': +anime.startDate.year,
        genres: anime.genres.length ? anime.genres[0] : '',
        score: +listEntry.scoreRaw,
        episodes: +anime.episodes,
      }[property];
    };

    this.dataSource.filterPredicate = (listEntry: ListEntry, filter: string) => {
      return (
        listEntry.media.title.romaji
          .trim()
          .toLowerCase()
          .indexOf(filter.trim().toLowerCase()) >= 0
      );
    };
  }

  private onPageChange() {
    GenericUtil.scrollToRef(this.elementRef);
  }
}
