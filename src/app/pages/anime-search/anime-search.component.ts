import { of } from 'rxjs';
import { catchError, takeUntil, tap } from 'rxjs/operators';

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatExpansionPanel } from '@angular/material/expansion';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { animeSearchUrl, integerPattern, pageSizeOptions } from '../../app.constants';
import { AnimeCommands } from '../../modules/anime/commands/anime.commands';
import { AnimeStore } from '../../modules/anime/store/anime.store';
import { SearchFilters } from '../../modules/media/api/media.types';
import {
  MtSearchResultsTableComponent,
} from '../../modules/media/components/mt-search-results-table/mt-search-results-table.component';
import { getDateScalarFromYear } from '../../modules/media/domain/media.domain';
import { AuthCommands } from '../../modules/shared/commands/auth.commands';
import {
  WithObservableOnDestroy,
} from '../../modules/shared/components/with-observable-on-destroy/with-observable-on-destroy.component';
import {
  mediaCountries, mediaFormats, mediaStatuses,
} from '../../modules/shared/constants/media.constants';
import { TitleService } from '../../modules/shared/services/title.service';
import { AuthStore } from '../../modules/shared/store/auth.store';
import { Media, MediaSort } from '../../modules/shared/types/anilist/media.types';
import { PageInfo } from '../../modules/shared/types/anilist/pageInfo.types';
import { User } from '../../modules/shared/types/anilist/user.types';

@Component({
  selector: 'mt-anime-search',
  templateUrl: './anime-search.component.html',
  styleUrls: ['./anime-search.component.scss'],
})
export class AnimeSearchPageComponent
  extends WithObservableOnDestroy
  implements OnInit
{
  @ViewChild(MatExpansionPanel, { static: true })
  expansionPanel: MatExpansionPanel;
  @ViewChild(MtSearchResultsTableComponent, { read: ElementRef })
  resultsTable: ElementRef;

  user: User;
  mediaList: Media[];
  searchForm: FormGroup;
  pagination: PageInfo;
  sort: MediaSort;
  excludeOnList: boolean;

  mediaGenres: string[];
  mediaCountries = mediaCountries;
  mediaFormats = mediaFormats;
  mediaStatuses = mediaStatuses;
  pageSizeOptions = pageSizeOptions;
  onListOptions = [undefined, true, false];
  minYear = 1900;

  searching: boolean;
  error: Error;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: TitleService,
    private translateService: TranslateService,
    private animeCommands: AnimeCommands,
    private authCommands: AuthCommands,
    private authStore: AuthStore,
    private mediaStore: AnimeStore,
    private formBuilder: FormBuilder
  ) {
    super();

    this.titleService.setTitle(
      this.translateService.instant('anime.search.title')
    );

    this.user = this.authStore.getUser();
    this.setupForm();

    this.animeCommands
      .getAnimeGenres()
      .pipe(
        tap((mediaGenres) => (this.mediaGenres = mediaGenres)),
        takeUntil(this.destroyed$)
      )
      .subscribe();

    this.authCommands
      .onUserChange()
      .pipe(
        tap((user) => (this.user = user)),
        takeUntil(this.destroyed$)
      )
      .subscribe();

    this.mediaStore
      .onListEntriesChanges()
      .pipe(
        tap(() => {
          if (this.mediaList) {
            this.search(undefined, this.pagination?.perPage);
          }
        }),
        takeUntil(this.destroyed$)
      )
      .subscribe();
  }

  ngOnInit() {
    const queryParams = this.activatedRoute.snapshot.queryParams;
    const fieldKeys = Object.keys(queryParams);

    if (fieldKeys.length) {
      Object.keys(queryParams).forEach((fieldKey) => {
        const field = this.searchForm.controls[fieldKey];
        const value = JSON.parse(queryParams[fieldKey]);

        if (field && this.isSet(value)) {
          field.setValue(value);
        }
      });

      this.sort = queryParams.sort ? JSON.parse(queryParams.sort) : this.sort;

      this.expansionPanel.open();
      this.search(undefined, this.pagination?.perPage);
    }
  }

  clearFilters(event?: Event) {
    this.preventDefault(event);
    this.setupForm();
    this.updateQueryParams();
  }

  search(pageIndex?: number, perPage?: number) {
    this.updateQueryParams();

    // if (this.resultsTable) {
    //   ScrollUtil.scrollToRef(this.resultsTable);
    // }

    this.searching = true;
    this.error = undefined;

    const filters = this.searchForm.value;

    const query: SearchFilters = {
      ...filters,
      startDateSmallerThan:
        filters.startDateSmallerThan &&
        getDateScalarFromYear(filters.startDateSmallerThan),
      startDateGreaterThan:
        filters.startDateGreaterThan &&
        getDateScalarFromYear(filters.startDateGreaterThan),
      averageScoreGreaterThan:
        filters.averageScoreGreaterThan && filters.averageScoreGreaterThan * 10,
      averageScoreSmallerThan:
        filters.averageScoreSmallerThan && filters.averageScoreSmallerThan * 10,
      sort: this.sort,
    };

    this.animeCommands
      .searchAnime(query, {
        pageIndex,
        perPage,
      })
      .pipe(
        tap((response) => {
          this.mediaList = response.media;
          this.pagination = response.pageInfo;
          this.pagination.pageIndex = response.pageInfo.currentPage - 1;
          this.searching = false;
        }),
        catchError((error) => {
          this.error = error;
          this.searching = false;

          return of();
        }),
        takeUntil(this.destroyed$)
      )
      .subscribe();
  }

  changePage({ pageIndex, pageSize }: PageEvent) {
    this.search(pageIndex + 1, pageSize);
  }

  sortBy(mediaSort: MediaSort) {
    this.sort = mediaSort;
    this.search(undefined, this.pagination?.perPage);
  }

  private preventDefault(event: Event) {
    if (event) {
      event.preventDefault();
    }
  }

  private setupForm() {
    this.searchForm = this.formBuilder.group({
      averageScoreGreaterThan: [
        undefined,
        [Validators.pattern(integerPattern)],
      ],
      averageScoreSmallerThan: [
        undefined,
        [Validators.pattern(integerPattern)],
      ],
      countryOfOrigin: [[]],
      formatIn: [[]],
      formatNotIn: [[]],
      genreIn: [[]],
      genreNotIn: [[]],
      onList: [undefined],
      search: [''],
      startDateGreaterThan: [
        undefined,
        [Validators.pattern(integerPattern), Validators.min(this.minYear)],
      ],
      startDateSmallerThan: [
        undefined,
        [Validators.pattern(integerPattern), Validators.min(this.minYear)],
      ],
      statusIn: [[]],
      statusNotIn: [[]],
    });
  }

  private updateQueryParams() {
    const queryParams = {
      sort: JSON.stringify(this.sort),
    };

    const filters = this.searchForm.value;

    Object.keys(filters).forEach((fieldKey) => {
      const field = filters[fieldKey];

      if (this.isSet(field)) {
        queryParams[fieldKey] = JSON.stringify(field);
      }
    });

    this.router.navigate([animeSearchUrl], { queryParams });
  }

  private isSet(variable: any): boolean {
    return variable !== undefined && variable !== null && variable.length !== 0;
  }
}
