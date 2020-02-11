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

  constructor(private ps: ProductsService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.queryParams
      .subscribe(({ brand, category }) => {
        this.ps.getAllProducts(1, brand, category)
          .subscribe(data => this.products = data);
      });


  }

}
