import { Media } from '../../shared/types/anilist/media.types';
import { PageQuery } from '../../shared/types/anilist/pageInfo.types';
import { User } from '../../shared/types/anilist/user.types';
import { SearchFilters } from './media.types';

export interface MediaInterface {
  queryFavouriteIDs(user: User, callback: (favouriteIDs: number[]) => void);
  queryFromIds(Ids: number[], query: SearchFilters, pageQuery?: PageQuery);
  queryList(user: User);
  queryRelatedIds(user: User);
  querySearch(query: SearchFilters, pageQuery?: PageQuery);
  toggleFavourite(media: Media);
}
