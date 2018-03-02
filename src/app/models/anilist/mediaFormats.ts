import { EnumMap } from '../enumMap';

export class MediaFormat extends EnumMap {
  static TV: string = 'TV';
  static TV_SHORT: string = 'TV_SHORT';
  static MOVIE: string = 'MOVIE';
  static SPECIAL: string = 'SPECIAL';
  static OVA: string = 'OVA';
  static ONA: string = 'ONA';
  static MUSIC: string = 'MUSIC';

  static LIST: any[] = [
    { label: 'TV', value: 'TV' },
    { label: 'TV short', value: 'TV_SHORT' },
    { label: 'Movie', value: 'MOVIE' },
    { label: 'Special', value: 'SPECIAL' },
    { label: 'OVA', value: 'OVA' },
    { label: 'ONA', value: 'ONA' },
    { label: 'Music', value: 'MUSIC' }
  ];

  constructor(value: string) {
    super(value, MediaFormat.LIST);
  }

}