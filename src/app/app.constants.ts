import { environment } from '../environments/environment';
import { ModalOptions } from './modules/shared/types/modal.types';

export const apiUrl = 'https://graphql.anilist.co';
export const apiLoginUrl = `https://anilist.co/api/v2/oauth/authorize?client_id=${
  environment.anilist_client_id
}&response_type=token`;
export const apiTokenPrefix = '#access_token=';

export const accessTokenCookieKey = 'accessToken';
export const userCookieKey = 'user';

export const dashboardUrl = '/dashboard';
export const animeSearchUrl = '/anime-search';
export const userListUrl = '/user-anime-list';
export const rootUrl = animeSearchUrl;

export const integerPattern = /^\d+$/;
export const scorePattern = /^([0-9]|10)(\.[0-9]{1})?$/;

export const defaultModalOptions: ModalOptions = {
  minWidth: '480px',
  width: 'auto',
  maxWidth: '672px',
};
