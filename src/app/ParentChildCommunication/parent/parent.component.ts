import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  colorInfo: string = 'red';
  items = ['Hope', 'Tutors', 'Training', 'Institute', 'Chennai', 'India'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
