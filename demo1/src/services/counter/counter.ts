import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CounterService {
  count$ = new BehaviorSubject<number>(0);
  countStatus$ = this.count$.asObservable();
  setCount(count: number) {
    this.count$.next(count);
  }
}
