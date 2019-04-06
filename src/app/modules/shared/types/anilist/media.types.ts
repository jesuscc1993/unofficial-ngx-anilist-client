import { CoverImage, FuzzyDate, Tag, Title } from './dataTypes.types';
import { ListEntry } from './listEntry.types';
import { NodeList } from './nodeList.types';

export type MediaFormat = 'MOVIE' | 'MUSIC' | 'ONA' | 'OVA' | 'SPECIAL' | 'TV_SHORT' | 'TV';
export const mediaFormats: MediaFormat[] = ['MOVIE', 'MUSIC', 'ONA', 'OVA', 'SPECIAL', 'TV_SHORT', 'TV'];

export type MediaStatus = 'FINISHED' | 'RELEASING' | 'NOT_YET_RELEASED' | 'CANCELLED';
export const mediaStatuses: MediaStatus[] = ['FINISHED', 'RELEASING', 'NOT_YET_RELEASED', 'CANCELLED'];

export type Studio = {
  name: string;
};

export class MediaData {
  averageScore: number;
  coverImage: CoverImage;
  description: string;
  duration: number;
  format: MediaFormat;
  id: number;
  mediaListEntry: ListEntry;
  status: MediaStatus;
  studios: NodeList<Studio>;
  tags: Tag[];
  title: Title;
  endDate?: FuzzyDate;
}

export class Anime extends MediaData {
  startDate: FuzzyDate;
  episodes: number;
  genres: string[];
}

export type Media = Anime;
