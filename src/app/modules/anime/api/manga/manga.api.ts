import { map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AuthStore } from '../../../shared/store/auth.store';
import { ListEntry } from '../../../shared/types/anilist/listEntry.types';
import { MediaType } from '../../../shared/types/anilist/media.types';
import { PageQuery } from '../../../shared/types/anilist/pageInfo.types';
import { User } from '../../../shared/types/anilist/user.types';
import { MediaApi } from '../media/media.api';
import { SearchFilters, ToggleFavouriteMediaResponseDto } from '../media/media.types';
import {
  listFavouriteMangaQuery, mangaListQuery, mangaSearchQuery, toggleFavouriteMangaEntryQuery,
} from './manga.queries';
import { ToggleFavouriteMangaRequest } from './manga.types';

@Injectable()
export class MangaApi extends MediaApi {
  constructor(
    protected httpClient: HttpClient,
    protected authStore: AuthStore
  ) {
    super(httpClient, authStore);
  }

  queryMangaFromIds(
    mediaIds: number[],
    query: SearchFilters,
    pageQuery?: PageQuery
  ) {
    return this.queryMediaFromIds(
      MediaType.MANGA,
      mangaSearchQuery,
      mediaIds,
      query,
      pageQuery
    );
  }

  queryMangaSearch(query: SearchFilters, pageQuery?: PageQuery) {
    return this.queryMediaSearch(MediaType.MANGA, query, pageQuery);
  }

  queryMangaList(user: User) {
    return this.queryMediaList(MediaType.MANGA, mangaListQuery, user);
  }

  queryRelatedMangaMediaIds(user: User) {
    return this.queryRelatedMediaIds(MediaType.MANGA, user);
  }

  queryMangaListFavouriteIDs(
    user: User,
    callback: (favouriteIDs: number[]) => void
  ) {
    this.queryMediaListFavouriteIDs(
      MediaType.MANGA,
      listFavouriteMangaQuery,
      user,
      callback
    );
  }

  toggleMangaFavouriteEntry(listEntry: ListEntry) {
    return this.postGraphQlRequest<
      ToggleFavouriteMediaResponseDto,
      ToggleFavouriteMangaRequest
    >(toggleFavouriteMangaEntryQuery, { mangaId: listEntry.media.id }).pipe(
      map((response) => this.getResponseData(response).ToggleFavourite)
    );
  }
}
