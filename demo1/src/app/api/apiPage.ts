import { Component, inject, OnInit, signal } from '@angular/core';
import { ApiService } from '../services/api';

@Component({
  selector: 'app-api-page',
  templateUrl: './apiPage.html',
})
export class ApiPage implements OnInit {
  private apiService = inject(ApiService);
  userList = signal<any[]>([]);
  ngOnInit(): void {
    // Clean and correct: Only log the data once it arrives
    this.apiService.fetchData().subscribe((data: any) => {
      this.userList.set(data);
      console.log('API Data received:', this.userList());
    });
  }
}
