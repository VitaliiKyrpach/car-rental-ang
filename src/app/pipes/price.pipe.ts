import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pricePipe',
  standalone: true
})
export class PricePipe implements PipeTransform {

  transform(value: string, currency: string = '$'): string {

    return value.replace(/[^0-9]/g, '') + currency;
  }

}
