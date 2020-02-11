import { Injectable } from '@angular/core';
import { LineItem } from '@model/line-item';
import { Product } from '@model/product';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  cart: Array<LineItem> = [];

  constructor() { }

  incrementQuantity(p: Product) {
    let li = this.cart.find(item => item.product.id === p.id);
    if (li) {
      li.quantity++;
    }
    else {
      li = new LineItem();
      li.product = p;
      li.quantity = 1;
      this.cart.push(li);
    }
  }

  decrementQuantity(p: Product) {
    let index = this.cart.findIndex(item => item.product.id === p.id);
    if (index !== -1) {
      let li = this.cart[index];
      li.quantity--;
      if (li.quantity === 0) {
        this.cart.splice(index, 1);
      }
    }
  }

  isInCart(p: Product) {
    return this.cart.findIndex(item => item.product.id === p.id) >= 0;
  }

  getQuantity(p: Product) {
    let li = this.cart.find(item => item.product.id === p.id);
    if (li) {
      return li.quantity;
    }
    return 0;
  }
}
