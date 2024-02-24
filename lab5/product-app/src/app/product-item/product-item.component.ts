import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Product } from '../products';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product: Product | undefined;
  @Output() remove = new EventEmitter();
  isLiked: boolean = false;
  
  share() {
    const message = `Посмотрите ${this.product?.name}: ${this.product?.link}`;
    const tgLink = `https://telegram.me/share/url?url=${message}`;
    window.location.href = tgLink;
  }

  onNotify(){
    window.alert('You will be notified when the product goes on sale');
  }

  switchLike(){
    if(this.product){
      (this.isLiked) ? this.product.likes-- : this.product.likes++;
      this.isLiked = !this.isLiked;
  }
}
}
