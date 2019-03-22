import { ListEntryStatus } from '../listEntry.types';

export const listEntryStatusValues: { label: string; value: ListEntryStatus }[] = [
  { label: 'Completed', value: 'COMPLETED' },
  { label: 'Dropped', value: 'DROPPED' },
  { label: 'Paused', value: 'PAUSED' },
  { label: 'Planned', value: 'PLANNING' },
  { label: 'Repeating', value: 'REPEATING' },
  { label: 'Watching', value: 'CURRENT' },
];
