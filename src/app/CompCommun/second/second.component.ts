import { Component } from '@angular/core';
import { ComponenttInteractService } from 'src/app/Shared/componentt-interact.service';

@Component({
  selector: 'app-SecondCommunication',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondCommunicationComponent {
  message!: string;

  constructor(private compo: ComponenttInteractService) {

  }
  GetMessage() {
    this.message = this.compo.message;
  }
}
