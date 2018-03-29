import { FuzzyDate } from './dataTypes';
import { Media } from './media';

export class Anime extends Media {
  startDate: FuzzyDate;
  episodes: number;
  genres: string[];
}