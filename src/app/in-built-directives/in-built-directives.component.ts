import { Component } from '@angular/core';

@Component({
  selector: 'app-in-built-directives',
  templateUrl: './in-built-directives.component.html',
  styleUrls: ['./in-built-directives.component.css'],
})
export class InBuiltDirectivesComponent {
  cardBoxStyle!: string;

  BackColrChanger(color:string)
  {
    if (color == 'Blue') {
      this.cardBoxStyle = 'blueBackground';
    } else if (color == 'Green') {
      this.cardBoxStyle = 'GreenBackground';
    } else if (color == 'Black') {
        this.cardBoxStyle = 'BlackBackground';
    }

  }
}
