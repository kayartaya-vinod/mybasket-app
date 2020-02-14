import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/customer/login/login.component';
import { RegisterComponent } from './components/customer/register/register.component';
import { OrdersComponent } from './components/customer/orders/orders.component';
import { ViewOrderComponent } from './components/customer/view-order/view-order.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { OrderTotalPipe } from './pipes/order-total.pipe';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

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
  },
  {
    path: 'order-details/:order_id',
    component: ViewOrderComponent
  }
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    OrdersComponent,
    ViewOrderComponent,
    OrderTotalPipe,
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
    RouterModule.forChild(routes),
    TranslateModule.forChild({
        loader: {
            provide: TranslateLoader,
            deps: [HttpClient],
            useFactory: (http: HttpClient) => new TranslateHttpLoader(http)
        }
    })
  ]
})
export class CustomerModule { }
