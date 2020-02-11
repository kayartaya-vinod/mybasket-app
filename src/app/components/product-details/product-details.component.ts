import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '@services/products.service';

@Component({
  selector: 'mb-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  // declared; but undefined!
  product:Product;

  constructor(private activatedRoute: ActivatedRoute,
    private ps: ProductsService) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(({ id }) => {
        this.ps.getProductById(id)
          .subscribe(p => this.product = p)
      });
  }

}
