import { Component, inject, OnInit } from '@angular/core';
import { CounterService } from '../../services/counter/counter';

@Component({
  selector: 'app-first',
  templateUrl: './first.html',
  providers: [CounterService],
})
export class First implements OnInit {
  displayFirst = 0;
  CounterService = inject(CounterService);
  ngOnInit() {
    this.CounterService.count$.subscribe((data) => (this.displayFirst = data));
  }
  firstIncrement() {
    console.log('First Increment Clicked');
    this.CounterService.setCount(1);
  }
}
