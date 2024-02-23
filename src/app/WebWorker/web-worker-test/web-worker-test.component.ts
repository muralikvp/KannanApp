import { Component } from '@angular/core';

@Component({
  selector: 'app-web-worker-test',
  templateUrl: './web-worker-test.component.html',
  styleUrls: ['./web-worker-test.component.css']
})
export class WebWorkerTestComponent {
  result: any;
  IntialValue!: number;

  LoadHeavyComp() {

    this.IntialValue = 777;
    if (typeof Worker !== 'undefined') {

      //Intialise the Web Worker
      const worker = new Worker(new URL('app.worker', import.meta.url));

      //Call Web Worker and Ppst Message
      worker.postMessage(10000);

      // Get Response from Web Worker
      worker.onmessage = ({ data }) => {
        this.result = data.prime;
      };

    } else {
      // Web workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }
}
