import { BehaviorSubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export type StateChange<StoreState> = {
  previousState: StoreState;
  currentState: StoreState;
};

export class Store<StoreState> {
  private stateSubject: BehaviorSubject<StateChange<StoreState>>;

  constructor(initialState: StoreState) {
    this.stateSubject = new BehaviorSubject({
      previousState: undefined,
      currentState: initialState,
    });
  }

  asObservable() {
    return this.stateSubject.asObservable();
  }

  changes<K extends keyof StoreState>(field: K) {
    return this.stateSubject.asObservable().pipe(
      filter(({ currentState }) => !!currentState[field]),
      filter(
        ({ currentState, previousState }, index) =>
          index === 0 || !previousState || currentState[field] !== previousState[field]
      ),
      map(({ currentState }) => currentState[field])
    );
  }

  protected setState(newState: Partial<StoreState>) {
    const previousState = this.stateSubject.getValue().currentState;
    this.stateSubject.next({
      previousState,
      currentState: { ...previousState, ...newState },
    });
  }

  protected getState(): StoreState {
    return this.stateSubject.getValue().currentState;
  }
}
