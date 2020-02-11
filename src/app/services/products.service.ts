import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '@model/product';
import { HttpClient } from '@angular/common/http';
import { productsUrl } from 'src/urls';

import 'rxjs/add/operator/map';
// for the above to work, you have to install 'rxjs-compat'

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts(pageNum = 1): Observable<Product[]> {
    const options = {
      params: {
        _page: pageNum.toString()
      }
    };
    
    return this.http.get(productsUrl, options)
    .map(resp => resp as Array<Product>);
  }
}
