import { CoverImage, StartDate, Title } from './dataTypes';

export class Anime {
  id: number;
  title: Title
  startDate: StartDate
  episodes: number;
  coverImage: CoverImage
  genres: string[];
  meanScore: number;
  format: string;
}