import { Anime } from '../types/anilist/anime.types';
import { ListEntryStatus } from '../types/anilist/enums/listEntryStatus';
import { MediaFormat } from '../types/anilist/enums/mediaFormats';
import { MediaStatus } from '../types/anilist/enums/mediaStatus';
import { ListEntry } from '../types/anilist/listEntry.types';
import { Media } from '../types/anilist/media.types';
import { MediaQuery } from '../types/anilist/query.types';

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
  'status_not_in'
];

export const mapQueryFilters = (query: MediaQuery, options: any) => {
  searchFilters.forEach((filter: string) => {
    if (query[filter] && query[filter].length !== 0) {
      options[filter] = query[filter];
    }
  });
};

export const getParsedAnime = (anime: Anime) => {
  const parsedAnime = { ...anime };

  if (parsedAnime) {
    if (parsedAnime.format) {
      parsedAnime.format = new MediaFormat(parsedAnime.format).label;
    }

    if (parsedAnime.status) {
      parsedAnime.status = new MediaStatus(parsedAnime.status).label;
    }

    if (parsedAnime.coverImage && parsedAnime.coverImage.medium === 'https://cdn.anilist.co/img/dir/anime/med/noimg.jpg') {
      parsedAnime.coverImage.medium = fallbackCover;
    }

    if (parsedAnime.mediaListEntry) {
      getParsedListEntry(parsedAnime.mediaListEntry);
    }
  }

  return parsedAnime;
};

export const getParsedListEntry = (listEntry: ListEntry) => {
  const parsedListEntry = { ...listEntry };

  if (parsedListEntry) {
    if (parsedListEntry.status) {
      parsedListEntry.status = new ListEntryStatus(parsedListEntry.status).value;
    }

    if (parsedListEntry.media) {
      getParsedAnime(<Anime>parsedListEntry.media);
    }
  }

  return parsedListEntry;
};

export const getFormattedMediaDuration = (media: Media) => {
  return media.duration < 60 ? `${media.duration}m` : `${Math.floor(media.duration / 60)}h ${media.duration % 60}m`;
};
