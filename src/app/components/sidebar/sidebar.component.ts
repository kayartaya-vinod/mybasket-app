import { Component } from '@angular/core';
import { ProductsService } from '@services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'mb-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  brands: string[];
  categories: string[];

  constructor(ps: ProductsService,
    private router: Router) {
    ps.brands.subscribe(data => this.brands = data);
    ps.categories.subscribe(data => this.categories = data);
  }

  getProducts(key, val) {
    // let qp = {};
    // qp[key] = val;
    // this.router.navigate(['/list'], { queryParams: qp });
    this.router.navigate(['/list'], { queryParams: { [key]: val } });
  }

}
