import { CoverImage, CoverImageSize } from '../types/anilist/dataTypes.types';

export const getSizedCoverImage = (
  coverImage: CoverImage | undefined = undefined,
  size = CoverImageSize.Medium
) => {
  return coverImage?.medium
    ? coverImage.medium.replace(/\/(small|medium|large)\//, `/${size}/`)
    : undefined;
};
