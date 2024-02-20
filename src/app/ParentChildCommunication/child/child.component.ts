import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() customColor!: string;
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
        this.newItemEvent.emit(value);
  }
}
