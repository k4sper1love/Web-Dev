import { Category, categories } from '../categories';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  categories = [...categories];
  products: Product[] = [];
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
    ) { 
    }
  
    ngOnInit() {
      this.route.params.subscribe(params => {
        const categoryIdFromRoute = Number(params['categoryId']);
        if(categoryIdFromRoute){
          this.products = this.productService.getProductsByCategory(categoryIdFromRoute);
        } else {
          this.products = this.productService.getProducts();
        }
      });
    }
  removeItem(product: Product){
    const pass = String(window.prompt('ну давай выкладывай пароль', ''));
    if(pass === '12345'){
        this.productService.removeProduct(product.id);
        this.products = this.products.filter(p => p !== product);
    } else {
      window.alert('не угадал. только админы могут сносить айтемы броу');
    }
  }
}
