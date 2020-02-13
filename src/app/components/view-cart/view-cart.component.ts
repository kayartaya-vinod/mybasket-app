import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '@services/cart-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'mb-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {

  constructor(public cs: CartServiceService,
    private router: Router) { }

  ngOnInit(): void {
    if (this.cs.itemCount === 0) {
      this.router.navigate(['/']);
    }
  }

  amount(li) {
    let { product, quantity } = li;
    return product.unit_price * quantity * ((100 - product.discount) / 100);
  }

  placeOrder() {
    // check if the user has logged in, 
    // if yes, place ther order via OrderService
    // if no, redirect to login page
    //        post successful login, come back to this page
  }

}
