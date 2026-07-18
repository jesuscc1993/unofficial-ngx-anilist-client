import { takeUntil, tap } from 'rxjs/operators';

import {
  Component,
  inject,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { AnimeCommands } from '../../../anime/commands/anime.commands';
import { getFormattedAnimeDuration } from '../../../anime/domain/anime.domain';
import { MangaCommands } from '../../../manga/commands/manga.commands';
import { WithObservableOnDestroy } from '../../../shared/components/with-observable-on-destroy/with-observable-on-destroy.component';
import { staffRoles } from '../../../shared/constants/media.constants';
import { Media } from '../../../shared/types/anilist/media.types';
import { PageInfo } from '../../../shared/types/anilist/pageInfo.types';
import { MediaCommands } from '../../commands/media.commands';
import {
  getFormattedFuzzyDate,
  getMediaLength,
  getMediaTitle,
  getMediaTypeProgressLiteral,
  getSanitizedMediaDescription,
  getSourceLiteral,
  isAnime,
} from '../../domain/media.domain';

@Component({
  selector: 'mt-media-info',
  templateUrl: './mt-media-info.component.html',
  styleUrls: ['./mt-media-info.component.scss'],
  standalone: false,
})
export class MtMediaInfoComponent
  extends WithObservableOnDestroy
  implements OnInit, OnChanges
{
  private animeCommands = inject(AnimeCommands);
  private mangaCommands = inject(MangaCommands);

  @Input() fullDetail? = true;
  @Input() generalInfoOnly?: boolean;
  @Input() media!: Media;
  @Input() showAsColumns?: boolean;

  readonly staffRoles = staffRoles;

  readonly getFormattedAnimeDuration = getFormattedAnimeDuration;
  readonly getFormattedFuzzyDate = getFormattedFuzzyDate;
  readonly getMediaLength = getMediaLength;
  readonly getMediaTitle = getMediaTitle;
  readonly getMediaTypeProgressLiteral = getMediaTypeProgressLiteral;
  readonly getSourceLiteral = getSourceLiteral;

  mediaCommands!: MediaCommands;

  error?: Error;
  recommendations?: Media[];
  recommendationsPagination?: PageInfo;
  searchingRecommendations?: boolean;

  private readonly recommendationsPerPage = 20;

  ngOnInit(): void {
    this.setMediaCommands();
  }

  ngOnChanges({ media }: SimpleChanges): void {
    if (media && !media.firstChange) {
      this.setMediaCommands();
      this.resetRecommendationsState();
    }
  }

  sanitizeDescription() {
    return getSanitizedMediaDescription(this.media);
  }

  enableRecommendations() {
    this.searchingRecommendations = true;
    this.error = undefined;

    this.mediaCommands
      .queryRecommendationsForMediaId(this.media.id, {
        pageIndex: 1,
        perPage: this.recommendationsPerPage,
      })
      .pipe(
        tap(
          (response) => {
            this.recommendationsPagination = {
              ...response.pageInfo,
              pageIndex: response.pageInfo.currentPage - 1,
            };
            this.recommendations = response.media;
            this.searchingRecommendations = false;
          },
          (error) => {
            this.error = error;
            this.searchingRecommendations = false;
          }
        ),
        takeUntil(this.destroyed$)
      )
      .subscribe();
  }

  changeRecommendationsPage({ pageIndex, pageSize }: PageEvent) {
    this.searchRecommendations(pageIndex + 1, pageSize);
  }

  private setMediaCommands() {
    this.mediaCommands = isAnime(this.media)
      ? this.animeCommands
      : this.mangaCommands;
  }

  private searchRecommendations(pageIndex: number, perPage: number) {
    this.searchingRecommendations = true;

    this.mediaCommands
      .queryRecommendationsForMediaId(this.media.id, { pageIndex, perPage })
      .pipe(
        tap(
          (response) => {
            this.recommendationsPagination = {
              ...response.pageInfo,
              pageIndex: response.pageInfo.currentPage - 1,
            };
            this.recommendations = response.media;
            this.searchingRecommendations = false;
          },
          (error) => {
            this.error = error;
            this.searchingRecommendations = false;
          }
        ),
        takeUntil(this.destroyed$)
      )
      .subscribe();
  }

  private resetRecommendationsState() {
    this.recommendations = undefined;
    this.recommendationsPagination = undefined;
    this.searchingRecommendations = false;
    this.error = undefined;
  }
}
