import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'longString'
})
export class LongStringPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    const text = value.slice(0, 60);
    return text + ' ...';
  }
}

