import { Component, Optional, Self } from '@angular/core';
import { LoggerService } from 'src/app/logger.service';

@Component({
  selector: 'app-dep-ex1',
  templateUrl: './dep-ex1.component.html',
  styleUrls: ['./dep-ex1.component.css'],
  providers: [LoggerService] // uncomment if we use the self() in constructor
})
export class DepEx1Component {
  // constructor(private logger:LoggerService){
  //   if (this.logger) {
  //         this.logger.log('DepEx1Component : constructor init');
  //       }
  // }

  constructor(@Self() private logger: LoggerService) {

    if (this.logger) {
      this.logger.prefix = "Dep Ex1 Component : ";
      // console.log(this.logger.prefix + "Constructor init");
      this.logger.log('Dep Ex1 constructor init');
    }
  }
  //Self will look for declaration in dep-ex1 component itself.
  // Eventhough providedIn: 'root' is delcared. It will not consider
}
