import {
  filterMappings,
  filterTypes,
  listEntryFields,
  mediaFields,
  pageInfoFields,
} from '../../media/api/media.queries';

/* fields */

const mangaFields = `${mediaFields}
  chapters
  volumes
  staff(perPage: 3) {
    edges {
      role
      node {
        name {
          full
        }
      }
    }
  }
`;

const mangaListEntryFields = `${listEntryFields}
  media {
    ${mangaFields}
  }
`;

/* queries */

export const mangaSearchQuery = `
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
        ${mangaFields}
      }
    }
  }
`;

export const mangaListQuery = `
  query (
    ${filterTypes.mediaCollection}
  ) {
    MediaListCollection (
      ${filterMappings.mediaCollection}
    ) {
      lists {
        entries {
          ${mangaListEntryFields}
        }
      }
    }
  }
`;

export const mangaRecommendationsQuery = `
  query (
    $id: Int,
    $page: Int,
    $perPage: Int,
    $sort: [RecommendationSort]
  ) {
    Media (id: $id) {
      recommendations (
        page: $page,
        perPage: $perPage,
        sort: $sort
      ) {
        pageInfo {
          ${pageInfoFields}
        }
        nodes {
          mediaRecommendation {
            ${mangaFields}
          }
        }
      }
    }
  }
`;

export const listFavouriteMangaQuery = `
  query (
    $userId: Int!,
    $page: Int
  ) {
    User (
      id: $userId
    ) {
      favourites {
        manga (
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

export const toggleFavouriteMangaEntryQuery = `
  mutation (
    $mangaId: Int
  ) {
    ToggleFavourite (
      mangaId: $mangaId
    ) {
      manga {
        nodes {
          id
          title {
            romaji
            english
          }
        }
      }
    }
  }
`;
