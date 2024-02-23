import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  prefix = " Root: ";
  constructor() {
    console.log(this.prefix +  "Logger Service : Constructor init");
  }
  log(message: string) {
    console.log(this.prefix + message);
  }
}
