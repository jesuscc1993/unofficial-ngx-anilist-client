import { StartDate } from './dataTypes';
import { Media } from "./media";

export class Anime extends Media {
  startDate: StartDate;
  episodes: number;
  genres: string[];
  meanScore: number;
  format: string;
}