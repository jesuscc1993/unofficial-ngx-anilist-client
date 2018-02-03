import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnimeService } from '../../providers/anime.service';
import { PageInfo } from '../../models/anilist/pageInfo';
import { Anime } from '../../models/anilist/anime';
import { PageEvent } from '@angular/material';
import { MediaFormats } from '../../models/anilist/mediaFormats';
import { Query } from '../../models/anilist/query';

@Component({
  selector: 'app-anime-search',
  templateUrl: './anime-search.component.html',
  styleUrls: ['./anime-search.component.scss']
})
export class AnimeSearchComponent implements OnInit {
  searchForm: FormGroup;

  animeList: Anime[];
  pagination: PageInfo;
  mediaFormats: any[] = MediaFormats;

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

    this.animeService.search(query, pageInfo).subscribe((serverResponse: any) => {
      if (this.animeService.isValidResponse(serverResponse)) {
        this.searching = false;

        const response = this.animeService.getResponseData(serverResponse);
        this.noResults = response.media.length < 1;
        this.animeList = response.media;
        this.pagination = response.pageInfo;
      }
    }, () => {
      this.errorGotten = true;
    });
  }

  private changePage(pageEvent: PageEvent): void {
    this.search(pageEvent.pageIndex + 1, pageEvent.pageSize);
  }

}
