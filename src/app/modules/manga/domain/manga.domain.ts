import { MediaStatus } from '../../shared/types/anilist/media.types';

export const getStatusLiteral = (mediaStatus: MediaStatus) => {
  return `manga.statusValues.${mediaStatus}`;
};
