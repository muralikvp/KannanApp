import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ComponenttInteractService } from 'src/app/Shared/componentt-interact.service';

@Component({
  selector: 'app-FirstCommunication',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstCommunicationComponent {
  constructor(private compo: ComponenttInteractService) {}
  Communi = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  SendMessage() {
    const username = this.Communi.value.username;
    if (username) {
      this.compo.message = username;
    }
  }
}
