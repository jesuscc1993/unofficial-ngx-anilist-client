import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class MatPaginatorI18n extends MatPaginatorIntl {
  constructor(private translateService: TranslateService) {
    super();

    this.itemsPerPageLabel = this.translateService.instant('matPaginator.itemsPerPageLabel');

    this.nextPageLabel = this.translateService.instant('matPaginator.nextPageLabel');

    this.previousPageLabel = this.translateService.instant('matPaginator.previousPageLabel');

    this.firstPageLabel = this.translateService.instant('matPaginator.firstPageLabel');

    this.lastPageLabel = this.translateService.instant('matPaginator.lastPageLabel');

    this.getRangeLabel = (page: number, pageSize: number, length: number): string => {
      const firstResultIndex = page * pageSize;
      return this.translateService.instant('matPaginator.rangeLabel', {
        firstResult: firstResultIndex + 1,
        lastResult: Math.min(firstResultIndex + pageSize, length),
        totalCount: length,
      });
    };
  }
}
