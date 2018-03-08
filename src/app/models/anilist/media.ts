import { CoverImage, Tag, Title } from './dataTypes';
import { ListEntry } from './listEntry';

export class Media {
  coverImage: CoverImage;
  description: string;
  id: number;
  meanScore: number;
  mediaListEntry: ListEntry;
  tags: Tag[];
  title: Title;
}