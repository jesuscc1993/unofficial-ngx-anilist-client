import { MediaStatus } from '../models/anilist/mediaStatus';

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
    
    $page: Int,
    $perPage: Int
  ) {
    Page (
      page: $page,
      perPage: $perPage
    ) {
      pageInfo {
        ${pageInfoFields}
      }
      media (
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
        id: $id
      ) {
        ${searchAnimeFields}
      }
    }
  }
`;

export const listQuery: string = `
  query (
    $listType: MediaType,
    $sort: [MediaListSort],
    $userId: Int!
  ) {
    MediaListCollection (
      sort: $sort,
      type: $listType,
      userId: $userId
    ) {
      statusLists {
        ${listEntryFields}
      }
    }
  }
`;

export const listMediaIdsQuery: string = `
  query (
    $listType: MediaType,
    $sort: [MediaListSort],
    $userId: Int!
  ) {
    MediaListCollection (
      sort: $sort,
      type: $listType,
      userId: $userId
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
    $listType: MediaType,
    $sort: [MediaListSort],
    $userId: Int!,
    
    $page: Int,
    $perPage: Int
  ) {
    Page (
      page: $page,
      perPage: $perPage
    ) {
      mediaList (
        sort: $sort,
        type: $listType,
        userId: $userId
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
    
    $page: Int,
    $perPage: Int
  ) {
    Page (
      page: $page,
      perPage: $perPage
    ) {
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