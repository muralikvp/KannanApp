import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css'],
})
export class AddnewComponent {
  messageclass = '';
  message = '';

  register = new FormGroup({
    id: new FormControl({ value: '', disabled: true }),
    name: new FormControl('', Validators.required),
    email: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
    phone: new FormControl('', Validators.required),
  });

  get name() {
    return this.register.get('name');
  }
  get email() {
    return this.register.get('email');
  }
}
