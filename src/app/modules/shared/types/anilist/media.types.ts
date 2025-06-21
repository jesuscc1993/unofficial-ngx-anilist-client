import { CoverImage, FuzzyDate, Tag, Title } from './dataTypes.types';
import { ListEntry } from './listEntry.types';
import { NodeList } from './nodeList.types';

export type Studio = {
  name: string;
};

export class MediaData {
  averageScore: number;
  countryOfOrigin?: MediaCountry;
  coverImage: CoverImage;
  description: string;
  endDate?: FuzzyDate;
  format: MediaFormat;
  genres: string[];
  id: number;
  meanScore: number;
  mediaListEntry: ListEntry;
  startDate: FuzzyDate;
  status: MediaStatus;
  studios: NodeList<Studio>;
  synonyms: string[];
  tags: Tag[];
  title: Title;
  type: MediaType;
}

export class Anime extends MediaData {
  episodes: number;
  duration: number;
}

export class Manga extends MediaData {
  chapters: number;
  volumes: number;
}

export type Media = Anime | Manga;

export enum MediaType {
  ANIME = 'ANIME',
  MANGA = 'MANGA',
}

export enum MediaFormat {
  MANGA = 'MANGA',
  MOVIE = 'MOVIE',
  MUSIC = 'MUSIC',
  NOVEL = 'NOVEL',
  ONA = 'ONA',
  ONE_SHOT = 'ONE_SHOT',
  OVA = 'OVA',
  SPECIAL = 'SPECIAL',
  TV = 'TV',
  TV_SHORT = 'TV_SHORT',
}

export enum MediaSort {
  CHAPTERS = 'CHAPTERS',
  CHAPTERS_DESC = 'CHAPTERS_DESC',
  DURATION = 'DURATION',
  DURATION_DESC = 'DURATION_DESC',
  END_DATE = 'END_DATE',
  END_DATE_DESC = 'END_DATE_DESC',
  EPISODES = 'EPISODES',
  EPISODES_DESC = 'EPISODES_DESC',
  FORMAT = 'FORMAT',
  FORMAT_DESC = 'FORMAT_DESC',
  ID = 'ID',
  ID_DESC = 'ID_DESC',
  POPULARITY = 'POPULARITY',
  POPULARITY_DESC = 'POPULARITY_DESC',
  SCORE = 'SCORE',
  SCORE_DESC = 'SCORE_DESC',
  SEARCH_MATCH = 'SEARCH_MATCH',
  START_DATE = 'START_DATE',
  START_DATE_DESC = 'START_DATE_DESC',
  STATUS = 'STATUS',
  STATUS_DESC = 'STATUS_DESC',
  TITLE_ENGLISH = 'TITLE_ENGLISH',
  TITLE_ENGLISH_DESC = 'TITLE_ENGLISH_DESC',
  TITLE_NATIVE = 'TITLE_NATIVE',
  TITLE_NATIVE_DESC = 'TITLE_NATIVE_DESC',
  TITLE_ROMAJI = 'TITLE_ROMAJI',
  TITLE_ROMAJI_DESC = 'TITLE_ROMAJI_DESC',
  TRENDING = 'TRENDING',
  TRENDING_DESC = 'TRENDING_DESC',
  TYPE = 'TYPE',
  TYPE_DESC = 'TYPE_DESC',
  UPDATED_AT = 'UPDATED_AT',
  UPDATED_AT_DESC = 'UPDATED_AT_DESC',
  VOLUMES = 'VOLUMES',
  VOLUMES_DESC = 'VOLUMES_DESC',
}

export enum MediaListSort {
  ADDED_TIME = 'ADDED_TIME',
  ADDED_TIME_DESC = 'ADDED_TIME_DESC',
  FINISHED_ON = 'FINISHED_ON',
  FINISHED_ON_DESC = 'FINISHED_ON_DESC',
  MEDIA_ID = 'MEDIA_ID',
  MEDIA_ID_DESC = 'MEDIA_ID_DESC',
  PRIORITY = 'PRIORITY',
  PRIORITY_DESC = 'PRIORITY_DESC',
  PROGRESS = 'PROGRESS',
  PROGRESS_DESC = 'PROGRESS_DESC',
  PROGRESS_VOLUMES = 'PROGRESS_VOLUMES',
  PROGRESS_VOLUMES_DESC = 'PROGRESS_VOLUMES_DESC',
  REPEAT = 'REPEAT',
  REPEAT_DESC = 'REPEAT_DESC',
  SCORE = 'SCORE',
  SCORE_DESC = 'SCORE_DESC',
  STARTED_ON = 'STARTED_ON',
  STARTED_ON_DESC = 'STARTED_ON_DESC',
  STATUS = 'STATUS',
  STATUS_DESC = 'STATUS_DESC',
  UPDATED_TIME = 'UPDATED_TIME',
  UPDATED_TIME_DESC = 'UPDATED_TIME_DESC',
}

export enum MediaStatus {
  FINISHED = 'FINISHED',
  RELEASING = 'RELEASING',
  NOT_YET_RELEASED = 'NOT_YET_RELEASED',
  CANCELLED = 'CANCELLED',
}

export enum MediaRelationType {
  ADAPTATION = 'ADAPTATION',
  ALTERNATIVE = 'ALTERNATIVE',
  CHARACTER = 'CHARACTER',
  COMPILATION = 'COMPILATION',
  CONTAINS = 'CONTAINS',
  OTHER = 'OTHER',
  PARENT = 'PARENT',
  PREQUEL = 'PREQUEL',
  SEQUEL = 'SEQUEL',
  SIDE_STORY = 'SIDE_STORY',
  SOURCE = 'SOURCE',
  SPIN_OFF = 'SPIN_OFF',
  SUMMARY = 'SUMMARY',
}

export enum MediaCountry {
  JP = 'JP',
  KR = 'KR',
  TW = 'TW',
  CN = 'CN',
}
