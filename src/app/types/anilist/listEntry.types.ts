import { Media } from './media.types';

export type ListEntry = {
  id?: number;
  scoreRaw?: number;
  status?: string;
  media?: Media;
  updatedAt?: number;
};
