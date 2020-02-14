import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

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
import { CustomHttpInterceptorService } from '@services/custom-http-interceptor.service';

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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routeConfig),
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        deps: [HttpClient],
        useFactory: (hc)=>new TranslateHttpLoader(hc)
      }
    })
  ],
  providers: [
    ProductsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
