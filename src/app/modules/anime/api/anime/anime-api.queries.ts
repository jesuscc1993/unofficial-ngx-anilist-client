const filterTypes: { [key: string]: string } = {};
const filterMappings: { [key: string]: string } = {};

/* filters */

filterTypes.page = `
  $page: Int,
  $perPage: Int,
`;
filterMappings.page = `
  page: $page,
  perPage: $perPage,
`;

filterTypes.mediaCollection = `
  $mediaType: MediaType,
  $sort: [MediaListSort],
  $userId: Int!,
`;
filterMappings.mediaCollection = `
  sort: $sort,
  type: $mediaType,
  userId: $userId,
`;

filterTypes.media = `
  $mediaType: MediaType,
  $sort: [MediaSort],
  $adultContent: Boolean,
  $averageScoreGreaterThan: Int,
  $averageScoreSmallerThan: Int,
  $genreIn: [String],
  $genreNotIn: [String],
  $formatIn: [MediaFormat],
  $formatNotIn: [MediaFormat],
  $statusIn: [MediaStatus],
  $statusNotIn: [MediaStatus],
  $search: String,
  $startDateGreaterThan: FuzzyDateInt,
  $startDateSmallerThan: FuzzyDateInt,
  $status: MediaStatus,
  $id: Int,
  $idIn: [Int],
  $idNotIn: [Int],
  $onList: Boolean,
`;
filterMappings.media = `
  sort: $sort,
  type: $mediaType,
  isAdult: $adultContent,
  averageScore_greater: $averageScoreGreaterThan,
  averageScore_lesser: $averageScoreSmallerThan,
  genre_in: $genreIn,
  genre_not_in: $genreNotIn,
  format_in: $formatIn,
  format_not_in: $formatNotIn,
  status_in: $statusIn,
  status_not_in: $statusNotIn,
  search: $search,
  startDate_greater: $startDateGreaterThan,
  startDate_lesser: $startDateSmallerThan,
  status: $status,
  id: $id,
  id_in: $idIn,
  id_not_in: $idNotIn,
  onList: $onList,
`;

/* fields */

const pageInfoFields = `
  currentPage
  hasNextPage
  lastPage
  perPage
  total
`;

const listEntryFields = `
  id
  scoreRaw: score (
    format: POINT_100
  )
  progress
  repeat
  status
  updatedAt
`;

const mediaFields = `
  id
  mediaListEntry {
    ${listEntryFields}
  }
`;

const animeFields = `${mediaFields}
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
    month
    day
  }
  endDate {
    year
    month
    day
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

const animeListEntryFields = `${listEntryFields}
  media {
    ${animeFields}
  }
`;

/* queries */

export const genresQuery = `
  {
    GenreCollection
  }
`;

export const userQuery = `
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

export const mediaIdSearchQuery = `
  query (
    ${filterTypes.media}
    ${filterTypes.page}
  ) {
    Page (
      ${filterMappings.page}
    ) {
      pageInfo {
        ${pageInfoFields}
      }
      media (
        ${filterMappings.media}
      ) {
        ${mediaFields}
      }
    }
  }
`;

export const mediaSearchQuery = `
  query (
    ${filterTypes.media}
    ${filterTypes.page}
  ) {
    Page (
      ${filterMappings.page}
    ) {
      pageInfo {
        ${pageInfoFields}
      }
      media (
        ${filterMappings.media}
      ) {
        ${animeFields}
      }
    }
  }
`;

export const listQuery = `
  query (
    ${filterTypes.mediaCollection}
  ) {
    MediaListCollection (
      ${filterMappings.mediaCollection}
    ) {
      lists {
        entries {
          ${animeListEntryFields}
        }
      }
    }
  }
`;

export const relatedMediaIdsQuery = `
  query (
    ${filterTypes.mediaCollection}
  ) {
    MediaListCollection (
      ${filterMappings.mediaCollection}
    ) {
      lists {
        entries {
          status
          media {
            relations {
              nodes {
                id
              }
            }
          }
        }
      }
    }
  }
`;

export const listMediaIdsQuery = `
  query (
    ${filterTypes.mediaCollection}
  ) {
    MediaListCollection (
      ${filterMappings.mediaCollection}
    ) {
      lists {
        entries {
          status
          media {
            id
          }
        }
      }
    }
  }
`;

export const finishedAiringMediaQuery = `
  query (
    ${filterTypes.media}
    ${filterTypes.page}
  ) {
    Page (
      ${filterMappings.page}
    ) {
      pageInfo {
        ${pageInfoFields}
      }
      media (
        ${filterMappings.media}
      ) {
        ${mediaFields}
      }
    }
  }
`;

export const listFavouritesQuery = `
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

export const saveListEntryQuery = `
  mutation (
    $mediaId: Int,
    $progress: Int,
    $repeat: Int,
    $scoreRaw: Int,
    $status: MediaListStatus
  ) {
    SaveMediaListEntry (
      mediaId: $mediaId,
      progress: $progress,
      repeat: $repeat,
      scoreRaw: $scoreRaw,
      status: $status
      ) {
        ${listEntryFields}
      }
    }
  `;

export const deleteListEntryQuery = `
  mutation (
    $id: Int
  ) {
    DeleteMediaListEntry (id: $id) {
      deleted
    }
  }
`;

export const toggleFavouriteEntryQuery = `
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
            romaji
          }
        }
      }
    }
  }
`;
