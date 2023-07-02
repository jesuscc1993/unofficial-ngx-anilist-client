import { Anime, MediaStatus } from '../../shared/types/anilist/media.types';

export const getAnimeStatusLiteral = (mediaStatus: MediaStatus) => {
  return `anime.statusValues.${mediaStatus}`;
};

export const getFormattedAnimeDuration = (anime: Anime) => {
  return anime.duration < 60
    ? `${anime.duration}m`
    : `${Math.floor(anime.duration / 60)}h ${anime.duration % 60}m`;
};
