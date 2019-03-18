import { FuzzyDate } from './dataTypes.types';
import { Media } from './media.types';

export class Anime extends Media {
  startDate: FuzzyDate;
  episodes: number;
  genres: string[];
}
