import { environment } from '../environments/environment';

export const apiLoginUrl: string = `https://anilist.co/api/v2/oauth/authorize?client_id=${ environment.anilist_client_id }&response_type=token`;