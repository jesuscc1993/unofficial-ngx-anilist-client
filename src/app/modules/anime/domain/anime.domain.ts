import { MediaStatus } from '../../shared/types/anilist/media.types';

export const getStatusLiteral = (mediaStatus: MediaStatus) => {
  return `anime.statusValues.${mediaStatus}`;
};
