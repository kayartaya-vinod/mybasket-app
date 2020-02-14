import { Component, OnInit } from '@angular/core';
import { Product } from '@model/product';
import { ProductsService } from '@services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mb-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Array<Product>;
  pageNum: number;

  constructor(private ps: ProductsService,
    private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activatedRoute.queryParams
      .subscribe(({ brand, category, q }) => {
        this.ps.getAllProducts(this.pageNum++, brand, category, q)
          .subscribe(data => {
            this.products = data;
            this.pageNum = 1;
          });
      });
  }

  loadMore() {
    this.activatedRoute.queryParams
      .subscribe(({ brand, category, q }) => {
        this.ps.getAllProducts(this.pageNum++, brand, category, q)
          .subscribe(data => this.products.push(...data));
      });
  }
}
