import { Component, Input, OnChanges } from '@angular/core';
import { PageEvent } from '@angular/material';

import { ListEntry } from '../../../shared/types/anilist/listEntry.types';

@Component({
  selector: 'mt-list-entries-grid',
  templateUrl: './mt-list-entries-grid.component.html',
  styleUrls: ['./mt-list-entries-grid.component.scss'],
})
export class MtListEntryGridComponent implements OnChanges {
  @Input() listEntries: ListEntry[];
  @Input() wrapperClass?: string;

  protected pagination: PageEvent;

  constructor() {
    this.pagination = {
      pageIndex: 0,
      pageSize: 16,
      length: 0,
    };
  }

  ngOnChanges() {
    if (this.listEntries) {
      this.pagination = {
        ...this.pagination,
        length: this.listEntries.length,
      };
    }
  }

  changePage(pageEvent: PageEvent) {
    this.pagination = pageEvent;
  }
}
