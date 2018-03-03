export class EnumMap {
  label: string;
  value: string;

  constructor(value: string, mapping: any[], ignoreCase?: boolean) {
    const matches: any[] = mapping.filter((mediaType: any) => {
      return ignoreCase ? mediaType.value.toLowerCase() === value.toLowerCase() : mediaType.value === value;
    });

    if (matches.length) {
      return matches[0];
    }
  }

}