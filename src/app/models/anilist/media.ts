import { CoverImage, Title } from './dataTypes';

export class Media {
  id: number;
  title: Title;
  description: string;
  coverImage: CoverImage;
  meanScore: number;
}