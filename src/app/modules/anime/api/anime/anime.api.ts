import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

import { AniListApi } from '../../../shared/api/api';
import { AuthStore } from '../../../shared/store/auth.store';
import { ListEntry, ListEntryStatus } from '../../../shared/types/anilist/listEntry.types';
import { Media } from '../../../shared/types/anilist/media.types';
import { PageQuery } from '../../../shared/types/anilist/pageInfo.types';
import { User } from '../../../shared/types/anilist/user.types';
import {
  deleteListEntryQuery,
  finishedAiringMediaQuery,
  genresQuery,
  listFavouritesQuery,
  listMediaIdsQuery,
  listQuery,
  mediaIdSearchQuery,
  mediaSearchQuery,
  relatedMediaQuery,
  saveListEntryQuery,
  toggleFavouriteEntryQuery,
} from './anime-api.queries';
import {
  DeleteListEntryDto,
  DeleteListEntryRequest,
  FavouriteMediaDto,
  GenreCollectionDto,
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
    return this.postGraphQlRequest<GenreCollectionDto>(genresQuery).pipe(
      map(response => this.getResponseData(response).GenreCollection)
    );
  }

  public queryAnimeFromIds(mediaIds: number[]) {
    return this.postGraphQlRequest<SearchMediaDto, PagedSearchFilters>(mediaSearchQuery, {
      mediaType: 'ANIME',
      idIn: mediaIds,
      sort: 'TITLE_ROMAJI',

      perPage: mediaIds.length,
    }).pipe(map(response => this.getResponseData(response).Page.media));
  }

  public queryAnimeSearch(query: SearchFilters, pageInfo?: PageQuery) {
    return this.postGraphQlRequest<SearchMediaDto, PagedSearchFilters>(mediaIdSearchQuery, {
      ...this.getPageOptions(pageInfo),
      ...query,
      mediaType: 'ANIME',
      adultContent: query.adultContent || false,
      sort: query.sort || 'TITLE_ROMAJI',
    }).pipe(map(response => this.getResponseData(response).Page));
  }

  public queryAnimeList(user: User) {
    return this.postGraphQlRequest<ListMediaDto, MediaFilters>(listQuery, {
      mediaType: 'ANIME',
      userId: user.id,
      sort: 'UPDATED_TIME_DESC',
    }).pipe(
      map(response =>
        this.getResponseData(response).MediaListCollection.lists.reduce(
          (listEntries, list) => [...listEntries, ...list.entries],
          [] as ListEntry[]
        )
      )
    );
  }

  public queryAnimeListMediaIdsByStatus(user: User) {
    return this.postGraphQlRequest<ListMediaIdsDto, MediaFilters>(listMediaIdsQuery, {
      mediaType: 'ANIME',
      userId: user.id,
    }).pipe(
      map(response => {
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
      })
    );
  }

  public queryRecentlyFinishedAiringAnime(query: MediaFilters, pageInfo?: PageQuery) {
    return this.postGraphQlRequest<MediaPageDto, PagedMediaFilters>(finishedAiringMediaQuery, {
      ...this.getPageOptions(pageInfo),
      ...query,
      mediaType: 'ANIME',
      status: 'FINISHED',
      sort: 'END_DATE_DESC',
      onList: true,
    }).pipe(map(response => this.getResponseData(response).Page));
  }

  public queryRelatedAnimeMedia(user: User) {
    return this.postGraphQlRequest<ListMediaDto, MediaFilters>(relatedMediaQuery, {
      mediaType: 'ANIME',
      userId: user.id,
    }).pipe(
      map(response => {
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
      })
    );
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
    }).pipe(map(response => this.getResponseData(response).SaveMediaListEntry));
  }

  public deleteAnimeListEntry(listEntry: ListEntry) {
    return this.postGraphQlRequest<DeleteListEntryDto, DeleteListEntryRequest>(deleteListEntryQuery, {
      id: listEntry.id,
    }).pipe(map(response => this.getResponseData(response).DeleteMediaListEntry));
  }

  public toggleAnimeFavouriteEntry(listEntry: ListEntry) {
    return this.postGraphQlRequest<ToggleFavouriteMediaDto, ToggleFavouriteMediaRequest>(toggleFavouriteEntryQuery, {
      animeId: listEntry.media.id,
    }).pipe(map(response => this.getResponseData(response).ToggleFavourite));
  }
}
