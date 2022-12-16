import { Media } from './media.types';

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

export enum ListEntryStatus {
  COMPLETED = 'COMPLETED',
  CURRENT = 'CURRENT',
  DROPPED = 'DROPPED',
  PAUSED = 'PAUSED',
  PLANNING = 'PLANNING',
  REPEATING = 'REPEATING',
}
