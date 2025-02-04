export const filterTypes: { [key: string]: string } = {};
export const filterMappings: { [key: string]: string } = {};

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

filterTypes.listMediaCollection = `${filterTypes.mediaCollection}
  $statusIn: [MediaListStatus],
  $statusNotIn: [MediaListStatus],
`;
filterMappings.listMediaCollection = `${filterMappings.mediaCollection}
  status_in: $statusIn,
  status_not_in: $statusNotIn,
`;

filterTypes.media = `
  $adultContent: Boolean,
  $averageScoreGreaterThan: Int,
  $averageScoreSmallerThan: Int,
  $countryOfOrigin: CountryCode,
  $endDateGreaterThan: FuzzyDateInt,
  $endDateSmallerThan: FuzzyDateInt,
  $formatIn: [MediaFormat],
  $formatNotIn: [MediaFormat],
  $genreIn: [String],
  $genreNotIn: [String],
  $id: Int,
  $idIn: [Int],
  $idNotIn: [Int],
  $mediaType: MediaType,
  $onList: Boolean,
  $search: String,
  $sort: [MediaSort],
  $startDateGreaterThan: FuzzyDateInt,
  $startDateSmallerThan: FuzzyDateInt,
  $status: MediaStatus,
  $statusIn: [MediaStatus],
  $statusNotIn: [MediaStatus],
`;
filterMappings.media = `
  averageScore_greater: $averageScoreGreaterThan,
  averageScore_lesser: $averageScoreSmallerThan,
  countryOfOrigin: $countryOfOrigin,
  endDate_greater: $endDateGreaterThan,
  endDate_lesser: $endDateSmallerThan,
  format_in: $formatIn,
  format_not_in: $formatNotIn,
  genre_in: $genreIn,
  genre_not_in: $genreNotIn,
  id: $id,
  id_in: $idIn,
  id_not_in: $idNotIn,
  isAdult: $adultContent,
  onList: $onList,
  search: $search,
  sort: $sort,
  startDate_greater: $startDateGreaterThan,
  startDate_lesser: $startDateSmallerThan,
  status: $status,
  status_in: $statusIn,
  status_not_in: $statusNotIn,
  type: $mediaType,
`;

/* fields */

export const pageInfoFields = `
  currentPage
  hasNextPage
  lastPage
  perPage
  total
`;

export const listEntryFields = `
  id
  scoreRaw: score (
    format: POINT_100
  )
  progress
  repeat
  status
  updatedAt
`;

export const basicMediaFields = `
  id
  mediaListEntry {
    ${listEntryFields}
  }
`;

export const mediaFields = `${basicMediaFields}
  averageScore
  countryOfOrigin
  coverImage {
    large
    medium
  }
  description
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
  meanScore
  status
  studios(isMain: true) {
    nodes {
      name
    }
  }
  source
  synonyms
  tags {
    description
    isMediaSpoiler
    name
  }
  title {
    romaji
    english
  }
  type
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

export const validateTokenQuery = `
  {
    Viewer {
      id
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
        ${basicMediaFields}
      }
    }
  }
`;

export const relatedMediaIdsQuery = `
  query (
    ${filterTypes.listMediaCollection}
  ) {
    MediaListCollection (
      ${filterMappings.listMediaCollection}
    ) {
      lists {
        entries {
          status
          media {
            relations {
              edges {
                node {
                  id
                }
                relationType
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
        ${basicMediaFields}
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
    $animeId: Int,
    $mangaId: Int,
  ) {
    ToggleFavourite (
      animeId: $animeId,
      mangaId: $mangaId,
    ) {
      anime {
        nodes {
          id
          title {
            romaji
          }
        }
      }
      manga {
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
