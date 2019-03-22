import 'rxjs/add/operator/map';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { getParsedAnime, getParsedListEntry, mapQueryFilters } from '../../modules/anime/domain/anime.domain';
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
  FavouriteMediaDto,
  GenreCollectionDto,
  IdFilters,
  ListEntriesPageDto,
  ListMediaDto,
  ListMediaIdsDto,
  MediaPageDto,
  SaveListEntryDto,
  SearchFilters,
  SearchMediaDto,
  ToggleFavouriteMediaResponseDto as ToggleFavouriteMediaDto,
} from './anime-api.types';

@Injectable()
export class AnimeApi extends AniListApi {
  constructor(protected httpClient: HttpClient, protected authStore: AuthStore) {
    super(httpClient, authStore);
  }

  public queryAnimeGenres() {
    return this.postRequest<GenreCollectionDto>(genresQuery).map(
      response => this.getResponseData(response).GenreCollection
    );
  }

  public queryAnimeSearch(query: SearchFilters, pageInfo?: PageQuery) {
    return this.postRequest<SearchMediaDto>(searchQuery, {
      variables: mapQueryFilters(query, {
        mediaType: 'ANIME',
        adultContent: query.adultContent || false,
        onList: query.onList,
        sort: query.sort || MediaSort.TITLE_ROMAJI,

        page: pageInfo ? (pageInfo.pageIndex >= 1 ? pageInfo.pageIndex : 1) : 1,
        perPage: pageInfo ? pageInfo.perPage || 10 : 1,
      }),
    }).map(response => {
      let responseData = this.getResponseData(response).Page;
      if (responseData) {
        responseData.media.map(anime => getParsedAnime(anime));
      }
      return responseData;
    });
  }

  public queryAnimeList(user: User) {
    return this.postRequest<ListMediaDto>(listQuery, {
      variables: {
        mediaType: 'ANIME',
        userId: user.id,
        sort: MediaSort.SCORE_DESC,
      },
    }).map(response => {
      let listEntriesByStatus: { [Status in ListEntryStatus]?: ListEntry[] } = {};

      const listMediaDto = this.getResponseData(response);
      if (listMediaDto) {
        listMediaDto.MediaListCollection.lists.forEach(list => {
          const status = list.entries[0].status;

          list.entries.forEach(listEntry => {
            listEntriesByStatus[status] = [...(listEntriesByStatus[status] || []), getParsedListEntry(listEntry)];
          });
        });
      }

      return listEntriesByStatus;
    });
  }

  public queryAnimeListMediaIdsByStatus(user: User) {
    return this.postRequest<ListMediaIdsDto>(listMediaIdsQuery, {
      variables: {
        mediaType: 'ANIME',
        userId: user.id,
      },
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
    return this.postRequest<ListEntriesPageDto>(updatedEntriesQuery, {
      variables: {
        mediaType: 'ANIME',
        userId: user.id,
        sort: MediaSort.UPDATED_TIME_DESC,

        page: pageInfo ? (pageInfo.pageIndex >= 1 ? pageInfo.pageIndex : 1) : 1,
        perPage: pageInfo ? pageInfo.perPage || 10 : 1,
      },
    }).map(response => {
      const listEntriesDto = this.getResponseData(response);
      if (listEntriesDto) {
        listEntriesDto.Page.mediaList.map(listEntry => getParsedListEntry(listEntry));
      }
      return listEntriesDto && listEntriesDto.Page;
    });
  }

  public queryRecentlyFinishedAiringAnime(query: IdFilters, pageInfo?: PageQuery) {
    return this.postRequest<MediaPageDto>(finishedAiringMediaQuery, {
      variables: mapQueryFilters(query, {
        mediaType: 'ANIME',
        status: 'FINISHED',
        sort: 'END_DATE_DESC',
        onList: true,

        idIn: query && query.idIn,
        idtIn: query && query.idNotIn,

        page: pageInfo ? (pageInfo.pageIndex >= 1 ? pageInfo.pageIndex : 1) : 1,
        perPage: pageInfo ? pageInfo.perPage || 10 : 1,
      }),
    }).map(response => {
      const listEntriesDto = this.getResponseData(response);
      if (listEntriesDto) {
        listEntriesDto.Page.media.map(media => getParsedAnime(media));
      }
      return listEntriesDto && listEntriesDto.Page;
    });
  }

  public queryRelatedAnimeMedia(user: User) {
    return this.postRequest<ListMediaDto>(relatedMediaQuery, {
      variables: {
        mediaType: 'ANIME',
        userId: user.id,
      },
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

  public queryAnimeListFavourites(user: User, callback: Function) {
    this.queryFavouritesResultsPage(
      {
        userId: user.id,
        page: 0,
      },
      [],
      callback
    );
  }

  private queryFavouritesResultsPage(options: any, favourites: any[], callback: Function) {
    return this.postRequest<FavouriteMediaDto>(listFavouritesQuery, {
      variables: options,
    })
      .pipe(
        tap(response => {
          let results = [];

          const responseData = this.getResponseData(response);
          if (responseData && responseData.User && responseData.User.favourites && responseData.User.favourites.anime) {
            const favouritesData = responseData.User.favourites.anime;
            results = favouritesData.nodes;
            favourites = [...favourites, ...results];

            if (favouritesData.pageInfo.hasNextPage) {
              options.page++;
              this.queryFavouritesResultsPage(options, favourites, callback);
            } else {
              callback(favourites);
            }
          }
        })
      )
      .subscribe();
  }

  public queryAnimeListFavouriteIDs(user: User, callback: (favouriteIDs: number[]) => void) {
    this.queryAnimeListFavourites(user, listFavourites => {
      let favouriteIDs: number[] = [];

      listFavourites.forEach((media: Media) => {
        favouriteIDs.push(media.id);
      });

      callback(favouriteIDs);
    });
  }

  public saveAnimeListEntry(listEntry: ListEntry) {
    return this.postRequest<SaveListEntryDto>(saveListEntryQuery, {
      variables: {
        status: listEntry.status || 'COMPLETED',
        mediaId: listEntry.media.id,
        scoreRaw: listEntry.scoreRaw,
      },
    });
  }

  public deleteAnimeListEntry(listEntry: ListEntry) {
    return this.postRequest<DeleteListEntryDto>(deleteListEntryQuery, {
      variables: {
        id: listEntry.id,
      },
    });
  }

  public toggleAnimeFavouriteEntry(listEntry: ListEntry) {
    return this.postRequest<ToggleFavouriteMediaDto>(toggleFavouriteEntryQuery, {
      variables: {
        animeId: listEntry.media.id,
      },
    });
  }
}
