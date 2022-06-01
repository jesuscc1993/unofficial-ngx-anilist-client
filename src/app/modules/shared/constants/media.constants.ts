import { MediaFormat, MediaSort, MediaStatus } from '../types/anilist/media.types';

export const basicMediaSorts: MediaSort[] = [
  MediaSort.END_DATE_DESC,
  MediaSort.SCORE_DESC,
  MediaSort.TITLE_ROMAJI,
];

export const mediaFormats: MediaFormat[] = [
  MediaFormat.MOVIE,
  MediaFormat.MUSIC,
  MediaFormat.ONA,
  MediaFormat.OVA,
  MediaFormat.SPECIAL,
  MediaFormat.TV,
  MediaFormat.TV_SHORT,
];

export const mediaStatuses: MediaStatus[] = [
  MediaStatus.CANCELLED,
  MediaStatus.FINISHED,
  MediaStatus.NOT_YET_RELEASED,
  MediaStatus.RELEASING,
];
