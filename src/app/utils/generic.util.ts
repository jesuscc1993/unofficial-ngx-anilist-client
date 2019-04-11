import { ElementRef } from '@angular/core';

export class ScrollUtil {
  static scrollIntoView(element: Element) {
    element.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  static scrollToRef(elementRef: ElementRef) {
    this.scrollIntoView(elementRef.nativeElement);
  }
}
