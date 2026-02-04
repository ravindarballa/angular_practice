import { HttpClient } from '@angular/common/http';
import { Injectable, WritableSignal, inject, signal } from '@angular/core';
import { catchError, of, shareReplay } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private url = 'http://localhost:3000/api/users';

  // WritableSignal to hold users
  userList: WritableSignal<any[]> = signal([]);

  constructor() {
    // Initial fetch on service creation
    this.fetchData();
  }

  // Fetch or refresh users from API
  fetchData() {
    this.http
      .get<any[]>(this.url)
      .pipe(
        shareReplay(1),
        catchError(() => of([])),
      )
      .subscribe((data) => {
        this.userList.set(data);
      });
  }

  // Post new user
  postData(newUser: any) {
    return this.http.post(this.url, newUser);
  }

  DeleteData(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
