import { Pipe, PipeTransform } from '@angular/core';
import { LineItem } from '@model/line-item';

@Pipe({
  name: 'totalAmount',
  pure: false
})
export class TotalAmountPipe implements PipeTransform {

  transform(item: LineItem): number {
    if(!item) return 0;

    let {product, quantity} = item;
    return product.unit_price * quantity * (100-product.discount)/100;
  }

}
