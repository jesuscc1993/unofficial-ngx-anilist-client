import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

export class WithObservableOnDestroy implements OnDestroy {
  private destroyedSubject = new Subject();
  protected destroyed$ = this.destroyedSubject.asObservable();

  ngOnDestroy() {
    this.destroyedSubject.next();
  }
}
