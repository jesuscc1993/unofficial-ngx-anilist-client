import { mediaFormats } from './mediaFormats';

export class MediaFormat {
  label: string;
  value: string;

  constructor(value: string) {
    this.value = value;

    const matches: any[] = mediaFormats.filter((mediaType: any) => {
      return mediaType.value === value;
    });

    if (matches.length) {
      return matches[0];
    }
  }

}