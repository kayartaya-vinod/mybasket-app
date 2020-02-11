import { Component } from '@angular/core';
import { ProductsService } from '@services/products.service';

@Component({
  selector: 'mb-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  brands: string[];
  categories: string[];

  constructor(ps: ProductsService) { 
    ps.brands.subscribe(data => this.brands = data);
    ps.categories.subscribe(data => this.categories = data);
  }

}
