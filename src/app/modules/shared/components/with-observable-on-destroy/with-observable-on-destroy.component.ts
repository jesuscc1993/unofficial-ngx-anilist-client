import { Subject } from 'rxjs';

import { Directive, OnDestroy } from '@angular/core';

@Directive()
export class WithObservableOnDestroy implements OnDestroy {
  private destroyedSubject = new Subject();

  protected get destroyed$() {
    return this.destroyedSubject.asObservable();
  }

  ngOnDestroy() {
    this.destroyedSubject.next();
  }
}
