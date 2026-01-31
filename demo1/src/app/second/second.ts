import { Component, inject, OnInit } from '@angular/core';
import { CounterService } from '../../services/counter/counter';

@Component({
  selector: 'app-second',
  templateUrl: './second.html',
  providers: [CounterService],
})
export class Second implements OnInit {
  displaySecond = 0;
  CounterService = inject(CounterService);
  ngOnInit() {
    this.CounterService.count$.subscribe((data) => (this.displaySecond = data));
  }
  secondIncrement() {
    console.log('Second Increment Clicked');
    this.CounterService.setCount(2);
  }
}
