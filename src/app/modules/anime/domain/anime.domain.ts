import { SearchFilters } from '../../../api/anime/anime-api.types';
import { Anime } from '../../../types/anilist/anime.types';
import { ListEntry } from '../../../types/anilist/listEntry.types';
import { Media } from '../../../types/anilist/media.types';

const fallbackCover = 'assets/pictures/non-vectorial/no-cover-available.png';

const searchFilters = [
  'id',
  'search',
  'startDate_greater',
  'startDate_lesser',
  'averageScore_greater',
  'averageScore_lesser',
  'genre_in',
  'genre_not_in',
  'format_in',
  'format_not_in',
  'status_in',
  'status_not_in',
];

export const mapQueryFilters = (query: SearchFilters, options: any) => {
  const mappedFilters: SearchFilters = { ...options };

  searchFilters.forEach((filter: string) => {
    if (query[filter] && query[filter].length !== 0) {
      mappedFilters[filter] = query[filter];
    }
  });

  return mappedFilters;
};

export const getParsedAnime = (anime: Partial<Anime>): Partial<Anime> => {
  const parsedAnime = { ...anime };

  if (parsedAnime) {
    if (
      parsedAnime.coverImage &&
      parsedAnime.coverImage.medium === 'https://cdn.anilist.co/img/dir/anime/med/noimg.jpg'
    ) {
      parsedAnime.coverImage.medium = fallbackCover;
    }

    if (parsedAnime.mediaListEntry) {
      getParsedListEntry(parsedAnime.mediaListEntry);
    }
  }

  return parsedAnime;
};

export const getParsedListEntry = (listEntry: Partial<ListEntry>): Partial<ListEntry> => {
  const parsedListEntry = { ...listEntry };

  if (parsedListEntry) {
    if (parsedListEntry.media) {
      getParsedAnime(<Anime>parsedListEntry.media);
    }
  }

  return parsedListEntry;
};

export const getFormattedMediaDuration = (media: Media) => {
  return media.duration < 60 ? `${media.duration}m` : `${Math.floor(media.duration / 60)}h ${media.duration % 60}m`;
};
