export type Title = {
  romaji: string;
};

export type FuzzyDate = {
  year: number;
  month: number;
  day: number;
};

export type CoverImage = {
  medium: string;
  large: string;
};

export type Tag = {
  description: string;
  isMediaSpoiler: boolean;
  name: string;
};
