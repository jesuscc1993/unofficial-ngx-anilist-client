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

/* eslint-disable @typescript-eslint/naming-convention */
export enum ListEntryStatus {
  COMPLETED = 'COMPLETED',
  CURRENT = 'CURRENT',
  DROPPED = 'DROPPED',
  PAUSED = 'PAUSED',
  PLANNING = 'PLANNING',
  REPEATING = 'REPEATING',
}
/* eslint-enable @typescript-eslint/naming-convention */
