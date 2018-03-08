import { EnumMap } from '../enumMap';

export class ListEntryStatus extends EnumMap {
  static COMPLETED: string = 'completed';
  static CURRENT: string = 'current';
  static DROPPED: string = 'dropped';
  static PAUSED: string = 'paused';
  static PLANNING: string = 'planning';
  static REPEATING: string = 'repeating';

  static LIST: any[] = [
    { label: 'Completed', value: 'completed' },
    { label: 'Dropped', value: 'dropped' },
    { label: 'Paused', value: 'paused' },
    { label: 'Planned', value: 'planning' },
    { label: 'Repeating', value: 'repeating' },
    { label: 'Watching', value: 'current' }
  ];

  shown: boolean = true;

  constructor(value: string) {
    super(value, ListEntryStatus.LIST, true);
  }
}