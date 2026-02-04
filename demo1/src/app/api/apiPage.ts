import { Component, computed, EventEmitter, inject, OnInit, signal, Output } from '@angular/core';
import { ApiService } from '../services/api';
import { Popup } from '../shared/popup/popup';

@Component({
  selector: 'app-api-page',
  templateUrl: './apiPage.html',
  imports: [Popup],
})
export class ApiPage implements OnInit {
  private apiService = inject(ApiService);
  showPopup = false;
  // Link your local variable directly to the Service Signal
  userList = this.apiService.userList;
  selectedUser: any;

  ngOnInit() {
    this.apiService.fetchData(); // Load data on startup
    console.log('API Page Component', this.userList());
  }
  onEdit(id: number) {
    this.selectedUser = this.userList().find((user: any) => user.id === id);
    console.log(this.selectedUser);
    this.showPopup = true;
  }
  deleteItem(id: number) {
    console.log(id);
    this.apiService.DeleteData(id).subscribe(() => {
      this.apiService.fetchData();
    });
    this.apiService.userList.update((users: any[]) => users.filter((data: any) => data.id !== id));
  }
  onClose() {
    console.log('close popup');
    this.showPopup = false;
  }
  onSave() {
    this.showPopup = false;
  }
}
