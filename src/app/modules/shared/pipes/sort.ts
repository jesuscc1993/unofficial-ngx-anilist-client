import { Pipe, PipeTransform } from '@angular/core';

import { Comparable } from '../types/shared.types';

@Pipe({
  name: 'sort',
  standalone: false,
})
export class SortPipe implements PipeTransform {
  transform(array: Record<string, unknown>[], field: string, desc?: boolean) {
    const direction = desc ? -1 : 1;

    let sorted = array;
    if (sorted && sorted.length) {
      sorted = sorted.slice().sort((a, b) => {
        const valueA = a[field] as Comparable;
        const valueB = b[field] as Comparable;

        if (valueA < valueB) {
          return -1 * direction;
        } else if (valueA > valueB) {
          return 1 * direction;
        } else {
          return 0;
        }
      });
    }
    return sorted;
  }
}
