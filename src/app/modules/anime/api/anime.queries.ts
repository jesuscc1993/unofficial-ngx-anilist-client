import {
  filterMappings, filterTypes, listEntryFields, mediaFields, pageInfoFields,
} from '../../media/api/media.queries';

/* fields */

const animeFields = `${mediaFields}
  duration
  episodes
  studios(isMain: true) {
    nodes {
      name
    }
  }
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

export const toggleFavouriteAnimeEntryQuery = `
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
            english
          }
        }
      }
    }
  }
`;
