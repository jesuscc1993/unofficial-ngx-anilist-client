import { MediaStatus } from '../../shared/types/anilist/media.types';

export const getMangaStatusLiteral = (mediaStatus: MediaStatus) => {
  return `manga.statusValues.${mediaStatus}`;
};
