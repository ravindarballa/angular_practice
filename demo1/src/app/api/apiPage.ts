import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ApiService } from '../services/api';

@Component({
  selector: 'app-api-page',
  templateUrl: './apiPage.html',
})
export class ApiPage implements OnInit {
  private apiService = inject(ApiService);

  // Link your local variable directly to the Service Signal
  userList = this.apiService.userList;

  ngOnInit() {
    this.apiService.fetchData(); // Load data on startup
    console.log('API Page Component', this.userList());
  }
  deleteItem(id: number) {
    console.log(id);
    this.apiService.userList.update((users: any[]) => users.filter((data:any) => data.id !== id));
  }
}
