import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'mb-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  // this member variable must receive data from 
  // the parent component; for this use the @Input decorator
  @Input()
  product: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
