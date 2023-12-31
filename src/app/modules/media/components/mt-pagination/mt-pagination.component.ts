import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { pageSizeOptions } from '../../../../app.constants';
import { PageInfo } from '../../../shared/types/anilist/pageInfo.types';

@Component({
  selector: 'mt-pagination',
  templateUrl: './mt-pagination.component.html',
  styleUrls: ['./mt-pagination.component.scss'],
})
export class MtPaginationComponent {
  @Input() class?: string;
  @Input() pagination?: PageInfo;
  @Output() changePage: EventEmitter<PageEvent>;

  pageSizeOptions = pageSizeOptions;

  constructor() {
    this.changePage = new EventEmitter<PageEvent>();
  }

  getClass() {
    return `${this.class} ${this.isUncertain() ? 'uncertain' : ''}`;
  }

  getTotal() {
    return this.isUncertain() ? 9999 : 5000;
  }

  private isUncertain() {
    return this.pagination?.total === 5000;
  }
}
