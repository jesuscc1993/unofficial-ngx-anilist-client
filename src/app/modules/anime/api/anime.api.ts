import { map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MediaApi } from '../../media/api/media.api';
import { MediaApiInterface } from '../../media/api/media.api.interface';
import { SearchFilters, ToggleFavouriteMediaResponseDto } from '../../media/api/media.types';
import { AuthStore } from '../../shared/store/auth.store';
import { Media, MediaType } from '../../shared/types/anilist/media.types';
import { PageQuery } from '../../shared/types/anilist/pageInfo.types';
import { User } from '../../shared/types/anilist/user.types';
import { animeListQuery, animeSearchQuery, toggleFavouriteAnimeEntryQuery } from './anime.queries';
import { ToggleFavouriteAnimeRequest } from './anime.types';

@Injectable()
export class AnimeApi extends MediaApi implements MediaApiInterface {
  constructor(
    protected httpClient: HttpClient,
    protected authStore: AuthStore
  ) {
    super(httpClient, authStore);
  }

  queryMediaFromIds(
    mediaIds: number[],
    query: SearchFilters,
    pageQuery?: PageQuery
  ) {
    return this._queryMediaFromIds(
      MediaType.ANIME,
      animeSearchQuery,
      mediaIds,
      query,
      pageQuery
    );
  }

  queryMedia(query: SearchFilters, pageQuery?: PageQuery) {
    return this._queryMedia(MediaType.ANIME, query, pageQuery);
  }

  queryListEntries(user: User) {
    return this._queryListEntries(MediaType.ANIME, animeListQuery, user);
  }

  queryRelatedMediaIds(user: User) {
    return this._queryRelatedMediaIds(MediaType.ANIME, user);
  }

  queryFavouriteIDs(user: User) {
    return this._queryFavouriteIDs(MediaType.ANIME, user);
  }

  toggleFavourite(anime: Media) {
    return this.postGraphQlRequest<
      ToggleFavouriteMediaResponseDto,
      ToggleFavouriteAnimeRequest
    >(toggleFavouriteAnimeEntryQuery, { animeId: anime.id }).pipe(
      map((response) => this.getResponseData(response).ToggleFavourite)
    );
  }
}
