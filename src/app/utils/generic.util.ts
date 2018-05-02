import { Injectable, ElementRef } from '@angular/core';

@Injectable()
export class GenericUtil {

  constructor(

  ) {

  }

  public static isSet(variable: any): boolean {
    return variable !== undefined && variable !== null;
  }

  public static scrollToTop(): void {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

  public static scrollTo(element: any): void {
    if (element) {
      element.scrollIntoView({ block: 'start',  behavior: 'smooth' });
    }
  }

  public static scrollToRef(elementRef: ElementRef): void {
    if (elementRef && elementRef.nativeElement) {
      this.scrollTo(elementRef.nativeElement);
    }
  }

}
