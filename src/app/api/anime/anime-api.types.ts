import { Anime } from '../../types/anilist/anime.types';
import { ListEntry, ListEntryStatus } from '../../types/anilist/listEntry.types';
import { Media, MediaStatus } from '../../types/anilist/media.types';
import { PageInfo } from '../../types/anilist/pageInfo.types';

/* filters */
export type PageOptions = {
  page: number;
  perPage: number;
};

export type MediaFilters = {
  adultContent?: boolean;
  id?: number;
  idIn?: number[];
  idNotIn?: number[];
  mediaType?: string;
  onList?: boolean;
  sort?: string;
  status?: ListEntryStatus | MediaStatus;
  userId?: number;
};

export type PagedMediaFilters = MediaFilters &
  Partial<{
    page: number;
    perPage: number;
  }>;

export type SearchFilters = MediaFilters & {
  averageScoreGreaterThan?: number;
  averageScoreSmallerThan?: number;
  formatIn?: string[];
  formatNotIn?: string[];
  genreIn?: string[];
  genreNotIn?: string[];
  search?: string;
  startDateGreaterThan?: number;
  startDateSmallerThan?: number;
  statusIn?: Array<ListEntryStatus | MediaStatus>;
  statusNotIn?: Array<ListEntryStatus | MediaStatus>;
};

export type PagedSearchFilters = SearchFilters &
  Partial<{
    page: number;
    perPage: number;
  }>;

/* requests */

export type SaveListEntryRequest = {
  status: ListEntryStatus;
  mediaId: number;
  scoreRaw: number;
};

export type DeleteListEntryRequest = {
  id: number;
};

export type ToggleFavouriteMediaRequest = {
  animeId: number;
};

/* dtos */
export type SearchMediaDto = {
  Page: {
    pageInfo: PageInfo;
    media: (Anime & {
      mediaListEntry: {
        id: number;
        scoreRaw: number;
        status: ListEntryStatus;
      };
    })[];
  };
};

export type SaveListEntryDto = {
  SaveMediaListEntry: {
    id: number;
  };
};

export type DeleteListEntryDto = {
  DeleteMediaListEntry: {
    deleted: boolean;
  };
};

export type ToggleFavouriteMediaResponseDto = {
  ToggleFavourite: number;
};

export type ListEntriesPageDto = {
  Page: {
    pageInfo: PageInfo;
    mediaList: ListEntry[];
  };
};

export type MediaPageDto = {
  Page: {
    pageInfo: PageInfo;
    media: Media[];
  };
};

export type GenreCollectionDto = {
  GenreCollection: string[];
};

export type ListMediaDto = {
  MediaListCollection: {
    lists: {
      entries: ListEntry[];
    }[];
  };
};

export type ListMediaIdsDto = {
  MediaListCollection: {
    lists: {
      entries: {
        status: ListEntryStatus;
        media: {
          id: number;
        };
      }[];
    }[];
  };
};

export type FavouriteMediaDto = {
  User: {
    favourites: {
      anime: {
        nodes: {
          id: number;
        }[];
        pageInfo: PageInfo;
      };
    };
  };
};
