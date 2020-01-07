import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

import { ListEntry } from '../../../shared/types/anilist/listEntry.types';

@Component({
  selector: 'mt-list-entries-grid',
  templateUrl: './mt-list-entries-grid.component.html',
  styleUrls: ['./mt-list-entries-grid.component.scss'],
})
export class MtListEntryGridComponent implements OnChanges {
  @Input() listEntries: ListEntry[];
  @Input() wrapperClass?: string;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  pagination: PageEvent;

  constructor() {
    this.pagination = {
      pageIndex: 0,
      pageSize: 16,
      length: 0,
    };
  }

  ngOnChanges({ listEntries }: SimpleChanges) {
    if (listEntries.currentValue !== listEntries.previousValue) {
      this.pagination = {
        ...this.pagination,
        pageIndex: 0,
        length: listEntries.currentValue.length,
      };
      if (this.paginator) {
        this.paginator.pageIndex = this.pagination.pageIndex;
      }
    }
  }

  changePage(pageEvent: PageEvent) {
    this.pagination = pageEvent;
  }
}
