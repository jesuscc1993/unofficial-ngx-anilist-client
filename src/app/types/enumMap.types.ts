type EnummapValue = {
  label: string;
  value: any;
};

export class EnumMap {
  label: string;
  value: string;

  constructor(value: string, mapping: EnummapValue[], ignoreCase?: boolean) {
    return mapping.find(mediaType => (ignoreCase ? mediaType.value.toLowerCase() === value.toLowerCase() : mediaType.value === value));
  }
}
