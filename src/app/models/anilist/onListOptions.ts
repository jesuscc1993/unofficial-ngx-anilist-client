import { EnumMap } from '../enumMap';

export class OnListOptions extends EnumMap {
  static LIST: any[] = [
    { label: 'Not on list', value: false },
    { label: 'On list only', value: true },
    { label: 'Both', value: undefined }
  ];

  constructor(value: string) {
    super(value, OnListOptions.LIST, true);
  }

}