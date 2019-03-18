import { CoverImage, FuzzyDate, Tag, Title } from './dataTypes.types';
import { ListEntry } from './listEntry.types';

export class Media {
  averageScore: number;
  coverImage: CoverImage;
  description: string;
  duration: number;
  format: string;
  id: number;
  mediaListEntry: ListEntry;
  status: string;
  studios: NodeList;
  tags: Tag[];
  title: Title;
  endDate?: FuzzyDate;
}
