import { Media } from '../../../types/anilist/media.types';

export const getFormattedMediaDuration = (media: Media): string => {
  return media.duration < 60 ? `${media.duration}m` : `${Math.floor(media.duration / 60)}h ${media.duration % 60}m`;
};

export const getDateScalarFromYear = (year: number): number => {
  return year * 10000;
};
