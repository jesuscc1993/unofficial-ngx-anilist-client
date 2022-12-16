import { CoverImage } from '../types/anilist/dataTypes.types';

export const getSmallCoverImage = (coverImage?: CoverImage) => {
  return coverImage?.medium
    ? coverImage.medium.replace(/\/medium\//, 'small')
    : undefined;
};
