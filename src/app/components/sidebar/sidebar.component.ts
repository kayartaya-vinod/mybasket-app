import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mb-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  brands: string[];
  categories: Array<string>;
  
  constructor() { 
    this.brands = ['Malnad', 'Zespri', 'ACME'];
    this.categories = ['fruit', 'vegetable', 'GROCERRY']
  }
  
  ngOnInit(): void {
  }

}
