import { Tag } from '../../shared/types/anilist/dataTypes.types';
import {
  ListEntry,
  ListEntryStatus,
} from '../../shared/types/anilist/listEntry.types';
import {
  Media,
  MediaListSort,
  MediaRelationType,
  MediaSort,
  MediaStatus,
} from '../../shared/types/anilist/media.types';
import { PageInfo } from '../../shared/types/anilist/pageInfo.types';

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
  sort?: MediaSort | MediaListSort;
  status?: ListEntryStatus | MediaStatus;
  userId?: number;
};

export type ListMediaFilters = MediaFilters & {
  statusIn?: ListEntryStatus[];
  statusNotIn?: ListEntryStatus[];
};

export type PagedMediaFilters = MediaFilters &
  Partial<{
    page: number;
    perPage: number;
  }>;

export type SearchFilters = MediaFilters & {
  averageScoreGreaterThan?: number;
  averageScoreSmallerThan?: number;
  countryOfOrigin?: string;
  formatIn?: string[];
  formatNotIn?: string[];
  genreIn?: string[];
  genreNotIn?: string[];
  search?: string;
  startDateGreaterThan?: number;
  startDateSmallerThan?: number;
  statusIn?: Array<ListEntryStatus | MediaStatus>;
  statusNotIn?: Array<ListEntryStatus | MediaStatus>;
  tagIn?: string[];
  tagNotIn?: string[];
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
  progress: number;
  repeat: number;
  scoreRaw: number;
};

export type DeleteListEntryRequest = {
  id: number;
};

/* dtos */
export type SearchMediaDto = {
  Page: {
    pageInfo: PageInfo;
    media: (Media & {
      mediaListEntry: {
        id: number;
        scoreRaw: number;
        status: ListEntryStatus;
      };
    })[];
  };
};

export type SaveListEntryDto = {
  SaveMediaListEntry: ListEntry;
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

export type MediaTagCollectionDto = {
  MediaTagCollection: Tag[];
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

export type RelatedMediaIdsDto = {
  MediaListCollection: {
    lists: {
      entries: {
        status: ListEntryStatus;
        media: {
          relations: {
            edges: {
              node: {
                id: number;
              };
              relationType: MediaRelationType;
            }[];
          };
        };
      }[];
    }[];
  };
};

export type FavouriteMediaDto = {
  User: {
    favourites: {
      anime: {
        nodes: { id: number }[];
        pageInfo: PageInfo;
      };
      manga: {
        nodes: { id: number }[];
        pageInfo: PageInfo;
      };
    };
  };
};
