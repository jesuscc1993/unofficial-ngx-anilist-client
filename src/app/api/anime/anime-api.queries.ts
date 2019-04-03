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

const pageInfoFields: string = `
  currentPage
  hasNextPage
  lastPage
  perPage
  total
`;

const listAnimeFields: string = `
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

const searchAnimeFields: string = `${listAnimeFields}
  mediaListEntry {
    id
    scoreRaw: score (
      format: POINT_100
    )
    status
  }
`;

const listEntryFields: string = `
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
        ${searchAnimeFields}
      }
    }
  }
`;

export const listQuery: string = `
  query (
    ${filterTypes.mediaCollection}
  ) {
    MediaListCollection (
      ${filterMappings.mediaCollection}
    ) {
      lists {
        entries {
          ${listEntryFields}
        }
      }
    }
  }
`;

export const relatedMediaQuery: string = `
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
                ${listAnimeFields}
              }
            }
          }
        }
      }
`;

export const listMediaIdsQuery: string = `
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

export const updatedEntriesQuery: string = `
  query (
    ${filterTypes.mediaCollection}
    ${filterTypes.page}
  ) {
    Page (
      ${filterMappings.page}
    ) {
      pageInfo {
        ${pageInfoFields}
      }
      mediaList (
        ${filterMappings.mediaCollection}
      ) {
        ${listEntryFields}
      }
    }
  }
`;

export const finishedAiringMediaQuery: string = `
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
            romaji
          }
        }
      }
    }
  }
`;
