import { Media } from './media.types';

export type ListEntryStatus = 'COMPLETED' | 'CURRENT' | 'DROPPED' | 'PAUSED' | 'PLANNING' | 'REPEATING';
export const listEntryStatuses: ListEntryStatus[] = [
  'COMPLETED',
  'DROPPED',
  'PAUSED',
  'PLANNING',
  'REPEATING',
  'CURRENT',
];

export type ListEntry = {
  id?: number;
  scoreRaw?: number;
  status?: ListEntryStatus;
  media: Media;
  progress?: number;
  repeat?: number;
  updatedAt?: number;
};

export type ListEntriesByStatus = { [Status in ListEntryStatus]?: ListEntry[] };
