import { ListEntryStatus } from '../types/anilist/listEntry.types';
import {
  MediaCountry, MediaRelationType, MediaSort, MediaSource, MediaStatus, StaffRole,
} from '../types/anilist/media.types';

export const basicMediaSorts = [
  MediaSort.END_DATE_DESC,
  MediaSort.SCORE_DESC,
  MediaSort.TITLE_ROMAJI,
];

export const mediaStatuses = [
  MediaStatus.CANCELLED,
  MediaStatus.FINISHED,
  MediaStatus.NOT_YET_RELEASED,
  MediaStatus.RELEASING,
];

export const mediaSources = [
  MediaSource.ANIME,
  MediaSource.DOUJINSHI,
  MediaSource.GAME,
  MediaSource.LIGHT_NOVEL,
  MediaSource.MANGA,
  MediaSource.NOVEL,
  MediaSource.ORIGINAL,
  MediaSource.OTHER,
  MediaSource.VIDEO_GAME,
  MediaSource.VISUAL_NOVEL,
];

export const mediaCountries = [
  MediaCountry.CN,
  MediaCountry.JP,
  MediaCountry.KR,
  MediaCountry.TW,
];

export const staffRoles = [
  StaffRole.Art,
  StaffRole.OriginalCreator,
  StaffRole.Story,
  StaffRole.StoryAndArt,
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

export const listEntryStatuses: string[] = [
  ListEntryStatus.COMPLETED,
  ListEntryStatus.CURRENT,
  ListEntryStatus.DROPPED,
  ListEntryStatus.PAUSED,
  ListEntryStatus.PLANNING,
  ListEntryStatus.REPEATING,
];

export const mediaScores = [undefined, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5];

export const gridCardWidth = 96;
export const gridSpacing = 4;
