import { Media } from './media.types';

export type ListEntryStatus = 'COMPLETED' | 'CURRENT' | 'DROPPED' | 'PAUSED' | 'PLANNING' | 'REPEATING';

export type ListEntry = {
  id?: number;
  scoreRaw?: number;
  status?: ListEntryStatus;
  media: Media;
  repeat?: number;
  updatedAt?: number;
};

export type ListEntriesByStatus = { [Status in ListEntryStatus]?: ListEntry[] };
