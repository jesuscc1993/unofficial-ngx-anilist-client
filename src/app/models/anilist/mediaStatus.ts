import { EnumMap } from '../enumMap';

export class MediaStatus extends EnumMap {
  static CURRENT: string = 'current';
  static PLANNING: string = 'planning';
  static COMPLETED: string = 'completed';
  static DROPPED: string = 'dropped';
  static PAUSED: string = 'paused';
  static REPEATING: string = 'repeating';

  static LIST: any[] = [
    { label: 'Watching', value: 'current' },
    { label: 'Planned', value: 'planning' },
    { label: 'Completed', value: 'completed' },
    { label: 'Dropped', value: 'dropped' },
    { label: 'Paused', value: 'paused' },
    { label: 'Repeating', value: 'repeating' }
  ];

  shown: boolean = true;

  constructor(value: string) {
    super(value, MediaStatus.LIST, true);
  }
}