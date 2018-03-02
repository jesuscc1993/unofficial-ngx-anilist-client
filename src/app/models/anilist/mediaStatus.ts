import { EnumMap } from '../enumMap';

export class MediaStatus extends EnumMap {
  static CURRENT: string = 'CURRENT';
  static PLANNING: string = 'PLANNING';
  static COMPLETED: string = 'COMPLETED';
  static DROPPED: string = 'DROPPED';
  static PAUSED: string = 'PAUSED';
  static REPEATING: string = 'REPEATING';

  static LIST: any[] = [
    { label: 'Watching', value: 'CURRENT' },
    { label: 'Planned', value: 'PLANNING' },
    { label: 'Completed', value: 'COMPLETED' },
    { label: 'Dropped', value: 'DROPPED' },
    { label: 'Paused', value: 'PAUSED' },
    { label: 'Repeating', value: 'REPEATING' }
  ];

  constructor(value: string) {
    super(value, MediaStatus.LIST);
  }
}