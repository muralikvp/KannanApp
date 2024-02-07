import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'validateAge'
})
export class ValidateAgePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {

    if (value > 18) {
      return 'sucess';
    }
    else {
      return 'error';
    }
  }

}
