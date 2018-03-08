import { EnumMap } from '../enumMap';

export class MediaStatus extends EnumMap {
  static FINISHED: string = 'FINISHED';
  static RELEASING: string = 'RELEASING';
  static NOT_YET_RELEASED: string = 'NOT_YET_RELEASED';
  static CANCELLED: string = 'CANCELLED';

  static LIST: any[] = [
    { label: 'Finished', value: 'FINISHED' },
    { label: 'Airing', value: 'RELEASING' },
    { label: 'Unaired', value: 'NOT_YET_RELEASED' },
    { label: 'Cancelled', value: 'CANCELLED' }
  ];

  constructor(value: string) {
    super(value, MediaStatus.LIST, true);
  }

}