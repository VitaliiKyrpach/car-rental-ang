import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localString',
  standalone: true
})
export class LocalStringPipe implements PipeTransform {

  transform(value: number): string {
    return value.toLocaleString();
  }

}
