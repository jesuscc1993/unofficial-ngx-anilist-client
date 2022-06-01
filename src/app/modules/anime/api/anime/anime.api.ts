import { map, tap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AniListApi } from '../../../shared/api/api';
import { AuthStore } from '../../../shared/store/auth.store';
import { ListEntry } from '../../../shared/types/anilist/listEntry.types';
import { PageQuery } from '../../../shared/types/anilist/pageInfo.types';
import { User } from '../../../shared/types/anilist/user.types';
import {
  deleteListEntryQuery, genresQuery, listFavouritesQuery, listQuery, mediaIdSearchQuery,
  mediaSearchQuery, relatedMediaIdsQuery, saveListEntryQuery, toggleFavouriteEntryQuery,
} from './anime-api.queries';
import {
  DeleteListEntryDto, DeleteListEntryRequest, FavouriteMediaDto, GenreCollectionDto, ListMediaDto,
  MediaFilters, PagedSearchFilters, RelatedMediaIdsDto, SaveListEntryDto, SaveListEntryRequest,
  SearchFilters, SearchMediaDto, ToggleFavouriteMediaRequest,
  ToggleFavouriteMediaResponseDto as ToggleFavouriteMediaDto,
} from './anime-api.types';

@Injectable()
export class AnimeApi extends AniListApi {
  constructor(
    protected httpClient: HttpClient,
    protected authStore: AuthStore
  ) {
    super(httpClient, authStore);
  }

  queryAnimeGenres() {
    return this.postGraphQlRequest<GenreCollectionDto>(genresQuery).pipe(
      map((response) => this.getResponseData(response).GenreCollection)
    );
  }

  queryAnimeFromIds(
    mediaIds: number[],
    query: SearchFilters,
    pageQuery?: PageQuery
  ) {
    return this.postGraphQlRequest<SearchMediaDto, PagedSearchFilters>(
      mediaSearchQuery,
      {
        ...(pageQuery
          ? this.getPageOptions(pageQuery)
          : { perPage: mediaIds.length }),
        ...query,
        idIn: mediaIds,
        mediaType: 'ANIME',
      }
    ).pipe(map((response) => this.getResponseData(response).Page));
  }

  queryAnimeSearch(query: SearchFilters, pageQuery?: PageQuery) {
    return this.postGraphQlRequest<SearchMediaDto, PagedSearchFilters>(
      mediaIdSearchQuery,
      {
        ...this.getPageOptions(pageQuery),
        ...query,
        adultContent: query.adultContent || false,
        mediaType: 'ANIME',
        sort: query.sort || (query.search ? 'SEARCH_MATCH' : 'TITLE_ROMAJI'),
      }
    ).pipe(map((response) => this.getResponseData(response).Page));
  }

  queryAnimeList(user: User) {
    return this.postGraphQlRequest<ListMediaDto, MediaFilters>(listQuery, {
      mediaType: 'ANIME',
      userId: user.id,
      sort: 'UPDATED_TIME_DESC',
    }).pipe(
      map((response) =>
        this.getResponseData(response).MediaListCollection.lists.reduce(
          (listEntries, list) => [...listEntries, ...list.entries],
          [] as ListEntry[]
        )
      )
    );
  }

  queryRelatedAnimeMediaIds(user: User) {
    return this.postGraphQlRequest<RelatedMediaIdsDto, MediaFilters>(
      relatedMediaIdsQuery,
      {
        mediaType: 'ANIME',
        userId: user.id,
      }
    ).pipe(
      map((response) => {
        const mediaIds: number[] = [];

        const listMediaDto = this.getResponseData(response);
        if (listMediaDto) {
          listMediaDto.MediaListCollection.lists.forEach((list) => {
            if (['COMPLETED', 'REPEATING'].includes(list.entries[0].status)) {
              list.entries.forEach((listEntry) => {
                listEntry.media.relations.nodes.forEach((anime) => {
                  if (!mediaIds.includes(anime.id)) {
                    mediaIds.push(anime.id);
                  }
                });
              });
            }
          });
        }

        return mediaIds;
      })
    );
  }

  queryAnimeListFavouriteIDs(
    user: User,
    callback: (favouriteIDs: number[]) => void
  ) {
    this.queryFavouriteIdsResultsPage(
      {
        userId: user.id,
        page: 0,
      },
      [],
      callback
    );
  }

  saveAnimeListEntry({ status, progress, repeat, scoreRaw, media }: ListEntry) {
    return this.postGraphQlRequest<SaveListEntryDto, SaveListEntryRequest>(
      saveListEntryQuery,
      {
        progress,
        repeat,
        scoreRaw,
        mediaId: media.id,
        status: status || 'COMPLETED',
      }
    ).pipe(
      map((response) => this.getResponseData(response).SaveMediaListEntry)
    );
  }

  deleteAnimeListEntry(listEntry: ListEntry) {
    return this.postGraphQlRequest<DeleteListEntryDto, DeleteListEntryRequest>(
      deleteListEntryQuery,
      {
        id: listEntry.id,
      }
    ).pipe(
      map((response) => this.getResponseData(response).DeleteMediaListEntry)
    );
  }

  toggleAnimeFavouriteEntry(listEntry: ListEntry) {
    return this.postGraphQlRequest<
      ToggleFavouriteMediaDto,
      ToggleFavouriteMediaRequest
    >(toggleFavouriteEntryQuery, {
      animeId: listEntry.media.id,
    }).pipe(map((response) => this.getResponseData(response).ToggleFavourite));
  }

  private queryFavouriteIdsResultsPage(
    options: { userId: number; page: number },
    favouriteIds: number[],
    callback: (favouriteIds: number[]) => void
  ) {
    return this.postGraphQlRequest<FavouriteMediaDto, PagedSearchFilters>(
      listFavouritesQuery,
      options
    )
      .pipe(
        tap((response) => {
          const responseData = this.getResponseData(response);
          if (
            responseData &&
            responseData.User &&
            responseData.User.favourites &&
            responseData.User.favourites.anime
          ) {
            const favouritesData = responseData.User.favourites.anime;
            favouriteIds = [
              ...favouriteIds,
              ...favouritesData.nodes.map((node) => node.id),
            ];

            if (favouritesData.pageInfo.hasNextPage) {
              options.page++;
              this.queryFavouriteIdsResultsPage(
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
