import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '@services/cart-service.service';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { OrderService } from 'src/app/customer/services/order.service';
import { Order } from '@model/order';

@Component({
  selector: 'mb-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {

  constructor(public cs: CartServiceService,
    private router: Router,
    private auth: AuthService,
    private orderService: OrderService) { }

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
    if (this.auth.isAuthenticated) {
      let ord = new Order();
      ord.lineItems = [...this.cs.cart];
      this.orderService.placeOrder(ord)
        .subscribe(
          () => { 
            this.cs.emptyCart();
            this.router.navigate(['/']);
            window['toastr'].success('Order has been accepted!');
          },
          () => window['toastr'].error('There was an error while placing your order.')
        );
    }
    else {
      this.router.navigate(['/customer/login']
        , { queryParams: { redirect: '/view-cart' } })
    }
  }

}
