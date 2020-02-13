import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/customer/login/login.component';
import { RegisterComponent } from './components/customer/register/register.component';
import { OrdersComponent } from './components/customer/orders/orders.component';
import { ViewOrderComponent } from './components/customer/view-order/view-order.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'view-orders',
    component: OrdersComponent
  }
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    OrdersComponent,
    ViewOrderComponent
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    OrdersComponent,
    ViewOrderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class CustomerModule { }
