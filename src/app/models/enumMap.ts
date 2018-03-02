export class EnumMap {
  label: string;
  value: string;

  constructor(value: string, mapping: any[]) {
    this.value = value;

    const matches: any[] = mapping.filter((mediaType: any) => {
      return mediaType.value === value;
    });

    if (matches.length) {
      const match: any = matches[0];
      this.label = match.label;
      return match;
    }
  }
}