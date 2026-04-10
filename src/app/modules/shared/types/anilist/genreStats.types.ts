export type GenreStats = {
  // API
  amount: number;
  genre: string;
  meanScore: number;
  timeWatched: number;
  // enriched
  percentage?: number;
};
