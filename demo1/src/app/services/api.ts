import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private url = 'http://localhost:3000/api/users';

  // 1. The "Data Store" - Everyone listens to this
  userList = signal<any[]>([]);

  // 2. The Fetcher - Updates the signal
  fetchData() {
    this.http.get(this.url).subscribe((data) => {
      this.userList.set(data as any[]); // This updates the UI everywhere
    });
  }

  // 3. The Poster - Returns observable so component knows when it's done
  postData(newUser: any) {
    return this.http.post(this.url, newUser);
  }
}
