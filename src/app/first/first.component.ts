import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
firstNumber: number =12;
secondNumber: number =34;
firstName: string = 'Murali'; 
lastName: string = 'Ram';
Qualification: string =''; 
Address : any; 

constructor(){
}


}
