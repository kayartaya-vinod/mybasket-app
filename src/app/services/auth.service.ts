import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '@model/customer';
import { Observable } from 'rxjs';
import { customersUrl, loginUrl } from 'src/urls';

import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedInUser: string;

  constructor(private http: HttpClient) {
    // this is required, in case if you refresh the page
    let user = sessionStorage['user'];
    if (user) {
      user = JSON.parse(user);
      this.loggedInUser = user.name;
    }
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(loginUrl, { email, password })
      .do(console.log)
      .do(resp => this.loggedInUser = resp['name'])
      .do(resp => sessionStorage['user'] = JSON.stringify(resp));
  }

  logout() {
    this.loggedInUser = undefined;
    sessionStorage.removeItem('user');
  }

  register(customer: Customer): Observable<any> {
    return this.http.post(customersUrl, customer)
      .do(console.log)
      .do(resp => this.loggedInUser = resp['name'])
      .do(resp => sessionStorage['user'] = JSON.stringify(resp));
  }

  get isAuthenticated() {
    let user = sessionStorage['user'];
    if (!user) return false;
    user = JSON.parse(user);
    return 'token' in user;
  }

  get userId() {
    let user = sessionStorage['user'];
    if(user) {
      user = JSON.parse(user);
      return user['id'];
    }
  }

  get token() {
    let user = sessionStorage['user'];
    if(user) {
      user = JSON.parse(user);
      return user['token'];
    }
  }

}
