import { Component, OnInit } from '@angular/core';
import { AuthService } from '@services/auth.service';
import { OrderService } from 'src/app/customer/services/order.service';
import { Router } from '@angular/router';
import { Order } from '@model/order';
import { Observable } from 'rxjs';

@Component({
  selector: 'mb-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Observable<Array<Order>>;

  constructor(private auth: AuthService,
    private orderService: OrderService,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.auth.isAuthenticated) {
      this.router.navigate(['/customer', 'login'],
        { queryParams: { redirect: '/customer/view-orders' } })
    }
    else {
      this.orders = this.orderService.orders;
    }
  }

}
