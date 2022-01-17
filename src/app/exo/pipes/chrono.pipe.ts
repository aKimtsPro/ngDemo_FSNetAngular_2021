import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chrono'
})
export class ChronoPipe implements PipeTransform {

  transform(value: number): string {
    const min = Math.floor( value / 60 );
    const sec = value % 60;
    return `${ min < 10 ? '0'+min:min } min ${ sec < 10 ? '0'+sec:sec } sec`;
  }

}
