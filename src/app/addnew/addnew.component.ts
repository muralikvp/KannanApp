import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../Shared/customer.service';
import { CustomerInfo } from '../Shared/customer-info';

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css'],
})
export class AddnewComponent {
  messageclass = '';
  message = '';
  responsedata: any;

  constructor(private custService: CustomerService) {}

  register = new FormGroup({
    id: new FormControl({ value: '', disabled: true }),
    name: new FormControl('', Validators.required),
    email: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
    phone: new FormControl('', Validators.required),
  });

  SaveCustomer() {



      if (this.register.valid) {

        let customer: CustomerInfo = {
          name: '',
          email: '',
          phone: 0,
        }; // Initialize the customer variable
        customer.email = this.register.value.email || '';
        customer.name = this.register.value.name || '';
        customer.phone = parseInt(this.register.value.phone ?? '', 0) || 0;

        this.custService.SaveCustomer(customer).subscribe((result) => {
          if (result != null) {
            this.responsedata = result;
            if (this.responsedata.id > 1) {
              this.message = 'Customer saved successfully.';
              this.messageclass = 'sucess';
              this.clearCustomer();
            } else {
              this.message = 'Failed to Save';
              this.messageclass = 'error';
            }
          }
        });
      }

  }

  clearCustomer() {
    this.register = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
    });
  }
  get name() {
    return this.register.get('name');
  }
  get email() {
    return this.register.get('email');
  }
}
