import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

import { ListEntry } from '../../../shared/types/anilist/listEntry.types';
import { getColCount } from '../../domain/media.domain';

@Component({
  selector: 'mt-list-entries-grid',
  templateUrl: './mt-list-entries-grid.component.html',
  styleUrls: ['./mt-list-entries-grid.component.scss'],
  standalone: false,
})
export class MtListEntryGridComponent implements OnChanges, AfterViewInit {
  @Input() listEntries: ListEntry[];
  @Input() showStatusBadge?: boolean;
  @Input() wrapperClass?: string;

  @ViewChild('content', { read: ElementRef }) content: ElementRef;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  readonly rowCount = 5;

  colCount: number;
  pagination: PageEvent;

  constructor() {
    this.pagination = {
      pageIndex: 0,
      pageSize: 20,
      length: 0,
    };
  }

  @HostListener('window:resize')
  onResize() {
    const newColCount = getColCount(this.content);

    if (newColCount !== this.colCount) {
      this.colCount = newColCount;
      this.pagination.pageSize = newColCount * this.rowCount;
    }
  }

  ngAfterViewInit() {
    this.onResize();
  }

  ngOnChanges({ listEntries }: SimpleChanges) {
    if (
      listEntries.currentValue &&
      listEntries.currentValue !== listEntries.previousValue
    ) {
      this.pagination = {
        ...this.pagination,
        pageIndex: 0,
        length: listEntries.currentValue.length,
      };
      if (this.paginator) {
        this.paginator.pageIndex = this.pagination.pageIndex;
      }
      this.onResize();
    }
  }

  changePage(pageEvent: PageEvent) {
    this.pagination = pageEvent;
  }
}
