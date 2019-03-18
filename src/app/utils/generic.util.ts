import { ElementRef, Injectable } from '@angular/core';

@Injectable()
export class GenericUtil {
  constructor() {}

  public static isSet(variable: any): boolean {
    return variable !== undefined && variable !== null;
  }

  public static scrollTo(element: Element) {
    if (element) {
      element.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }

  public static scrollToRef(elementRef: ElementRef) {
    if (elementRef && elementRef.nativeElement) {
      this.scrollTo(elementRef.nativeElement);
    }
  }
}
