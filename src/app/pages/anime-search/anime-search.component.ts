import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatExpansionPanel, PageEvent } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { animeSearchUrl } from '../../app.constants';
import { SearchResultsTableComponent } from '../../components/search-results-table/search-results-table.component';
import { AnimeService } from '../../services/anime.service';
import { AuthService } from '../../services/auth.service';
import { AuthStore } from '../../store/auth.store';
import { Anime } from '../../types/anilist/anime.types';
import { MediaFormat } from '../../types/anilist/enums/mediaFormats';
import { MediaSort } from '../../types/anilist/enums/mediaSorts';
import { MediaStatus } from '../../types/anilist/enums/mediaStatus';
import { OnListOptions } from '../../types/anilist/enums/onListOptions';
import { PageQuery } from '../../types/anilist/pageInfo.types';
import { MediaQuery } from '../../types/anilist/query.types';
import { User } from '../../types/anilist/user.types';
import { GenericUtil } from '../../utils/generic.util';

@Component({
  selector: 'app-anime-search',
  templateUrl: './anime-search.component.html',
  styleUrls: ['./anime-search.component.scss']
})
export class AnimeSearchComponent implements OnInit, OnDestroy {
  @ViewChild(MatExpansionPanel) expansionPanel: MatExpansionPanel;
  @ViewChild(SearchResultsTableComponent, { read: ElementRef }) resultsTable: ElementRef;

  user: User;
  animeList: Anime[];
  searchForm: FormGroup;
  pagination: PageQuery;
  sort: string;
  excludeOnList: boolean;

  mediaGenres: string[];
  mediaFormats = MediaFormat.LIST;
  mediaStatuses = MediaStatus.LIST;
  onListOptions = OnListOptions.LIST;
  minYear = 1900;
  maxYear = new Date().getFullYear() + 1;

  searching: boolean;
  noResults: boolean;
  error: Error;

  private userChangeSubscription: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private animeService: AnimeService,
    private authService: AuthService,
    private authStore: AuthStore,
    private formBuilder: FormBuilder
  ) {
    this.user = this.authStore.getUser();
    this.setupForm();
    this.getGenres();

    this.userChangeSubscription = this.authService.userChange.subscribe((user: User) => {
      this.user = user;
    });
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

  ngOnDestroy() {
    this.userChangeSubscription.unsubscribe();
  }

  clearFilters(event?: Event) {
    this.preventDefault(event);
    this.setupForm();
    this.updateQueryParams();
  }

  sortBy(mediaSort: MediaSort) {
    this.sort = mediaSort ? mediaSort.value : undefined;
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
      startDate_greater: [undefined, [Validators.min(this.minYear), Validators.max(this.maxYear)]],
      startDate_lesser: [undefined, [Validators.min(this.minYear), Validators.max(this.maxYear)]],
      averageScore_greater: [undefined, [Validators.min(0), Validators.max(10)]],
      averageScore_lesser: [undefined, [Validators.min(0), Validators.max(10)]],
      genre_in: [[]],
      genre_not_in: [[]],
      format_in: [[]],
      format_not_in: [[]],
      status_in: [[]],
      status_not_in: [[]],
      onList: [undefined]
    });
  }

  private search(page?: number, perPage?: number) {
    GenericUtil.scrollToRef(this.resultsTable);
    this.updateQueryParams();

    this.searching = true;
    this.error = undefined;

    const filters = this.searchForm.value;

    let query: MediaQuery = {
      search: filters.search,
      genre_in: filters.genre_in,
      genre_not_in: filters.genre_not_in,
      format_in: filters.format_in,
      format_not_in: filters.format_not_in,
      status_in: filters.status_in,
      status_not_in: filters.status_not_in,
      onList: filters.onList,
      sort: this.sort
    };

    if (filters.startDate_lesser) {
      query.startDate_lesser = this.getDateScalarFromYear(filters.startDate_lesser);
    }
    if (filters.startDate_greater) {
      query.startDate_greater = this.getDateScalarFromYear(filters.startDate_greater - 1) + 1231;
    }
    if (filters.averageScore_greater) {
      query.averageScore_greater = filters.averageScore_greater * 10;
    }
    if (filters.averageScore_lesser) {
      query.averageScore_lesser = filters.averageScore_lesser * 10;
    }

    const pageInfo: PageQuery = {
      pageIndex: page,
      perPage: perPage
    };

    this.animeService.searchAnime(query, pageInfo).subscribe(
      response => {
        this.noResults = response.media.length < 1;
        this.animeList = response.media;
        this.pagination = response.pageInfo;
        this.pagination.pageIndex = response.pageInfo.currentPage - 1;
        this.searching = false;
      },
      error => {
        this.error = error;
        this.noResults = false;
        this.searching = false;
      }
    );
  }

  private getGenres() {
    this.animeService.getAnimeGenres().subscribe(mediaGenres => {
      this.mediaGenres = mediaGenres;
    });
  }

  private getDateScalarFromYear(year: number): number {
    return year * 10000;
  }

  private updateQueryParams() {
    const queryParams = {
      sort: JSON.stringify(this.sort)
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

  private changePage(pageEvent: PageEvent) {
    this.search(pageEvent.pageIndex + 1, pageEvent.pageSize);
  }
}
