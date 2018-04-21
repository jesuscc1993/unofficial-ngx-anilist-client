import { MediaStatus } from '../models/anilist/mediaStatus';

/* filters */

export const pageFilterTypes: string = `
  $page: Int,
  $perPage: Int,
`;
export const pageFilterMappings: string = `
  page: $page,
  perPage: $perPage,
`;

export const mediaFilterTypes: string = `
  $adultContent: Boolean,
  $averageScore_greater: Int,
  $averageScore_lesser: Int,
  $formats: [MediaFormat],
  $genres: [String],
  $id: Int,
  $search: String,
  $sort: [MediaSort],
  $startDate_greater: FuzzyDateInt,
  $startDate_lesser: FuzzyDateInt,
  $type: MediaType,
`;
export const mediaFilterMappings: string = `
  averageScore_greater: $averageScore_greater,
  averageScore_lesser: $averageScore_lesser,
  format_in: $formats,
  genre_in: $genres,
  isAdult: $adultContent,
  search: $search,
  sort: $sort,
  startDate_greater: $startDate_greater,
  startDate_lesser: $startDate_lesser,
  type: $type,
  id: $id,
`;

export const mediaCollectionFilterTypes: string = `
  $listType: MediaType,
  $sort: [MediaListSort],
  $userId: Int!,
`;
export const mediaCollectionFilterMappings: string = `
  sort: $sort,
  type: $listType,
  userId: $userId,
`;

/* fields */

export const pageInfoFields: string = `
  currentPage
  hasNextPage
  lastPage
  perPage
  total
`;

export const listAnimeFields: string = `
  averageScore
  coverImage {
    large
    medium
  }
  description
  duration
  episodes
  format
  genres
  id
  startDate {
    year
  }
  status
  studios(isMain: true) {
    nodes {
      name
    }
  }
  tags {
    description
    isMediaSpoiler
    name
  }
  title {
    romaji
  }
`;

export const searchAnimeFields: string = `${listAnimeFields}
  mediaListEntry {
    id
    scoreRaw: score (
      format: POINT_100
    )
    status
  }
`;

export const listEntryFields: string = `
  id
  media {
    ${listAnimeFields}
  }
  scoreRaw: score (
    format: POINT_100
  )
  status
  updatedAt
`;

/* queries */

export const genresQuery: string = `
  {
    GenreCollection
  }
`;

export const userQuery: string = `
  {
    Viewer {
      avatar {
        large
      }
      id
      name
      options {
        displayAdultContent
      }
      stats {
        favouredGenresOverview {
          amount
          genre
          meanScore
          timeWatched
        }
        watchedTime
      }
    }
  }
`;

export const searchQuery: string = `
  query (
    ${mediaFilterTypes}
    ${pageFilterTypes}
  ) {
    Page (
      ${pageFilterMappings}
    ) {
      pageInfo {
        ${pageInfoFields}
      }
      media (
        ${mediaFilterMappings}
      ) {
        ${searchAnimeFields}
      }
    }
  }
`;

export const listQuery: string = `
  query (
    ${mediaCollectionFilterTypes}
  ) {
    MediaListCollection (
      ${mediaCollectionFilterMappings}
    ) {
      statusLists {
        ${listEntryFields}
      }
    }
  }
`;

export const relatedMediaQuery: string = `
  query (
    ${mediaCollectionFilterTypes}
  ) {
    MediaListCollection (
      ${mediaCollectionFilterMappings}
    ) {
      statusLists {
        media {
          relations {
            nodes {
              ${listAnimeFields}
            }
          }
        }
      }
    }
  }
`;

export const listMediaIdsQuery: string = `
  query (
    ${mediaCollectionFilterTypes}
  ) {
    MediaListCollection (
      ${mediaCollectionFilterMappings}
    ) {
      statusLists {
        media {
          id
        }
      }
    }
  }
`;

export const updatedEntriesQuery: string = `
  query (
    ${mediaCollectionFilterTypes}
    ${pageFilterTypes}
  ) {
    Page (
      ${pageFilterMappings}
    ) {
      pageInfo {
        ${pageInfoFields}
      }
      mediaList (
        ${mediaCollectionFilterMappings}
      ) {
        ${listEntryFields}
      }
    }
  }
`;

export const finishedAiringMediaQuery: string = `
  query (
    $listType: MediaType,
    $sort: [MediaSort],
    
    $idNotIn: [Int],
    
    ${pageFilterTypes}
  ) {
    Page (
      ${pageFilterMappings}
    ) {
      pageInfo {
        ${pageInfoFields}
      }
      media(
        sort: $sort,
        type: $listType,
        status: ${MediaStatus.FINISHED},
        id_not_in: $idNotIn,
        onList: true
      ) {
        ${listAnimeFields}
        mediaListEntry {
          ${listEntryFields}
        }
      }
    }
  }
`;

export const listFavouritesQuery: string = `
  query (
    $userId: Int!,
    $page: Int
  ) {
    User (
      id: $userId
    ) {
      favourites {
        anime (
          page: $page
        ) {
          nodes {
            id
          }
          pageInfo {
            ${pageInfoFields}
          }
        }
      }
    }
  }
`;

export const saveListEntryQuery: string = `
  mutation (
    $mediaId: Int,
    $scoreRaw: Int,
    $status: MediaListStatus
  ) {
    SaveMediaListEntry (
      mediaId: $mediaId,
      scoreRaw: $scoreRaw,
      status: $status
    ) {
      id
      status
    }
  }
`;

export const deleteListEntryQuery: string = `
  mutation (
    $id: Int
  ) {
    DeleteMediaListEntry (id: $id) {
      deleted
    }
  }
`;

export const toggleFavouriteEntryQuery: string = `
  mutation (
    $animeId: Int
  ) {
    ToggleFavourite (
      animeId: $animeId
    ) {
      anime {
        nodes {
          id
          title {
            userPreferred
          }
        }
      }
    }
  }
`;