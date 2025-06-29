import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { lazyPageSizeOptions, pageSizeOptions } from '../../../../app.constants';
import { PageInfo } from '../../../shared/types/anilist/pageInfo.types';

@Component({
  selector: 'mt-pagination',
  templateUrl: './mt-pagination.component.html',
  styleUrls: ['./mt-pagination.component.scss'],
})
export class MtPaginationComponent implements OnInit {
  @Input() class?: string;
  @Input() lazy?: boolean;
  @Input() pagination?: PageInfo;

  @Output() changePage: EventEmitter<PageEvent>;

  pageSizeOptions: number[];

  constructor() {
    this.changePage = new EventEmitter<PageEvent>();
  }

  ngOnInit(): void {
    this.pageSizeOptions = this.lazy ? lazyPageSizeOptions : pageSizeOptions;
  }

  getClass() {
    return `${this.class} ${this.isUncertain() ? 'uncertain' : ''}`;
  }

  getTotal() {
    return this.isUncertain() ? 9999 : this.pagination?.total;
  }

  private isUncertain() {
    return this.pagination?.total === 5000;
  }
}
