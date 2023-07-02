import { Media } from '../../shared/types/anilist/media.types';
import { PageQuery } from '../../shared/types/anilist/pageInfo.types';
import { User } from '../../shared/types/anilist/user.types';
import { SearchFilters } from './media.types';

export interface MediaInterface {
  queryFavouriteIDs(user: User, callback: (favouriteIDs: number[]) => void);
  queryListEntries(user: User);
  queryMedia(query: SearchFilters, pageQuery?: PageQuery);
  queryMediaFromIds(Ids: number[], query: SearchFilters, pageQuery?: PageQuery);
  queryRelatedMediaIds(user: User);
  toggleFavourite(media: Media);
}
