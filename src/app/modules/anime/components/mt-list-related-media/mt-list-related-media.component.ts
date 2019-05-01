import { Component, ElementRef, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { ScrollUtil } from '../../../../utils/generic.util';
import { AuthStore } from '../../../shared/store/auth.store';
import { Anime } from '../../../shared/types/anilist/media.types';
import { MediaSort } from '../../../shared/types/anilist/mediaSort.types';
import { PageInfo } from '../../../shared/types/anilist/pageInfo.types';
import { AnimeService } from '../../services/anime.service';
import { MtSearchResultsTableComponent } from '../mt-search-results-table/mt-search-results-table.component';

const gridCard = 96;
const gridSpacing = 6;

@Component({
  selector: 'mt-list-related-media',
  templateUrl: './mt-list-related-media.component.html',
  styleUrls: ['./mt-list-related-media.component.scss'],
})
export class MtListRelatedMediaComponent {
  @ViewChild('content', { read: ElementRef }) content: ElementRef;
  @ViewChild(MtSearchResultsTableComponent, { read: ElementRef }) resultsTable: ElementRef;

  relatedMediaIds: number[];
  animeList: Anime[];
  pagination: PageInfo;
  sort: MediaSort;

  searching = true;
  error: Error;

  constructor(private animeService: AnimeService, private authStore: AuthStore) {
    this.animeService
      .getRelatedAnimeMediaIds(this.authStore.getUser())
      .pipe(
        tap(relatedMediaIds => {
          this.relatedMediaIds = relatedMediaIds;
          const rows = Math.floor(this.content.nativeElement.offsetWidth / (gridCard + gridSpacing));
          this.search(0, rows * 4);
        }),
        catchError(error => {
          this.error = error;
          this.searching = false;

          return of();
        })
      )
      .subscribe();
  }

  search(pageIndex?: number, perPage?: number) {
    if (this.resultsTable) {
      ScrollUtil.scrollToRef(this.resultsTable);
    }

    this.searching = true;
    this.error = undefined;

    this.animeService
      .searchAnime(
        {
          sort: this.sort,
          idIn: this.relatedMediaIds,
        },
        {
          pageIndex,
          perPage,
        }
      )
      .pipe(
        tap(response => {
          this.animeList = response.media;
          this.pagination = response.pageInfo;
          this.pagination.pageIndex = response.pageInfo.currentPage - 1;
          this.searching = false;
        }),
        catchError(error => {
          this.error = error;
          this.searching = false;

          return of();
        })
      )
      .subscribe();
  }

  changePage(pageEvent: PageEvent) {
    this.search(pageEvent.pageIndex + 1, pageEvent.pageSize);
  }

  sortBy(mediaSort: MediaSort) {
    this.sort = mediaSort;
    this.search();
  }
}
