import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '@model/order';
import { Observable } from 'rxjs';
import { ordersUrl } from 'src/urls';

import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  get orders(): Observable<Order[]> {
    return this.http.get(ordersUrl)
      .map(resp => resp as Order[]);
  }

  placeOrder(ord: Order): Observable<any> {
    return this.http.post(ordersUrl, ord);
  }
}
