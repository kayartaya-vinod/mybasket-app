import { Component, OnInit } from '@angular/core';
import { Customer } from '@model/customer';

@Component({
  selector: 'mb-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  c: Customer = new Customer();
  c_password: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
