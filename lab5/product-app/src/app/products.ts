export interface Product {
    id: number;
    name: string;
    categoryId: number;
    price: number;
    description: string;
    image: string;
    rating:number;
    link: string;
    inStock: boolean;
  }
  
  export const products = [
    {
      id: 1,
      name: 'Алекс минеральная Saryagash газированная 1.5 л',
      categoryId: 1,
      price: 237,
      description: `страна производства: Казахстан;
      условия хранения: при температуре от +5°C до +20°С;
      тип: минеральная`,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h93/hde/63820990414878.jpg?format=gallery-large',
      rating: 5,
      link: "https://kaspi.kz/shop/p/aleks-mineral-naja-saryagash-gazirovannaja-1-5-l-100211003/?c=75000000",
      inStock: true,
    },
    {
      id: 2,
      name: 'Карина туалетная бумага 2-слойный 12 шт, вторичная целлюлоза',
      categoryId: 2,
      price: 1669,
      description: `тип: туалетная бумага;
      вид: рулонный;
      количество в упаковке: 12;
      материал: вторичная целлюлоза`,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h66/h78/64534893395998.jpg?format=gallery-large',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/karina-tualetnaja-bumaga-2-sloinyi-12-sht-vtorichnaja-tselljuloza-104962569/?c=750000000',
      inStock: true
    }
  ];
  
  
  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */