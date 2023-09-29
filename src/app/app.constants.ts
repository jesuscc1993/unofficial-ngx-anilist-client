import { MatDialogConfig } from '@angular/material/dialog';

import { environment } from '../environments/environment';

export const apiUrl = 'https://graphql.anilist.co';
export const apiLoginUrl = `https://anilist.co/api/v2/oauth/authorize?client_id=${environment.anilistClientId}&response_type=token`;
export const apiTokenPrefix = '#access_token=';

export const animeSearchUrl = '/anime-search';
export const mangaSearchUrl = '/manga-search';
export const animeDashboardUrl = '/anime-dashboard';
export const userAnimeListUrl = '/user-anime-list';
export const rootUrl = animeSearchUrl;

export const integerPattern = /^\d+$/;
export const scorePattern = /^0*([0-9]|10)(\.[0-9]{1,2})?$/;

export const minMediaYear = 1900;

export const pageSizeOptions = [5, 10, 25, 50, 100];

export const mediumModalOptions: MatDialogConfig = {
  minWidth: '480px',
  maxWidth: '672px',
};

export const largeModalOptions: MatDialogConfig = {
  minWidth: '720px',
  maxWidth: '896px',
};
