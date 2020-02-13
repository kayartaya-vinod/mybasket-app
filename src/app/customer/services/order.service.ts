import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '@model/order';
import { Observable } from 'rxjs';
import { ordersUrl } from 'src/urls';
import { AuthService } from '@services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient, 
    private auth: AuthService) { }

  placeOrder(ord: Order): Observable<any> {
    let options = {
      headers: {
        'Authorization': 'Bearer ' + this.auth.token
      }
    };
    ord.customerId = this.auth.userId;
    return this.http.post(ordersUrl, ord, options);
  }
}
