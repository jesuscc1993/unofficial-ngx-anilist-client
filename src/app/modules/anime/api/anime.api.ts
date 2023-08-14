import { map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MediaApi } from '../../media/api/media.api';
import { MediaApiInterface } from '../../media/api/media.api.interface';
import {
  SearchFilters,
  ToggleFavoriteMediaResponseDto,
} from '../../media/api/media.types';
import { AuthStore } from '../../shared/store/auth.store';
import { Media, MediaType } from '../../shared/types/anilist/media.types';
import { PageQuery } from '../../shared/types/anilist/pageInfo.types';
import { User } from '../../shared/types/anilist/user.types';
import {
  animeListQuery,
  animeSearchQuery,
  listFavoriteAnimeQuery,
  toggleFavoriteAnimeEntryQuery,
} from './anime.queries';
import { ToggleFavoriteAnimeRequest } from './anime.types';

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

  queryFavoriteIDs(user: User, callback: (favoriteIDs: number[]) => void) {
    this._queryFavoriteIDs(
      MediaType.ANIME,
      listFavoriteAnimeQuery,
      user,
      callback
    );
  }

  toggleFavorite(anime: Media) {
    return this.postGraphQlRequest<
      ToggleFavoriteMediaResponseDto,
      ToggleFavoriteAnimeRequest
    >(toggleFavoriteAnimeEntryQuery, { animeId: anime.id }).pipe(
      map((response) => this.getResponseData(response).ToggleFavorite)
    );
  }
}
