import { EnumMap } from '../enumMap';

export class MediaFormat extends EnumMap {
  static MOVIE: string = 'MOVIE';
  static MUSIC: string = 'MUSIC';
  static ONA: string = 'ONA';
  static OVA: string = 'OVA';
  static SPECIAL: string = 'SPECIAL';
  static TV: string = 'TV';
  static TV_SHORT: string = 'TV_SHORT';

  static LIST: any[] = [
    { label: 'Movie', value: 'MOVIE' },
    { label: 'Music', value: 'MUSIC' },
    { label: 'ONA', value: 'ONA' },
    { label: 'OVA', value: 'OVA' },
    { label: 'Special', value: 'SPECIAL' },
    { label: 'TV short', value: 'TV_SHORT' },
    { label: 'TV', value: 'TV' }
  ];

  constructor(value: string) {
    super(value, MediaFormat.LIST, true);
  }

}