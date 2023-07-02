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
  animeListQuery, animeSearchQuery, listFavouriteAnimeQuery, toggleFavouriteAnimeEntryQuery,
} from './anime.queries';
import { ToggleFavouriteAnimeRequest } from './anime.types';

@Injectable()
export class AnimeApi extends MediaApi {
  constructor(
    protected httpClient: HttpClient,
    protected authStore: AuthStore
  ) {
    super(httpClient, authStore);
  }

  queryAnimeFromIds(
    mediaIds: number[],
    query: SearchFilters,
    pageQuery?: PageQuery
  ) {
    return this.queryMediaFromIds(
      MediaType.ANIME,
      animeSearchQuery,
      mediaIds,
      query,
      pageQuery
    );
  }

  queryAnimeSearch(query: SearchFilters, pageQuery?: PageQuery) {
    return this.queryMediaSearch(MediaType.ANIME, query, pageQuery);
  }

  queryAnimeList(user: User) {
    return this.queryMediaList(MediaType.ANIME, animeListQuery, user);
  }

  queryRelatedAnimeMediaIds(user: User) {
    return this.queryRelatedMediaIds(MediaType.ANIME, user);
  }

  queryAnimeListFavouriteIDs(
    user: User,
    callback: (favouriteIDs: number[]) => void
  ) {
    this.queryMediaListFavouriteIDs(
      MediaType.ANIME,
      listFavouriteAnimeQuery,
      user,
      callback
    );
  }

  toggleAnimeFavouriteEntry(listEntry: ListEntry) {
    return this.postGraphQlRequest<
      ToggleFavouriteMediaResponseDto,
      ToggleFavouriteAnimeRequest
    >(toggleFavouriteAnimeEntryQuery, { animeId: listEntry.media.id }).pipe(
      map((response) => this.getResponseData(response).ToggleFavourite)
    );
  }
}
