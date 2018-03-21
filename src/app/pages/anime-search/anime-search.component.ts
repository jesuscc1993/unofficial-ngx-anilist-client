import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatExpansionPanel, PageEvent } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

import { AnimeService } from '../../providers/anime.service';
import { User } from '../../models/anilist/user';
import { MediaQuery } from '../../models/anilist/query';
import { PageQuery } from '../../models/anilist/pageInfo';
import { Anime } from '../../models/anilist/anime';
import { MediaFormat } from '../../models/anilist/mediaFormats';
import { animeSearchUrl } from '../../app.constants';
import { MediaSort } from '../../models/anilist/mediaSorts';

@Component({
  selector: 'app-anime-search',
  templateUrl: './anime-search.component.html',
  styleUrls: ['./anime-search.component.scss']
})
export class AnimeSearchComponent implements OnInit, OnDestroy {
  @ViewChild(MatExpansionPanel) expansionPanel: MatExpansionPanel;

  user: User;
  animeList: Anime[];
  searchForm: FormGroup;
  pagination: PageQuery;
  sort: string;

  mediaFormats: any[] = MediaFormat.LIST;
  mediaGenres: string[];
  minYear: number = 1900;
  maxYear: number = new Date().getFullYear() + 1;

  searching: boolean;
  noResults: boolean;
  errorGotten: boolean;

  private userChangeSubscription: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private animeService: AnimeService,
    private formBuilder: FormBuilder
  ) {
    this.user = this.animeService.getUser();
    this.setupForm();
    this.getGenres();

    this.userChangeSubscription = this.animeService.userChange.subscribe((user: User) => {
      this.user = user;
    });
  }

  ngOnInit(): void {
    const queryParams: any = this.activatedRoute.snapshot.queryParams;
    const fieldKeys: string[] = Object.keys(queryParams);

    if (fieldKeys.length) {
      Object.keys(queryParams).forEach((fieldKey) => {
        const field: any = this.searchForm.controls[fieldKey];
        const value: any = queryParams[fieldKey];

        if (field && value) {
          field.setValue(value);
        }
      });

      this.sort = queryParams.sort;

      this.expansionPanel.open();
      this.search();
    }
  }

  ngOnDestroy(): void {
    this.userChangeSubscription.unsubscribe();
  }

  clearFilters(event?: Event): void {
    this.preventDefault(event);
    this.setupForm();
    this.updateQueryParams();
  }

  sortBy(mediaSort: MediaSort): void {
    this.sort = mediaSort ? mediaSort.value : undefined;
    this.search();
  }

  private preventDefault(event: Event): void {
    if (event) {
      event.preventDefault();
    }
  }

  private setupForm(): void {
    this.searchForm = this.formBuilder.group({
      search: [''],
      startDate_greater: [undefined, [Validators.min(this.minYear), Validators.max(this.maxYear)]],
      startDate_lesser: [undefined, [Validators.min(this.minYear), Validators.max(this.maxYear)]],
      averageScore_greater: [undefined, [Validators.min(0), Validators.max(10)]],
      averageScore_lesser: [undefined, [Validators.min(0), Validators.max(10)]],
      formats: [],
      genres: []
    });
  }

  private search(page?: number, perPage?: number): void {
    this.updateQueryParams();

    this.searching = true;
    this.errorGotten = false;

    let query: MediaQuery = {
      search: this.searchForm.value.search,
      formats: this.searchForm.value.formats,
      genres: this.searchForm.value.genres,
      sort: this.sort
    };

    if (this.searchForm.value.startDate_lesser) {
      query.startDate_lesser = this.getDateScalarFromYear(this.searchForm.value.startDate_lesser);
    }
    if (this.searchForm.value.startDate_greater) {
      query.startDate_greater = this.getDateScalarFromYear(this.searchForm.value.startDate_greater - 1) + 1231;
    }
    if (this.searchForm.value.averageScore_greater) {
      query.averageScore_greater = this.searchForm.value.averageScore_greater * 10;
    }
    if (this.searchForm.value.averageScore_lesser) {
      query.averageScore_lesser = this.searchForm.value.averageScore_lesser * 10;
    }

    const pageInfo: PageQuery = {
      pageIndex: page,
      perPage: perPage
    };

    this.animeService.search(query, pageInfo).subscribe((response: any) => {
      this.noResults = response.media.length < 1;
      this.animeList = response.media;
      this.pagination = response.pageInfo;
      this.searching = false;

    }, () => {
      this.errorGotten = true;
      this.noResults = false;
      this.searching = false;
    });
  }

  private getGenres(): void {
    this.animeService.getGenres().subscribe((mediaGenres) => {
      this.mediaGenres = mediaGenres;
    });
  }

  private getDateScalarFromYear(year: number): number {
    return year * 10000;
  }

  private updateQueryParams(): void {
    const queryParams: any = {
      sort: this.sort
    };

    Object.keys(this.searchForm.value).forEach((fieldKey) => {
      const field: any = this.searchForm.value[fieldKey];

      if (field && (typeof field !== 'object' && (typeof field !== 'string' || field.length > 0))) {
        queryParams[fieldKey] = field;
      }
    });

    this.router.navigate([animeSearchUrl], { queryParams: queryParams });
  }

  private changePage(pageEvent: PageEvent): void {
    this.search(pageEvent.pageIndex + 1, pageEvent.pageSize);
  }

}
