import { GenreStats } from '../media.types';

export type UserAvatar = {
  large: string;
};

export type UserOptions = {
  displayAdultContent: boolean;
};

export type UserStats = {
  favouredGenresOverview: GenreStats[];
  watchedTime: number;
};

export type User = {
  avatar: UserAvatar;
  id: number;
  name: string;
  options: UserOptions;
  stats: UserStats;
};
