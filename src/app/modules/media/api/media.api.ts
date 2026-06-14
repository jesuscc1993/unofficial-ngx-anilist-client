import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';

import { AniListApi } from '../../shared/api/api';
import { relatedMediaRelationTypes } from '../../shared/constants/media.constants';
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
import {
  deleteListEntryQuery,
  genresQuery,
  listFavouritesQuery,
  mediaRecommendationsQuery,
  mediaSearchQuery,
  relatedMediaIdsQuery,
  saveListEntryQuery,
  tagsQuery,
} from './media.queries';
import {
  DeleteListEntryDto,
  DeleteListEntryRequest,
  GenreCollectionDto,
  ListMediaDto,
  ListMediaFilters,
  MediaFilters,
  MediaPageDto,
  MediaRecommendationsDto,
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
      map((response) => this.getResponseData(response)!.SaveMediaListEntry)
    );
  }

  deleteListEntry(listEntry: ListEntry) {
    return this.postGraphQlRequest<DeleteListEntryDto, DeleteListEntryRequest>(
      deleteListEntryQuery,
      { id: listEntry.id! }
    ).pipe(
      map((response) => this.getResponseData(response)!.DeleteMediaListEntry)
    );
  }

  queryGenres() {
    return this.postGraphQlRequest<GenreCollectionDto>(genresQuery, undefined, {
      cacheKey: 'queryGenres',
    }).pipe(map((response) => this.getResponseData(response)!.GenreCollection));
  }

  queryTags() {
    return this.postGraphQlRequest<MediaTagCollectionDto>(
      tagsQuery,
      undefined,
      { cacheKey: 'queryTags' }
    ).pipe(
      map((response) => this.getResponseData(response)!.MediaTagCollection)
    );
  }

  queryRecommendationsForMediaId(mediaId: number, pageQuery: PageQuery) {
    return this.postGraphQlRequest<
      MediaRecommendationsDto,
      { id: number; page: number; perPage: number; sort: string[] }
    >(mediaRecommendationsQuery, {
      id: mediaId,
      sort: ['RATING_DESC'],
      ...this.getPageOptions(pageQuery),
    }).pipe(
      map((response) => {
        const recommendationsDto =
          this.getResponseData(response)!.Media?.recommendations;
        return {
          pageInfo: recommendationsDto?.pageInfo,
          media:
            recommendationsDto?.nodes?.map(
              (node) => node.mediaRecommendation
            ) ?? [],
        } as MediaPageDto;
      })
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
      { cacheKey: `queryMediaList_${mediaType}_${mediaIds.join(',')}` }
    ).pipe(map((response) => this.getResponseData(response)!.Page));
  }

  protected _queryMedia(
    mediaType: MediaType,
    query: SearchFilters,
    pageQuery?: PageQuery
  ) {
    return this.postGraphQlRequest<SearchMediaDto, PagedSearchFilters>(
      mediaSearchQuery,
      {
        ...this.getPageOptions(pageQuery),
        ...query,
        mediaType,
        adultContent: query.adultContent || false,
        sort:
          query.sort ||
          (query.search ? MediaSort.SEARCH_MATCH : MediaSort.TITLE_ROMAJI),
      }
    ).pipe(map((response) => this.getResponseData(response)!.Page));
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
        this.getResponseData(response)!.MediaListCollection.lists.reduce(
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

        const responseData = this.getResponseData(response);
        if (responseData) {
          responseData.MediaListCollection.lists.forEach((list) => {
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

  protected _queryFavouriteIDs(mediaType: MediaType, user: User) {
    return this.postGraphQlRequest<ListMediaDto, MediaFilters>(
      listFavouritesQuery,
      {
        mediaType,
        userId: user.id,
      }
    ).pipe(
      map((response) =>
        this.getResponseData(response)!.MediaListCollection.lists.reduce(
          (favouriteIDs, list) => [
            ...favouriteIDs,
            ...list.entries
              .filter((entry) => entry.media.isFavourite)
              .map((entry) => entry.media.id),
          ],
          [] as number[]
        )
      )
    );
  }
}
