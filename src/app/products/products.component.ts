import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories$;
  category: string;

  constructor( 
      private route: ActivatedRoute,
      private productService: ProductService,
      private categories: CategoryService) {

    this.productService
      .getAll()
      .switchMap(product => {
      this.products = product;
      return this.route.queryParamMap;
      })
      .subscribe(params => {
        this.category =  params.get('category');
  
        this.filteredProducts = (this.category) ? 
          this.products.filter(p =>  p.category === this.category) :
          this.products;
      });
    
    this.categories$ =  this.categories.getAll();
  }

  ngOnInit() {
  }

}
