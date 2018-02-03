import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AnimeService } from '../../providers/anime.service';
import { PageInfo } from '../../models/anilist/pageInfo';
import { Anime } from '../../models/anilist/anime';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-anime-search',
  templateUrl: './anime-search.component.html',
  styleUrls: ['./anime-search.component.scss']
})
export class AnimeSearchComponent implements OnInit {
  searchForm: FormGroup;

  animeList: Anime[];
  pagination: PageInfo;

  searching: boolean;
  noResults: boolean;

  constructor(
    private animeService: AnimeService,
    private formBuilder: FormBuilder
  ) {
    this.searchForm = this.formBuilder.group({
      query: new FormControl('')
    });
  }

  ngOnInit() {

  }

  private search(page?: number, pageSize?: number): void {
    this.searching = true;

    this.animeService.search(this.searchForm.value.query, page, pageSize).subscribe((serverResponse: any) => {
      if (this.animeService.isValidResponse(serverResponse)) {
        this.searching = false;

        const response = this.animeService.getResponseData(serverResponse);
        this.animeList = response.media;
        this.noResults = this.animeList.length < 1;
        this.pagination = response.pageInfo;
      }
    });
  }

  private changePage(pageEvent: PageEvent): void {
    this.search(pageEvent.pageIndex + 1, pageEvent.pageSize);
  }

}
