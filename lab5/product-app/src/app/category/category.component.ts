import { Category, categories } from '../categories';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
  categories = [...categories];
  category: Category | undefined;
  productsArray: Product[] = [];
  constructor(
    private route: ActivatedRoute,
    ) { 
    }
  ngOnInit() {
    this.route.params.subscribe(params => {
      const categoryIdFromRoute = Number(params['categoryId']);
      this.category = categories.find(category => category?.id === categoryIdFromRoute);
      if(this.category){
        const filteredProducts = products.filter(product => product.categoryId === this.category?.id);
        this.productsArray = filteredProducts;
      } else {
        this.productsArray = products;
      }
    });
  }
}
