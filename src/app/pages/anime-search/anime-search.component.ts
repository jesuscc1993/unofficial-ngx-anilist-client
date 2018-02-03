import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PageEvent } from '@angular/material';
import { AnimeService } from '../../providers/anime.service';
import { Query } from '../../models/anilist/query';
import { PageInfo } from '../../models/anilist/pageInfo';
import { Anime } from '../../models/anilist/anime';
import { mediaFormats } from '../../models/anilist/mediaFormats';

@Component({
  selector: 'app-anime-search',
  templateUrl: './anime-search.component.html',
  styleUrls: ['./anime-search.component.scss']
})
export class AnimeSearchComponent implements OnInit {
  searchForm: FormGroup;

  animeList: Anime[];
  pagination: PageInfo;
  mediaFormats: any[] = mediaFormats;

  searching: boolean;
  noResults: boolean;
  errorGotten: boolean;

  constructor(
    private animeService: AnimeService,
    private formBuilder: FormBuilder
  ) {
    this.searchForm = this.formBuilder.group({
      search: ['', Validators.required],
      format: ['']
    });
  }

  ngOnInit() {

  }

  private search(page?: number, perPage?: number): void {
    this.searching = true;

    const query: Query = {
      search: this.searchForm.value.search,
      format: this.searchForm.value.format
    };

    const pageInfo: PageInfo = {
      pageIndex: page,
      perPage: perPage
    };

    this.animeService.search(query, pageInfo).subscribe((response: any) => {
      this.noResults = response.media.length < 1;
      this.animeList = response.media;
      this.pagination = response.pageInfo;

    }, () => {
      this.errorGotten = true;

    }, () => {
      this.searching = false;
    });
  }

  private changePage(pageEvent: PageEvent): void {
    this.search(pageEvent.pageIndex + 1, pageEvent.pageSize);
  }

}
