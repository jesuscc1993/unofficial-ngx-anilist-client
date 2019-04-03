import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatExpansionPanel, PageEvent } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError, takeUntil, tap } from 'rxjs/operators';

import { SearchFilters } from '../../api/anime/anime-api.types';
import { animeSearchUrl } from '../../app.constants';
import {
  MtSearchResultsTableComponent,
} from '../../modules/anime/components/mt-search-results-table/mt-search-results-table.component';
import { getDateScalarFromYear } from '../../modules/anime/domain/anime.domain';
import {
  WithObservableOnDestroy,
} from '../../modules/shared/components/with-observable-on-destroy/with-observable-on-destroy.component';
import { AnimeService } from '../../services/anime.service';
import { AuthService } from '../../services/auth.service';
import { AuthStore } from '../../store/auth.store';
import { mediaFormatValues } from '../../types/anilist/enums/mediaFormats';
import { MediaSort } from '../../types/anilist/enums/mediaSorts';
import { mediaStatusValues } from '../../types/anilist/enums/mediaStatus';
import { OnListOptions } from '../../types/anilist/enums/onListOptions';
import { Anime } from '../../types/anilist/media.types';
import { PageInfo } from '../../types/anilist/pageInfo.types';
import { User } from '../../types/anilist/user.types';
import { GenericUtil } from '../../utils/generic.util';

@Component({
  selector: 'mt-anime-search',
  templateUrl: './anime-search.component.html',
  styleUrls: ['./anime-search.component.scss'],
})
export class AnimeSearchPageComponent extends WithObservableOnDestroy implements OnInit {
  @ViewChild(MatExpansionPanel) expansionPanel: MatExpansionPanel;
  @ViewChild(MtSearchResultsTableComponent, { read: ElementRef }) resultsTable: ElementRef;

  user: User;
  animeList: Anime[];
  searchForm: FormGroup;
  pagination: PageInfo;
  sort: string;
  excludeOnList: boolean;

  mediaGenres: string[];
  mediaFormats = mediaFormatValues;
  mediaStatuses = mediaStatusValues;
  onListOptions = OnListOptions.LIST;
  minYear = 1900;
  maxYear = new Date().getFullYear() + 1;

  searching: boolean;
  noResults: boolean;
  error: Error;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private animeService: AnimeService,
    private authService: AuthService,
    private authStore: AuthStore,
    private formBuilder: FormBuilder
  ) {
    super();

    this.user = this.authStore.getUser();
    this.setupForm();

    this.animeService
      .getAnimeGenres()
      .pipe(tap(mediaGenres => (this.mediaGenres = mediaGenres)))
      .subscribe();

    this.authService.userChange
      .pipe(
        takeUntil(this.destroyed$),
        tap((user: User) => {
          this.user = user;
        })
      )
      .subscribe();
  }

  ngOnInit() {
    const queryParams = this.activatedRoute.snapshot.queryParams;
    const fieldKeys = Object.keys(queryParams);

    if (fieldKeys.length) {
      Object.keys(queryParams).forEach(fieldKey => {
        const field = this.searchForm.controls[fieldKey];
        const value = JSON.parse(queryParams[fieldKey]);

        if (field && GenericUtil.isSet(value)) {
          field.setValue(value);
        }
      });

      this.sort = queryParams.sort ? JSON.parse(queryParams.sort) : this.sort;

      this.expansionPanel.open();
      this.search();
    }
  }

  clearFilters(event?: Event) {
    this.preventDefault(event);
    this.setupForm();
    this.updateQueryParams();
  }

  search(pageIndex?: number, perPage?: number) {
    GenericUtil.scrollToRef(this.resultsTable);
    this.updateQueryParams();

    this.searching = true;
    this.error = undefined;

    const filters = this.searchForm.value;

    let query: SearchFilters = {
      ...filters,
      startDateSmallerThan: filters.startDateSmallerThan && getDateScalarFromYear(filters.startDateSmallerThan),
      startDateGreaterThan: filters.startDateGreaterThan && getDateScalarFromYear(filters.startDateGreaterThan),
      averageScoreGreaterThan: filters.averageScoreGreaterThan && filters.averageScoreGreaterThan * 10,
      averageScoreSmallerThan: filters.averageScoreSmallerThan && filters.averageScoreSmallerThan * 10,
      sort: this.sort,
    };

    this.animeService
      .searchAnime(query, {
        pageIndex,
        perPage,
      })
      .pipe(
        tap(response => {
          this.noResults = response.media.length < 1;
          this.animeList = response.media;
          this.pagination = response.pageInfo;
          this.pagination.pageIndex = response.pageInfo.currentPage - 1;
          this.searching = false;
        }),
        catchError(error => {
          this.error = error;
          this.noResults = false;
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
    this.sort = mediaSort && mediaSort.value;
    this.search();
  }

  private preventDefault(event: Event) {
    if (event) {
      event.preventDefault();
    }
  }

  private setupForm() {
    this.searchForm = this.formBuilder.group({
      search: [''],
      startDateGreaterThan: [undefined, [Validators.min(this.minYear), Validators.max(this.maxYear)]],
      startDateSmallerThan: [undefined, [Validators.min(this.minYear), Validators.max(this.maxYear)]],
      averageScoreGreaterThan: [undefined, [Validators.min(0), Validators.max(10)]],
      averageScoreSmallerThan: [undefined, [Validators.min(0), Validators.max(10)]],
      genreIn: [[]],
      genreNotIn: [[]],
      formatIn: [[]],
      formatNotIn: [[]],
      statusIn: [[]],
      statusNotIn: [[]],
      onList: [undefined],
    });
  }

  private updateQueryParams() {
    const queryParams = {
      sort: JSON.stringify(this.sort),
    };

    const filters = this.searchForm.value;

    Object.keys(filters).forEach(fieldKey => {
      const field = filters[fieldKey];

      if (GenericUtil.isSet(field) && field.length !== 0) {
        queryParams[fieldKey] = JSON.stringify(field);
      }
    });

    this.router.navigate([animeSearchUrl], { queryParams: queryParams });
  }
}
