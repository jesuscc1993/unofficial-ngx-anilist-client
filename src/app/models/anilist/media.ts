import { CoverImage, Tag, Title } from './dataTypes';
import { ListEntry } from './listEntry';

export class Media {
  coverImage: CoverImage;
  description: string;
  id: number;
  meanScore: number;
  mediaListEntry: ListEntry;
  status: string;
  studios: any;
  tags: Tag[];
  title: Title;
}