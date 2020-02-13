import { Injectable } from '@angular/core';
import { LineItem } from '@model/line-item';
import { Product } from '@model/product';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  cart: Array<LineItem> = [];

  constructor() {
    let cachedData = localStorage.getItem('cart');
    if (cachedData) {
      this.cart = JSON.parse(cachedData);
    }
  }

  get itemCount() {
    return this.cart.length;
  }

  emptyCart() {
    this.cart = [];
    this.persist();
  }

  get cartTotal() {
    // 1. convert an array of line-items into array of numbers
    let amounts = this.cart.map((li: LineItem) => {
      let { product, quantity } = li;
      return product.unit_price * quantity * (100 - product.discount) / 100;
    });
    // 2. use the reduce fuction to get the total amount
    return amounts.reduce((a, c) => a + c);
  }

  persist() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

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
    this.persist();
  }

  decrementQuantity(p: Product) {
    let index = this.cart.findIndex(item => item.product.id === p.id);
    if (index !== -1) {
      let li = this.cart[index];
      li.quantity--;
      if (li.quantity === 0) {
        this.cart.splice(index, 1);
      }
      this.persist();
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
