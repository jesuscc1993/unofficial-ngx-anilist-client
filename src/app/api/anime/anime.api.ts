import 'rxjs/add/operator/map';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { AuthStore } from '../../store/auth.store';
import { MediaSort } from '../../types/anilist/enums/mediaSorts';
import { ListEntry, ListEntryStatus } from '../../types/anilist/listEntry.types';
import { Media } from '../../types/anilist/media.types';
import { PageQuery } from '../../types/anilist/pageInfo.types';
import { User } from '../../types/anilist/user.types';
import { AniListApi } from '../api';
import {
  deleteListEntryQuery,
  finishedAiringMediaQuery,
  genresQuery,
  listFavouritesQuery,
  listMediaIdsQuery,
  listQuery,
  relatedMediaQuery,
  saveListEntryQuery,
  searchQuery,
  toggleFavouriteEntryQuery,
  updatedEntriesQuery,
} from './anime-api.queries';
import {
  DeleteListEntryDto,
  DeleteListEntryRequest,
  FavouriteMediaDto,
  GenreCollectionDto,
  ListEntriesPageDto,
  ListMediaDto,
  ListMediaIdsDto,
  MediaFilters,
  MediaPageDto,
  PagedMediaFilters,
  PagedSearchFilters,
  SaveListEntryDto,
  SaveListEntryRequest,
  SearchFilters,
  SearchMediaDto,
  ToggleFavouriteMediaRequest,
  ToggleFavouriteMediaResponseDto as ToggleFavouriteMediaDto,
} from './anime-api.types';

@Injectable()
export class AnimeApi extends AniListApi {
  constructor(protected httpClient: HttpClient, protected authStore: AuthStore) {
    super(httpClient, authStore);
  }

  public queryAnimeGenres() {
    return this.postGraphQlRequest<GenreCollectionDto>(genresQuery).map(
      response => this.getResponseData(response).GenreCollection
    );
  }

  public queryAnimeSearch(query: SearchFilters, pageInfo?: PageQuery) {
    return this.postGraphQlRequest<SearchMediaDto, PagedSearchFilters>(searchQuery, {
      ...query,
      ...{
        mediaType: 'ANIME',
        adultContent: query.adultContent || false,
        sort: query.sort || MediaSort.TITLE_ROMAJI,

        page: pageInfo ? (pageInfo.pageIndex >= 1 ? pageInfo.pageIndex : 1) : 1,
        perPage: pageInfo ? pageInfo.perPage || 10 : 1,
      },
    }).map(response => this.getResponseData(response).Page);
  }

  public queryAnimeList(user: User) {
    return this.postGraphQlRequest<ListMediaDto, MediaFilters>(listQuery, {
      mediaType: 'ANIME',
      userId: user.id,
      sort: MediaSort.SCORE_DESC,
    }).map(response => {
      let listEntriesByStatus: { [Status in ListEntryStatus]?: ListEntry[] } = {};

      const listMediaDto = this.getResponseData(response);
      if (listMediaDto) {
        listMediaDto.MediaListCollection.lists.forEach(list => {
          const status = list.entries[0].status;

          list.entries.forEach(listEntry => {
            listEntriesByStatus[status] = [...(listEntriesByStatus[status] || []), listEntry];
          });
        });
      }

      return listEntriesByStatus;
    });
  }

  public queryAnimeListMediaIdsByStatus(user: User) {
    return this.postGraphQlRequest<ListMediaIdsDto, MediaFilters>(listMediaIdsQuery, {
      mediaType: 'ANIME',
      userId: user.id,
    }).map(response => {
      let listMediaIdsByStatus: { [Status in ListEntryStatus]?: number[] } = {};

      const listMediaDto = this.getResponseData(response);
      if (listMediaDto) {
        listMediaDto.MediaListCollection.lists.forEach(list => {
          const status = list.entries[0].status;

          list.entries.forEach(listEntry => {
            listMediaIdsByStatus[status] = [...(listMediaIdsByStatus[status] || []), listEntry.media.id];
          });
        });
      }

      return listMediaIdsByStatus;
    });
  }

  public queryRecentlyUpdatedAnime(user: User, pageInfo?: PageQuery) {
    return this.postGraphQlRequest<ListEntriesPageDto, PagedMediaFilters>(updatedEntriesQuery, {
      mediaType: 'ANIME',
      userId: user.id,
      sort: MediaSort.UPDATED_TIME_DESC,

      page: pageInfo ? (pageInfo.pageIndex >= 1 ? pageInfo.pageIndex : 1) : 1,
      perPage: pageInfo ? pageInfo.perPage || 10 : 1,
    }).map(response => this.getResponseData(response).Page);
  }

  public queryRecentlyFinishedAiringAnime(query: MediaFilters, pageInfo?: PageQuery) {
    return this.postGraphQlRequest<MediaPageDto, PagedMediaFilters>(finishedAiringMediaQuery, {
      ...query,
      ...{
        mediaType: 'ANIME',
        status: 'FINISHED',
        sort: 'END_DATE_DESC',
        onList: true,

        page: pageInfo ? (pageInfo.pageIndex >= 1 ? pageInfo.pageIndex : 1) : 1,
        perPage: pageInfo ? pageInfo.perPage || 10 : 1,
      },
    }).map(response => this.getResponseData(response).Page);
  }

  public queryRelatedAnimeMedia(user: User) {
    return this.postGraphQlRequest<ListMediaDto, MediaFilters>(relatedMediaQuery, {
      mediaType: 'ANIME',
      userId: user.id,
    }).map(response => {
      let mediaList: Media[] = [];

      const listMediaDto = this.getResponseData(response);
      if (listMediaDto) {
        listMediaDto.MediaListCollection.lists.forEach(list => {
          list.entries.forEach(listEntry => {
            mediaList = [...mediaList, listEntry.media];
          });
        });
      }

      return mediaList;
    });
  }

  public queryAnimeListFavouriteIDs(user: User, callback: (favouriteIDs: number[]) => void) {
    this.queryFavouriteIdsResultsPage(
      {
        userId: user.id,
        page: 0,
      },
      [],
      callback
    );
  }

  private queryFavouriteIdsResultsPage(
    options: { userId: number; page: number },
    favouriteIds: number[],
    callback: (favouriteIds: number[]) => void
  ) {
    return this.postGraphQlRequest<FavouriteMediaDto, PagedSearchFilters>(listFavouritesQuery, options)
      .pipe(
        tap(response => {
          const responseData = this.getResponseData(response);
          if (responseData && responseData.User && responseData.User.favourites && responseData.User.favourites.anime) {
            const favouritesData = responseData.User.favourites.anime;
            favouriteIds = [...favouriteIds, ...favouritesData.nodes.map(node => node.id)];

            if (favouritesData.pageInfo.hasNextPage) {
              options.page++;
              this.queryFavouriteIdsResultsPage(options, favouriteIds, callback);
            } else {
              callback(favouriteIds);
            }
          }
        })
      )
      .subscribe();
  }

  public saveAnimeListEntry(listEntry: ListEntry) {
    return this.postGraphQlRequest<SaveListEntryDto, SaveListEntryRequest>(saveListEntryQuery, {
      status: listEntry.status || 'COMPLETED',
      mediaId: listEntry.media.id,
      scoreRaw: listEntry.scoreRaw,
    });
  }

  public deleteAnimeListEntry(listEntry: ListEntry) {
    return this.postGraphQlRequest<DeleteListEntryDto, DeleteListEntryRequest>(deleteListEntryQuery, {
      id: listEntry.id,
    });
  }

  public toggleAnimeFavouriteEntry(listEntry: ListEntry) {
    return this.postGraphQlRequest<ToggleFavouriteMediaDto, ToggleFavouriteMediaRequest>(toggleFavouriteEntryQuery, {
      animeId: listEntry.media.id,
    });
  }
}
