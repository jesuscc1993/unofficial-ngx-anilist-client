import { environment } from '../environments/environment';
import { ModalOptions } from './modules/shared/types/modal.types';

export const apiUrl = 'https://graphql.anilist.co';
export const apiLoginUrl = `https://anilist.co/api/v2/oauth/authorize?client_id=${environment.anilistClientId}&response_type=token`;
export const apiTokenPrefix = '#access_token=';

export const accessTokenCookieKey = 'accessToken';
export const userCookieKey = 'user';

export const animeSearchUrl = '/anime-search';
export const mangaSearchUrl = '/manga-search';
export const animeDashboardUrl = '/anime-dashboard';
export const userAnimeListUrl = '/user-anime-list';
export const rootUrl = animeSearchUrl;

export const integerPattern = /^\d+$/;
export const scorePattern = /^0*([0-9]|10)(\.[0-9]{1,2})?$/;

export const pageSizeOptions = [5, 10, 25, 50];

export const defaultModalOptions: ModalOptions = {
  minWidth: '480px',
  width: 'auto',
  maxWidth: '672px',
};
