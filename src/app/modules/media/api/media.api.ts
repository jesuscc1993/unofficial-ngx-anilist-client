import { map, tap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AniListApi } from '../../shared/api/api';
import { relatedMediaRelationTypes } from '../../shared/constants/media.constants';
import { AuthStore } from '../../shared/store/auth.store';
import {
  ListEntry,
  ListEntryStatus,
} from '../../shared/types/anilist/listEntry.types';
import {
  MediaListSort,
  MediaSort,
  MediaType,
} from '../../shared/types/anilist/media.types';
import { PageQuery } from '../../shared/types/anilist/pageInfo.types';
import { User } from '../../shared/types/anilist/user.types';
import { isAnime } from '../domain/media.domain';
import {
  deleteListEntryQuery,
  genresQuery,
  mediaIdSearchQuery,
  relatedMediaIdsQuery,
  saveListEntryQuery,
  tagsQuery,
} from './media.queries';
import {
  DeleteListEntryDto,
  DeleteListEntryRequest,
  FavouriteMediaDto,
  GenreCollectionDto,
  ListMediaDto,
  ListMediaFilters,
  MediaFilters,
  MediaTagCollectionDto,
  PagedSearchFilters,
  RelatedMediaIdsDto,
  SaveListEntryDto,
  SaveListEntryRequest,
  SearchFilters,
  SearchMediaDto,
} from './media.types';

@Injectable()
export class MediaApi extends AniListApi {
  constructor(
    protected httpClient: HttpClient,
    protected authStore: AuthStore
  ) {
    super(httpClient, authStore);
  }

  saveListEntry({ status, progress, repeat, scoreRaw, media }: ListEntry) {
    return this.postGraphQlRequest<SaveListEntryDto, SaveListEntryRequest>(
      saveListEntryQuery,
      {
        progress,
        repeat,
        scoreRaw,
        mediaId: media.id,
        status: status || ListEntryStatus.COMPLETED,
      }
    ).pipe(
      map((response) => this.getResponseData(response).SaveMediaListEntry)
    );
  }

  deleteListEntry(listEntry: ListEntry) {
    return this.postGraphQlRequest<DeleteListEntryDto, DeleteListEntryRequest>(
      deleteListEntryQuery,
      { id: listEntry.id }
    ).pipe(
      map((response) => this.getResponseData(response).DeleteMediaListEntry)
    );
  }

  queryGenres() {
    return this.postGraphQlRequest<GenreCollectionDto>(genresQuery, undefined, {
      cacheKey: 'queryGenres',
    }).pipe(map((response) => this.getResponseData(response).GenreCollection));
  }

  queryTags() {
    return this.postGraphQlRequest<MediaTagCollectionDto>(
      tagsQuery,
      undefined,
      { cacheKey: 'queryTags' }
    ).pipe(
      map((response) => this.getResponseData(response).MediaTagCollection)
    );
  }

  protected _queryMediaFromIds(
    mediaType: MediaType,
    mediaQuery: string,
    mediaIds: number[],
    query: SearchFilters,
    pageQuery?: PageQuery
  ) {
    return this.postGraphQlRequest<SearchMediaDto, PagedSearchFilters>(
      mediaQuery,
      {
        ...(pageQuery
          ? this.getPageOptions(pageQuery)
          : { perPage: mediaIds.length }),
        ...query,
        mediaType,
        idIn: mediaIds,
      },
      { cacheKey: 'queryMediaList' + mediaIds.join(',') }
    ).pipe(map((response) => this.getResponseData(response).Page));
  }

  protected _queryMedia(
    mediaType: MediaType,
    query: SearchFilters,
    pageQuery?: PageQuery
  ) {
    return this.postGraphQlRequest<SearchMediaDto, PagedSearchFilters>(
      mediaIdSearchQuery,
      {
        ...this.getPageOptions(pageQuery),
        ...query,
        mediaType,
        adultContent: query.adultContent || false,
        sort:
          query.sort ||
          (query.search ? MediaSort.SEARCH_MATCH : MediaSort.TITLE_ROMAJI),
      },
      { cacheKey: 'queryMedia' }
    ).pipe(map((response) => this.getResponseData(response).Page));
  }

  protected _queryListEntries(
    mediaType: MediaType,
    mediaQuery: string,
    user: User
  ) {
    return this.postGraphQlRequest<ListMediaDto, MediaFilters>(mediaQuery, {
      mediaType,
      userId: user.id,
      sort: MediaListSort.UPDATED_TIME_DESC,
    }).pipe(
      map((response) =>
        this.getResponseData(response).MediaListCollection.lists.reduce(
          (listEntries, list) => [...listEntries, ...list.entries],
          [] as ListEntry[]
        )
      )
    );
  }

  protected _queryRelatedMediaIds(mediaType: MediaType, user: User) {
    return this.postGraphQlRequest<RelatedMediaIdsDto, ListMediaFilters>(
      relatedMediaIdsQuery,
      {
        mediaType,
        userId: user.id,
        statusIn: [ListEntryStatus.COMPLETED, ListEntryStatus.REPEATING],
      }
    ).pipe(
      map((response) => {
        const mediaIds: number[] = [];

        const listMediaDto = this.getResponseData(response);
        if (listMediaDto) {
          listMediaDto.MediaListCollection.lists.forEach((list) => {
            list.entries.forEach((listEntry) => {
              listEntry.media.relations.edges.forEach((edge) => {
                const mediaId = edge.node.id;
                if (
                  !mediaIds.includes(mediaId) &&
                  relatedMediaRelationTypes.includes(edge.relationType)
                ) {
                  mediaIds.push(mediaId);
                }
              });
            });
          });
        }

        return mediaIds;
      })
    );
  }

  protected _queryFavouriteIDs(
    mediaType: MediaType,
    mediaQuery: string,
    user: User,
    callback: (favouriteIDs: number[]) => void
  ) {
    this._queryFavouriteIdsResultsPage(
      mediaType,
      mediaQuery,
      { userId: user.id, page: 0 },
      [],
      callback
    );
  }

  protected _queryFavouriteIdsResultsPage(
    mediaType: MediaType,
    mediaQuery: string,
    options: { userId: number; page: number },
    favouriteIds: number[],
    callback: (favouriteIds: number[]) => void
  ) {
    return this.postGraphQlRequest<FavouriteMediaDto, PagedSearchFilters>(
      mediaQuery,
      options
    )
      .pipe(
        tap((response) => {
          const responseData = this.getResponseData(response);
          if (
            responseData &&
            responseData.User &&
            responseData.User.favourites
          ) {
            const favouritesData = isAnime(mediaType)
              ? responseData.User.favourites.anime
              : responseData.User.favourites.manga;

            favouriteIds = [
              ...favouriteIds,
              ...favouritesData.nodes.map((node) => node.id),
            ];

            if (favouritesData.pageInfo.hasNextPage) {
              options.page++;
              this._queryFavouriteIdsResultsPage(
                mediaType,
                mediaQuery,
                options,
                favouriteIds,
                callback
              );
            } else {
              callback(favouriteIds);
            }
          }
        })
      )
      .subscribe();
  }
}
