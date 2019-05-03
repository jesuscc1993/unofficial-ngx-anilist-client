import { Media } from './anilist/media.types';
import { PageInfo } from './anilist/pageInfo.types';

export type MediaPage = {
  media: Media[];
  pageInfo: PageInfo;
};
