import { of } from 'rxjs';
import { catchError, takeUntil, tap } from 'rxjs/operators';

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MatExpansionPanel } from '@angular/material/expansion';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';

import {
  integerPattern,
  minMediaStartYear,
  pageSizeOptions,
} from '../../../../app.constants';
import { ScrollUtil } from '../../../../utils/generic.util';
import { SearchFilters } from '../../../media/api/media.types';
import { MtSearchResultsTableComponent } from '../../../media/components/mt-search-results-table/mt-search-results-table.component';
import { getDateScalarFromYear } from '../../../media/domain/media.domain';
import { AuthCommands } from '../../../shared/commands/auth.commands';
import { WithObservableOnDestroy } from '../../../shared/components/with-observable-on-destroy/with-observable-on-destroy.component';
import {
  mediaCountries,
  mediaStatuses,
} from '../../../shared/constants/media.constants';
import { mangaSearchUrl } from '../../../shared/constants/navigation.constants';
import { TitleService } from '../../../shared/services/title.service';
import { AuthStore } from '../../../shared/store/auth.store';
import {
  Media,
  MediaFormat,
  MediaSort,
  MediaType,
} from '../../../shared/types/anilist/media.types';
import { PageInfo } from '../../../shared/types/anilist/pageInfo.types';
import { User } from '../../../shared/types/anilist/user.types';
import { MangaCommands } from '../../commands/manga.commands';
import { MangaStore } from '../../store/manga.store';

@Component({
  selector: 'mt-manga-search',
  templateUrl: './manga-search.component.html',
  styleUrls: ['./manga-search.component.scss'],
})
export class MangaSearchPageComponent
  extends WithObservableOnDestroy
  implements OnInit
{
  @ViewChild(MatExpansionPanel, { static: true })
  expansionPanel: MatExpansionPanel;
  @ViewChild(MtSearchResultsTableComponent, { read: ElementRef })
  resultsTable: ElementRef;

  user: User;
  mediaList: Media[];
  searchForm: UntypedFormGroup;
  pagination: PageInfo;
  sort: MediaSort;
  excludeOnList: boolean;

  mediaGenres: string[];
  mediaCountries = mediaCountries;
  mediaStatuses = mediaStatuses;
  mediaType = MediaType.MANGA;
  minMediaStartYear = minMediaStartYear;
  pageSizeOptions = pageSizeOptions;
  onListOptions = [undefined, true, false];

  searching: boolean;
  error: Error;

  private resultsId = 'results';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: TitleService,
    private mangaCommands: MangaCommands,
    private authCommands: AuthCommands,
    private authStore: AuthStore,
    private mediaStore: MangaStore,
    private formBuilder: UntypedFormBuilder
  ) {
    super();

    this.titleService.setTranslatedTitle('manga.search.title');

    this.user = this.authStore.getUser();
    this.setupForm();

    this.mangaCommands
      .queryGenres()
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

  search(pageIndex = 0, perPage = this.pagination?.perPage) {
    this.updateQueryParams();

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

    this.mangaCommands
      .queryMedia(query, {
        pageIndex,
        perPage,
      })
      .pipe(
        tap((response) => {
          this.mediaList = response.media;
          this.pagination = response.pageInfo;
          this.pagination.pageIndex = response.pageInfo.currentPage - 1;
          this.searching = false;

          setTimeout(() => {
            ScrollUtil.scrollIntoView(document.getElementById(this.resultsId));
          });
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
      formatIn: [[MediaFormat.MANGA]],
      genreIn: [[]],
      genreNotIn: [[]],
      onList: [undefined],
      search: [''],
      startDateGreaterThan: [
        undefined,
        [
          Validators.pattern(integerPattern),
          Validators.min(this.minMediaStartYear),
        ],
      ],
      startDateSmallerThan: [
        undefined,
        [
          Validators.pattern(integerPattern),
          Validators.min(this.minMediaStartYear),
        ],
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

    this.router.navigate([mangaSearchUrl], { queryParams });
  }

  private isSet(variable: any): boolean {
    return variable !== undefined && variable !== null && variable.length !== 0;
  }
}
