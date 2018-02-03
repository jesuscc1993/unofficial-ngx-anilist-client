import { mediaFormats } from './mediaFormats';

export class MediaFormat {
  label: string;
  value: string;

  constructor(value: string) {
    this.value = value;
    this.label = mediaFormats.filter((mediaType: any) => {
      return mediaType.value === value;
    })[0].label;
  }

}