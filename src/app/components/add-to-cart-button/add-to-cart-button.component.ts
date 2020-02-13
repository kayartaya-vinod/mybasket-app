import { Component, OnInit, Input } from '@angular/core';
import { Product } from '@model/product';
import { CartServiceService } from '@services/cart-service.service';

@Component({
  selector: 'mb-add-to-cart-button',
  templateUrl: './add-to-cart-button.component.html',
  styleUrls: ['./add-to-cart-button.component.css']
})
export class AddToCartButtonComponent implements OnInit {

  @Input()
  product: Product;

  constructor(private cs: CartServiceService) { }

  ngOnInit(): void {
  }

  increment() {
    this.cs.incrementQuantity(this.product);
    window['toastr'].success('Item added to cart');
  }
  
  decrement() {
    this.cs.decrementQuantity(this.product);
    window['toastr'].error('Item removed from cart');
  }

  get inCart() {
    return this.cs.isInCart(this.product);
  }

  get quantity() {
    return this.cs.getQuantity(this.product);
  }

}
