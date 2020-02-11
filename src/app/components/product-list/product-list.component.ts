import { Component, OnInit } from '@angular/core';
import { Product } from '@model/product';
import { ProductsService } from '@services/products.service';

@Component({
  selector: 'mb-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Array<Product>;

  constructor(private ps: ProductsService) { }

  ngOnInit(): void {
    this.ps.getAllProducts()
      .subscribe(data => this.products = data);
  }

}
