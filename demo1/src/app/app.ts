import { Component, inject, signal } from '@angular/core';
import { CounterService } from '../services/counter/counter';
import { First } from './first/first';
import { Second } from './second/second';
import { ApiPage } from './api/apiPage';

@Component({
  selector: 'app-root',
  imports: [First, Second, ApiPage],
  providers: [CounterService],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  counterService = inject(CounterService);
  ngOnInit() {
    this.counterService.count$.subscribe((data: number) => {});
    console.log(this.counterService.count$);
  }
}
