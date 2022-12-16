export type Title = {
  romaji: string;
};

export type FuzzyDate = {
  year: number;
  month: number;
  day: number;
};

export enum CoverImageSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export type CoverImage = {
  [CoverImageSize.Large]: string;
  [CoverImageSize.Medium]: string;
};

export type Tag = {
  description: string;
  isMediaSpoiler: boolean;
  name: string;
};
