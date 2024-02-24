import { Injectable } from '@angular/core';
import { Product, products } from './products';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [...products];
  constructor() { }

  getProducts(): Product[]{
    return this.products;
  }

  getProductsByCategory(categoryId: number): Product[]{
    return this.products.filter(product => product.categoryId === categoryId);
  }

  removeProduct(productId: number): void {
    this.products = this.products.filter(product => product.id !== productId);
  }
}
