import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../Shared/customer.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
})
export class ListingComponent implements OnInit {
  public Customerdata: any;

  constructor(private service: CustomerService) {
  }

  ngOnInit(): void{
    this.LoadCustomerData();
  }

  private LoadCustomerData() {
    this.service.LoadCustomer().subscribe((data) => {
      this.Customerdata = data.users;
    });
  }
  public delete(id: number) {
    if(confirm('Are you sure to delete?'))
    {
      this.service.RemoveCustomer(id).subscribe((result) => {
        if (result != null) {
          this.LoadCustomerData();
        }
      })
    }
  }
}
