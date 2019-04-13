import { Media } from './media.types';

export type ListEntryStatus = 'COMPLETED' | 'CURRENT' | 'DROPPED' | 'PAUSED' | 'PLANNING' | 'REPEATING';

export type ListEntry = {
  id?: number;
  scoreRaw?: number;
  status?: ListEntryStatus;
  media: Media;
  updatedAt?: number;
};

export type ListEntriesByStatus = { [Status in ListEntryStatus]?: ListEntry[] };
