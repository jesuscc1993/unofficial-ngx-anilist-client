import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { AuthStore } from '../../../shared/store/auth.store';
import { MediaStore } from '../../../shared/store/media.store';
import { Anime, MediaFormat, mediaFormats } from '../../../shared/types/anilist/media.types';
import { PageInfo } from '../../../shared/types/anilist/pageInfo.types';
import { AnimeService } from '../../services/anime.service';

const gridCard = 96;
const gridSpacing = 6;

@Component({
  selector: 'mt-list-related-media',
  templateUrl: './mt-list-related-media.component.html',
  styleUrls: ['./mt-list-related-media.component.scss'],
})
export class MtListRelatedMediaComponent implements OnInit {
  @ViewChild('content', { read: ElementRef }) content: ElementRef;

  mediaFormats = mediaFormats;

  rowCount = 4;
  colCount?: number;

  relatedMediaIds: number[];
  animeList: Anime[];
  pagination: PageInfo;
  selectedFormats: MediaFormat[] = [];

  searching = true;
  error: Error;

  constructor(private mediaStore: MediaStore, private animeService: AnimeService, private authStore: AuthStore) {}

  ngOnInit() {
    this.colCount = Math.floor(this.content.nativeElement.offsetWidth / (gridCard + gridSpacing));

    this.animeService
      .getRelatedAnimeMediaIds(this.authStore.getUser())
      .pipe(
        tap(relatedMediaIds => {
          this.relatedMediaIds = relatedMediaIds;
          this.search(0, this.colCount * this.rowCount);
        }),
        catchError(error => {
          this.error = error;
          this.searching = false;

          return of();
        })
      )
      .subscribe();

    // this.mediaStore
    //   .asObservable()
    //   .pipe(
    //     filter(({ animeListEntries }) => !!animeListEntries),
    //     flatMap(() =>
    //       this.animeService.getRelatedAnimeMediaIds(this.authStore.getUser()).pipe(
    //         tap(relatedMediaIds => {
    //           this.relatedMediaIds = relatedMediaIds;
    //           this.search(0, this.colCount * this.rowCount);
    //         })
    //       )
    //     ),
    //     catchError(error => {
    //       this.error = error;
    //       this.searching = false;

    //       return of();
    //     })
    //   )
    //   .subscribe();
  }

  selectedFormatChanged(selectedFormats: MediaFormat[]) {
    this.selectedFormats = selectedFormats;
    this.search(0, this.pagination.perPage);
  }

  search(pageIndex?: number, perPage?: number) {
    this.searching = true;
    this.error = undefined;

    this.animeService
      .searchAnime(
        {
          idIn: this.relatedMediaIds,
          formatIn: this.selectedFormats.length ? this.selectedFormats : undefined,
          sort: 'END_DATE_DESC',
        },
        {
          pageIndex,
          perPage,
        }
      )
      .pipe(
        tap(response => {
          this.animeList = response.media;
          this.pagination = response.pageInfo;
          this.pagination.pageIndex = response.pageInfo.currentPage - 1;
          this.searching = false;
        }),
        catchError(error => {
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
}
