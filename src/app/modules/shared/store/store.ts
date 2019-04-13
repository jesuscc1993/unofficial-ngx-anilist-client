import { BehaviorSubject } from 'rxjs';

export class Store<StoreState> {
  private stateSubject: BehaviorSubject<StoreState>;

  constructor(initialState: StoreState) {
    this.stateSubject = new BehaviorSubject(initialState);
  }

  public asObservable() {
    return this.stateSubject.asObservable();
  }

  protected setState(state: Partial<StoreState>) {
    this.stateSubject.next({ ...this.stateSubject.getValue(), ...state });
  }

  protected getState(): StoreState {
    return this.stateSubject.getValue();
  }
}
