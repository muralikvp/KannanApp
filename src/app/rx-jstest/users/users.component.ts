import { Component } from '@angular/core';
import { filter, map, of } from 'rxjs';
import { CustomerService } from 'src/app/Shared/customer.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  constructor(private service: CustomerService) {}

  //stream$ = of('water');
  CustomerPipe$ = this.service
    .LoadCustomer()
    .pipe(filter((data) => data.users.gender === "male")) //Filter the data
    .subscribe((data) => console.log('Customers', data));

  CustomerPipe2$ = this.service
    .LoadCustomer()
    .pipe(
      filter((data) => data == data ), //Filter the data
      map((data) => warmup(data)) //Heat the data
    )
    .subscribe((data) => console.log('Warm data', data));
}

function warmup(data: any): any {
  console.log("Inside Warmup Functuion" + data);
  return data;
}

