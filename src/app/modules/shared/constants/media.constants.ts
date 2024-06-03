import {
  MediaCountry,
  MediaFormat,
  MediaRelationType,
  MediaSort,
  MediaStatus,
} from '../types/anilist/media.types';

export const basicMediaSorts = [
  MediaSort.END_DATE_DESC,
  MediaSort.SCORE_DESC,
  MediaSort.TITLE_ROMAJI,
];

export const mediaFormats = [
  MediaFormat.MOVIE,
  MediaFormat.MUSIC,
  MediaFormat.ONA,
  MediaFormat.OVA,
  MediaFormat.SPECIAL,
  MediaFormat.TV,
  MediaFormat.TV_SHORT,
];

export const mediaStatuses = [
  MediaStatus.CANCELLED,
  MediaStatus.FINISHED,
  MediaStatus.NOT_YET_RELEASED,
  MediaStatus.RELEASING,
];

export const mediaCountries = [
  undefined,
  MediaCountry.CN,
  MediaCountry.JP,
  MediaCountry.KR,
  MediaCountry.TW,
];

export const relatedMediaRelationTypes = [
  MediaRelationType.ADAPTATION,
  MediaRelationType.ALTERNATIVE,
  // MediaRelationType.CHARACTER,
  // MediaRelationType.COMPILATION,
  MediaRelationType.CONTAINS,
  MediaRelationType.OTHER,
  MediaRelationType.PARENT,
  MediaRelationType.PREQUEL,
  MediaRelationType.SEQUEL,
  MediaRelationType.SIDE_STORY,
  MediaRelationType.SOURCE,
  MediaRelationType.SPIN_OFF,
  // MediaRelationType.SUMMARY,
];

export const mediaScores = [undefined, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5];

export const gridCardWidth = 96;
export const gridSpacing = 4;
