import {
  filterMappings,
  filterTypes,
  listEntryFields,
  mediaFields,
  pageInfoFields,
} from '../../media/api/media.queries';

/* fields */

const animeFields = `${mediaFields}
  duration
  episodes
`;

const animeListEntryFields = `${listEntryFields}
  media {
    ${animeFields}
  }
`;

/* queries */

export const animeSearchQuery = `
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

export const animeListQuery = `
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

export const listFavoriteAnimeQuery = `
  query (
    $userId: Int!,
    $page: Int
  ) {
    User (
      id: $userId
    ) {
      favorites {
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

export const toggleFavoriteAnimeEntryQuery = `
  mutation (
    $animeId: Int
  ) {
    ToggleFavorite (
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
