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
  listFavoriteMangaQuery,
  mangaListQuery,
  mangaSearchQuery,
  toggleFavoriteMangaEntryQuery,
} from './manga.queries';
import { ToggleFavoriteMangaRequest } from './manga.types';

@Injectable()
export class MangaApi extends MediaApi implements MediaApiInterface {
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
      MediaType.MANGA,
      mangaSearchQuery,
      mediaIds,
      query,
      pageQuery
    );
  }

  queryMedia(query: SearchFilters, pageQuery?: PageQuery) {
    return this._queryMedia(MediaType.MANGA, query, pageQuery);
  }

  queryListEntries(user: User) {
    return this._queryListEntries(MediaType.MANGA, mangaListQuery, user);
  }

  queryRelatedMediaIds(user: User) {
    return this._queryRelatedMediaIds(MediaType.MANGA, user);
  }

  queryFavoriteIDs(user: User, callback: (favoriteIDs: number[]) => void) {
    this._queryFavoriteIDs(
      MediaType.MANGA,
      listFavoriteMangaQuery,
      user,
      callback
    );
  }

  toggleFavorite(manga: Media) {
    return this.postGraphQlRequest<
      ToggleFavoriteMediaResponseDto,
      ToggleFavoriteMangaRequest
    >(toggleFavoriteMangaEntryQuery, { mangaId: manga.id }).pipe(
      map((response) => this.getResponseData(response).ToggleFavorite)
    );
  }
}
