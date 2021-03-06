import { Pipe, PipeTransform } from '@angular/core';
import { Order } from '@model/order';

// {{ o | orderTotal | currency: 'INR' }}
@Pipe({
  name: 'orderTotal'
})
export class OrderTotalPipe implements PipeTransform {

  transform(ord: Order): number {

    if (!ord) return null;

    if (!ord.lineItems || ord.lineItems.length === 0) return null;

    return ord.lineItems.map(li =>
      li.product.unit_price * li.quantity * (100 - li.product.discount) / 100)
      .reduce((a, b) => a + b);
  }

}
