import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lower'
})
export class LowerPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let result = value.toLowerCase();
    return result;
  }

}
