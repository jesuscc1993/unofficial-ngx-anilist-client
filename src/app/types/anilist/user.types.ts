export type UserAvatar = {
  large: string;
};

export type UserOptions = {
  displayAdultContent: boolean;
};

export type UserStats = {
  favouredGenresOverview: {
    amount: number;
    genre: string;
    meanScore: number;
    timeWatched: number;
  };
  watchedTime: number;
};

export type User = {
  avatar: UserAvatar;
  id: number;
  name: string;
  options: UserOptions;
  stats: UserStats;
};
