import { CoverImage, FuzzyDate, Tag, Title } from './dataTypes';
import { ListEntry } from './listEntry';

export class Media {
  averageScore: number;
  coverImage: CoverImage;
  description: string;
  duration: number;
  format: string;
  id: number;
  mediaListEntry: ListEntry;
  status: string;
  studios: any;
  tags: Tag[];
  title: Title;
  endDate?: FuzzyDate;
}