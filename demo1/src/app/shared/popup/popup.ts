import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.html',
  imports: [ReactiveFormsModule],
})
export class Popup {
  @Input() title: string = 'todo form';
  @Input() form!: FormGroup;
  @Input() user: any;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<any>();
  @Input() onSubmit!: () => void;
  userForm!: FormGroup;
  userFormGroup: any;
  ngOnInit() {
    console.log('popup component', this.user);
    this.userForm = new FormGroup({
      name: new FormControl(this.user?.name || ''),
      email: new FormControl(this.user?.email || ''),
    });
  }
}
