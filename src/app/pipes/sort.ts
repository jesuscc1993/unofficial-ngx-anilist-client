import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(array: any[], field: string, desc?: boolean): any[] {
    const direction: number = desc ? -1 : 1;

    if (array && array.length) {
      array.sort((a: any, b: any) => {
        if (a[field] < b[field]) {
          return -1 * direction;
        } else if (a[field] > b[field]) {
          return 1 * direction;
        } else {
          return 0;
        }
      });
    }
    return array;
  }
}