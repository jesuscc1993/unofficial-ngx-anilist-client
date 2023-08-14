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

export const listFavoriteMangaQuery = `
  query (
    $userId: Int!,
    $page: Int
  ) {
    User (
      id: $userId
    ) {
      favorites {
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

export const toggleFavoriteMangaEntryQuery = `
  mutation (
    $mangaId: Int
  ) {
    ToggleFavorite (
      mangaId: $mangaId
    ) {
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
