import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private apiData = inject(HttpClient);
  url = 'https://jsonplaceholder.typicode.com/users';
  constructor() {
    console.log('Fetching data from API:', this.url);
  }
  fetchData() {
    return this.apiData.get(this.url);
  }
}
