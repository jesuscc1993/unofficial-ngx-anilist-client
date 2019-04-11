import { BehaviorSubject } from 'rxjs';

export class Store<StoreState> {
  private state: StoreState;
  private subject: BehaviorSubject<StoreState>;

  constructor(initialState: StoreState) {
    this.state = initialState;
    this.subject = new BehaviorSubject(initialState);
  }

  protected setState(state: Partial<StoreState>) {
    this.state = { ...this.state, ...state };
    this.subject.next(this.state);
  }

  protected getState(): StoreState {
    return this.state;
  }

  getObservable() {
    return this.subject.asObservable();
  }
}
