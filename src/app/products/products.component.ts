import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products$;
  categories$;
  constructor(private productService: ProductService, private categories: CategoryService) { 
    this.products$ =  this.productService.getAll();
    this.categories$ =  this.categories.getAll();
  }

  ngOnInit() {
  }

}
