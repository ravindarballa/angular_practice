import { Component, inject, OnInit } from '@angular/core';
import { CounterService } from '../../services/counter/counter';
import { ApiService } from '../services/api';

@Component({
  selector: 'app-first',
  templateUrl: './first.html',
  providers: [CounterService],
})
export class First implements OnInit {
  private apiService = inject(ApiService);
  userList = this.apiService.userList;

  ngOnInit() {
    console.log('first Component', this.userList());
  }
  sendData() {
    const newUser = { name: 'Balla', email: 'balla@gmail.com' };
    this.apiService.postData(newUser).subscribe(() => {
      this.apiService.fetchData();
    });
  }
}
