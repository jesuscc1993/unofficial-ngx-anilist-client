import { of } from 'rxjs';
import { catchError, takeUntil, tap } from 'rxjs/operators';

import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatExpansionPanel } from '@angular/material/expansion';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';

import { integerPattern, minMediaStartYear, pageSizeOptions } from '../../../../app.constants';
import { ScrollUtil } from '../../../../utils/generic.util';
import { AnimeCommands } from '../../../anime/commands/anime.commands';
import { animeFormats } from '../../../anime/constants/anime.constants';
import { AnimeStore } from '../../../anime/store/anime.store';
import { MangaCommands } from '../../../manga/commands/manga.commands';
import { mangaFormats } from '../../../manga/constants/manga.constants';
import { AuthCommands } from '../../../shared/commands/auth.commands';
import {
  WithObservableOnDestroy,
} from '../../../shared/components/with-observable-on-destroy/with-observable-on-destroy.component';
import { mediaCountries, mediaStatuses } from '../../../shared/constants/media.constants';
import { AuthStore } from '../../../shared/store/auth.store';
import {
  Media, MediaFormat, MediaSort, MediaType,
} from '../../../shared/types/anilist/media.types';
import { PageInfo } from '../../../shared/types/anilist/pageInfo.types';
import { User } from '../../../shared/types/anilist/user.types';
import { SearchFilters } from '../../api/media.types';
import { MediaCommands } from '../../commands/media.commands';
import { getDateScalarFromYear, isAnime } from '../../domain/media.domain';
import {
  MtSearchResultsTableComponent,
} from '../mt-search-results-table/mt-search-results-table.component';

@Component({
  selector: 'mt-media-search',
  templateUrl: './mt-media-search.component.html',
  styleUrls: ['./mt-media-search.component.scss'],
})
export class MtMediaSearchComponent
  extends WithObservableOnDestroy
  implements OnInit
{
  @Input() mediaType: MediaType;

  @ViewChild(MatExpansionPanel, { static: true })
  expansionPanel: MatExpansionPanel;
  @ViewChild(MtSearchResultsTableComponent, { read: ElementRef })
  resultsTable: ElementRef;

  mediaFormats: MediaFormat[];
  mediaList: Media[];
  pagination: PageInfo;
  searchForm: UntypedFormGroup;
  sort: MediaSort;
  user: User;

  mediaCommands: MediaCommands;
  mediaGenres: string[];
  mediaCountries = mediaCountries;
  mediaStatuses = mediaStatuses;
  minMediaStartYear = minMediaStartYear;
  pageSizeOptions = pageSizeOptions;
  onListOptions = [undefined, true, false];

  searching: boolean;
  error: Error;

  private resultsId = 'results';

  constructor(
    private activatedRoute: ActivatedRoute,
    private animeCommands: AnimeCommands,
    private authCommands: AuthCommands,
    private authStore: AuthStore,
    private formBuilder: UntypedFormBuilder,
    private mangaCommands: MangaCommands,
    private mediaStore: AnimeStore,
    private router: Router
  ) {
    super();
  }

  ngOnInit() {
    if (isAnime(this.mediaType)) {
      this.mediaCommands = this.animeCommands;
      this.mediaFormats = animeFormats;
    } else {
      this.mediaCommands = this.mangaCommands;
      this.mediaFormats = mangaFormats;
    }

    this.user = this.authStore.getUser();
    this.setupForm();

    this.mediaCommands
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

    this.mediaCommands
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
      formatIn: [[]],
      formatNotIn: [[]],
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

    this.router.navigate([], { relativeTo: this.activatedRoute, queryParams });
  }

  private isSet(variable: any): boolean {
    return variable !== undefined && variable !== null && variable.length !== 0;
  }
}
