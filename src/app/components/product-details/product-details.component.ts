import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'mb-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;

  constructor() { }

  ngOnInit(): void {
    this.product = {
      "id": 25,
      "category": "fruit",
      "name": "Orange",
      "brand": "Fresho",
      "description": "Orange - Nagpur",
      "quantity_per_unit": "500 GM, approx. 2 to 3 nos",
      "unit_price": 16,
      "picture": "https://vinbasket.herokuapp.com/product-images/10000267-2_8-fresho-orange-nagpur.jpg",
      "discount": 13
    }
  }

}
