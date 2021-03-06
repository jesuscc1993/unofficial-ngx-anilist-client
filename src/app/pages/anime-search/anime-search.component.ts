import { of } from 'rxjs';
import { catchError, takeUntil, tap } from 'rxjs/operators';

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatExpansionPanel } from '@angular/material/expansion';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import {
  animeSearchUrl, integerPattern, scorePattern
} from '../../app.constants';
import { SearchFilters } from '../../modules/anime/api/anime/anime-api.types';
import { AnimeCommands } from '../../modules/anime/commands/anime.commands';
import {
  MtSearchResultsTableComponent
} from '../../modules/anime/components/mt-search-results-table/mt-search-results-table.component';
import { getDateScalarFromYear } from '../../modules/anime/domain/media.domain';
import { AuthCommands } from '../../modules/shared/commands/auth.commands';
import {
  WithObservableOnDestroy
} from '../../modules/shared/components/with-observable-on-destroy/with-observable-on-destroy.component';
import { TitleService } from '../../modules/shared/services/title.service';
import { AuthStore } from '../../modules/shared/store/auth.store';
import { MediaStore } from '../../modules/shared/store/media.store';
import {
  Anime, mediaFormats, mediaStatuses
} from '../../modules/shared/types/anilist/media.types';
import { MediaSort } from '../../modules/shared/types/anilist/mediaSort.types';
import { PageInfo } from '../../modules/shared/types/anilist/pageInfo.types';
import { User } from '../../modules/shared/types/anilist/user.types';

@Component({
  selector: 'mt-anime-search',
  templateUrl: './anime-search.component.html',
  styleUrls: ['./anime-search.component.scss'],
})
export class AnimeSearchPageComponent extends WithObservableOnDestroy implements OnInit {
  @ViewChild(MatExpansionPanel, { static: true }) expansionPanel: MatExpansionPanel;
  @ViewChild(MtSearchResultsTableComponent, { read: ElementRef }) resultsTable: ElementRef;

  user: User;
  animeList: Anime[];
  searchForm: FormGroup;
  pagination: PageInfo;
  sort: MediaSort;
  excludeOnList: boolean;

  mediaGenres: string[];
  mediaFormats = mediaFormats;
  mediaStatuses = mediaStatuses;
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
    private mediaStore: MediaStore,
    private formBuilder: FormBuilder
  ) {
    super();

    this.titleService.setTitle(this.translateService.instant('anime.search.title'));

    this.user = this.authStore.getUser();
    this.setupForm();

    this.animeCommands
      .getAnimeGenres()
      .pipe(
        takeUntil(this.destroyed$),
        tap((mediaGenres) => (this.mediaGenres = mediaGenres))
      )
      .subscribe();

    this.authCommands
      .onUserChange()
      .pipe(
        takeUntil(this.destroyed$),
        tap((user) => (this.user = user))
      )
      .subscribe();

    this.mediaStore
      .changes('animeListEntries')
      .pipe(
        takeUntil(this.destroyed$),
        tap(() => {
          if (this.animeList) {
            this.search();
          }
        })
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
      this.search();
    }
  }

  clearFilters(event?: Event) {
    this.preventDefault(event);
    this.setupForm();
    this.updateQueryParams();
  }

  search(pageIndex?: number, perPage?: number) {
    this.updateQueryParams();

    if (this.resultsTable) {
      // ScrollUtil.scrollToRef(this.resultsTable);
    }

    this.searching = true;
    this.error = undefined;

    const filters = this.searchForm.value;

    const query: SearchFilters = {
      ...filters,
      startDateSmallerThan: filters.startDateSmallerThan && getDateScalarFromYear(filters.startDateSmallerThan),
      startDateGreaterThan: filters.startDateGreaterThan && getDateScalarFromYear(filters.startDateGreaterThan),
      averageScoreGreaterThan: filters.averageScoreGreaterThan && filters.averageScoreGreaterThan * 10,
      averageScoreSmallerThan: filters.averageScoreSmallerThan && filters.averageScoreSmallerThan * 10,
      sort: this.sort,
    };

    this.animeCommands
      .searchAnime(query, {
        pageIndex,
        perPage,
      })
      .pipe(
        takeUntil(this.destroyed$),
        tap((response) => {
          this.animeList = response.media;
          this.pagination = response.pageInfo;
          this.pagination.pageIndex = response.pageInfo.currentPage - 1;
          this.searching = false;
        }),
        catchError((error) => {
          this.error = error;
          this.searching = false;

          return of();
        })
      )
      .subscribe();
  }

  changePage({ pageIndex, pageSize }: PageEvent) {
    this.search(pageIndex + 1, pageSize);
  }

  sortBy(mediaSort: MediaSort) {
    this.sort = mediaSort;
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
      startDateGreaterThan: [undefined, [Validators.pattern(integerPattern), Validators.min(this.minYear)]],
      startDateSmallerThan: [undefined, [Validators.pattern(integerPattern), Validators.min(this.minYear)]],
      averageScoreGreaterThan: [undefined, [Validators.pattern(scorePattern)]],
      averageScoreSmallerThan: [undefined, [Validators.pattern(scorePattern)]],
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
