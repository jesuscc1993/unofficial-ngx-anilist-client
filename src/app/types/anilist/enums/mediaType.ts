import { EnumMap } from '../../enumMap.types';

export class MediaTypes extends EnumMap {
  static ANIME: string = 'ANIME';

  static LIST = [{ label: 'Anime', value: 'ANIME' }];

  constructor(value: string) {
    super(value, MediaTypes.LIST, true);
  }
}
