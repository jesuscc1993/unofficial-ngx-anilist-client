import { ElementRef, Injectable } from '@angular/core';

@Injectable()
export class GenericUtil {
  static isSet(variable: any): boolean {
    return variable !== undefined && variable !== null;
  }

  static scrollTo(element: Element) {
    if (element) {
      element.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }

  static scrollToRef(elementRef: ElementRef) {
    if (elementRef && elementRef.nativeElement) {
      this.scrollTo(elementRef.nativeElement);
    }
  }
}
