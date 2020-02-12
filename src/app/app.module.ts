import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from '@components/header/header.component';
import { FooterComponent } from '@components/footer/footer.component';
import { SidebarComponent } from '@components/sidebar/sidebar.component';
import { ProductDetailsComponent } from '@components/product-details/product-details.component';
import { ProductListComponent } from '@components/product-list/product-list.component';
import { ProductCardComponent } from '@components/product-card/product-card.component';
import { ProductsService } from '@services/products.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { routeConfig } from './route-config';
import { AddToCartButtonComponent } from './components/add-to-cart-button/add-to-cart-button.component';
import { ViewCartComponent } from './components/view-cart/view-cart.component';
import { TotalAmountPipe } from './pipes/total-amount.pipe';
import { LoginComponent } from './components/customer/login/login.component';
import { RegisterComponent } from './components/customer/register/register.component';
import { OrdersComponent } from './components/customer/orders/orders.component';
import { ViewOrderComponent } from './components/customer/view-order/view-order.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ProductDetailsComponent,
    ProductListComponent,
    ProductCardComponent,
    PageNotFoundComponent,
    AddToCartButtonComponent,
    ViewCartComponent,
    TotalAmountPipe,
    LoginComponent,
    RegisterComponent,
    OrdersComponent,
    ViewOrderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routeConfig),
    FormsModule,
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
