import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '@model/product';
import { HttpClient } from '@angular/common/http';
import { productsUrl, brandsUrl, categoriesUrl } from 'src/urls';

import 'rxjs/add/operator/map';
// for the above to work, you have to install 'rxjs-compat'

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) { }

  // this no longer can be treated as function, 
  // but must be used a variable (readonly)
  get brands(): Observable<string[]> {
    return this.http.get(brandsUrl)
      .map(resp => resp as string[]);
  }

  get categories(): Observable<string[]> {
    return this.http.get(categoriesUrl)
      .map(resp => resp as string[]);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get(productsUrl + id)
      .map(resp => resp as Product);
  }

  getAllProducts(pageNum = 1, brand = undefined, category = undefined, q = undefined): Observable<Product[]> {
    const options = {
      params: {
        _page: pageNum.toString()
      }
    };
    if (brand) {
      options.params['brand'] = brand;
    }
    if (category) {
      options.params['category'] = category;
    }
    if (q) {
      options.params['q'] = q;
    }

    return this.http.get(productsUrl, options)
      .map(resp => resp as Array<Product>);
  }
}
