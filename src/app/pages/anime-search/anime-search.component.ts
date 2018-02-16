import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar, PageEvent } from '@angular/material';
import { AnimeService } from '../../providers/anime.service';
import { MediaQuery } from '../../models/anilist/query';
import { PageQuery } from '../../models/anilist/pageInfo';
import { Anime } from '../../models/anilist/anime';
import { mediaFormats } from '../../models/anilist/mediaFormats';

@Component({
  selector: 'app-anime-search',
  templateUrl: './anime-search.component.html',
  styleUrls: ['./anime-search.component.scss']
})
export class AnimeSearchComponent implements OnInit {

  animeList: Anime[];
  searchForm: FormGroup;
  pagination: PageQuery;
  mediaFormats: any[] = mediaFormats;

  searching: boolean;
  noResults: boolean;
  errorGotten: boolean;

  minYear: number = 1900;
  maxYear: number = new Date().getFullYear() + 1;

  constructor(
    private animeService: AnimeService,
    private formBuilder: FormBuilder,
    private matSnackBar: MatSnackBar
  ) {
    this.searchForm = this.formBuilder.group({
      search: [''],
      format: [''],
      startDate_greater: [undefined],
      startDate_lesser: [undefined]
    });
  }

  ngOnInit(): void {

  }

  private search(page?: number, perPage?: number): void {
    this.searching = true;
    this.errorGotten = false;

    let query: MediaQuery = {
      search: this.searchForm.value.search,
      format: this.searchForm.value.format,
      startDate_lesser: this.getDateScalarFromYear(this.searchForm.value.startDate_lesser),
      startDate_greater: this.getDateScalarFromYear(this.searchForm.value.startDate_greater - 1) + 1231
    };

    const pageInfo: PageQuery = {
      pageIndex: page,
      perPage: perPage
    };

    this.animeService.search(query, pageInfo).subscribe((response: any) => {
      this.noResults = response.media.length < 1;
      this.animeList = response.media;
      this.pagination = response.pageInfo;
      this.searching = false;

      this.showSimpleSnack(`${response.pageInfo.total} result(s) found.`);

    }, () => {
      this.errorGotten = true;
      this.noResults = false;
      this.searching = false;

    });
  }

  private getDateScalarFromYear(year: number): number {
    return year * 10000;
  }

  private changePage(pageEvent: PageEvent): void {
    this.search(pageEvent.pageIndex + 1, pageEvent.pageSize);
  }

  private showSimpleSnack(message: string): void {
    this.matSnackBar.open(message, undefined, {
      duration: 1000,
    });
  }

}
