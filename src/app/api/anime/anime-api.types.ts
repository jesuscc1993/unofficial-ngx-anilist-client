import { Anime } from '../../types/anilist/anime.types';
import { ListEntry, ListEntryStatus } from '../../types/anilist/listEntry.types';
import { Media } from '../../types/anilist/media.types';
import { PageInfo, PageQuery } from '../../types/anilist/pageInfo.types';

/* filters */
export type MediaCollectionFilters = {
  mediaType?: string;
  sort?: string;
  userId: number;
};

export type MediaFilters = Partial<PageQuery> & {
  mediaType?: string;
  adultContent?: boolean;
  onList?: boolean;
  sort?: string;
};

export type SearchFilters = MediaFilters & {
  id?: number;
  search?: string;
  startDate_greater?: number;
  startDate_lesser?: number;
  averageScore_greater?: number;
  averageScore_lesser?: number;
  genre_in?: string[];
  genre_not_in?: string[];
  format_in?: string[];
  format_not_in?: string[];
  status_in?: string[];
  status_not_in?: string[];
};

export type IdFilters = SearchFilters & {
  idIn?: number[];
  idNotIn?: number[];
};

/* dtos */
export type PageQueryDto = {
  page: number;
  perPage: number;
};

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
  status: ListEntryStatus;
  mediaId: number;
  scoreRaw: number;
};

export type DeleteListEntryDto = {
  id: number;
};

export type ToggleFavouriteMediaDto = {
  animeId: number;
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
