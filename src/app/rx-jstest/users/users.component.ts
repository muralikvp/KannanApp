import { Component } from '@angular/core';
import { Observable, Subject, filter, map, of } from 'rxjs';
import { CustomerService } from 'src/app/Shared/customer.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  constructor(private service: CustomerService) {

    //Calling Obsservable
    const test$ = new Observable((s) => {
      console.log('Console Start');
      setTimeout(() => s.next('11'), 5000);
      s.next('Murali');
      s.next('Vairamani');
      //s.error('Occurred from Observable');
      s.next('Hope Tutors');
    //  s.complete();
      s.next('Sheik');
      // setTimeout(() => s.next("44"), 1000);
    });

    //calling observer
    test$.subscribe({
      next: (v) => {
        if (v == 'Murali') {
          console.log('Trainer', v);
        } else if (v == 'Vairamani') {
          console.log('Student');
        } else {
          console.log(v);
        }
      },
      error: (e) => console.error("Error:"+ e),
      complete: () => console.info('complete'),
    });
    console.log('Console End');

     test$.subscribe(
            x => {
              console.log("2nd", x);
            },
            error => { console.log("error received 1:", error) },
            () => { console.log("Completed1") }
     );

    //Observables problem statement
    //Each subscription receives the different values as observables
    //because each subscription is a different instance of the observable

      const obs = new Observable((s) => {
        s.next(Math.random());
      });

    obs.subscribe(res => {
      console.log('subscription a :', res); //subscription a :0.2859800202682865
    });

    obs.subscribe(res => {
      console.log('subscription b :', res); //subscription b :0.694302021731573
    });

    let Sub1$ = new Subject();

    //Call the same component in same page
    //Component 1
    Sub1$.subscribe(res => {
      console.log('Subject a :', res); // subscription a : 0.91767565496093
    });

    //Component 2
    Sub1$.subscribe(res => {
      console.log('Subject b :', res);// subscription b : 0.91767565496093
    });

    //place below line of code in same Service
    //Call below method on button click
    Sub1$.next(Math.random());

  }




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

