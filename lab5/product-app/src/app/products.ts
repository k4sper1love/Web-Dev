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
    likes: number;
  }
  
  export let products = [
    {
      id: 1,
      name: 'Микроволновая печь LG MS-2042DB черный',
      categoryId: 1,
      price: 40865,
      description: `тип управления: электронное;
      внутренний объем: 20.0 л;
      расположение: отдельностоящая;
      внутреннее покрытие камеры: эмаль;
      гриль: Нет;
      конвекция: Нет;
      цвет: черный`,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h87/h60/63757616578590.jpg?format=gallery-large',
      rating: 5,
      link: "https://kaspi.kz/shop/p/lg-ms-2042db-chernyi-2900200/?c=750000000",
      inStock: true,
      likes: 0,
    },
    {
      id: 2,
      name: 'Блок питания AeroCool KCAS PLUS 800 Вт',
      categoryId: 2,
      price: 33700,
      description: `форм-фактор: ATX;
      мощность: 800.0 Вт;
      сертификат 80 PLUS: Bronze;
      тип разъема для материнской платы: 20+4 pin;
      отстегивающиеся кабели: Нет;
      кабель питания в комплекте: Да`,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/he5/hba/63757707083806.jpg?format=gallery-large',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/aerocool-kcas-plus-800-vt-9700234/?c=750000000',
      inStock: true,
      likes: 0
    },
    {
      id: 3,
      name: 'Офисное ZETA СМ 6 Гобелен черный',
      categoryId: 3,
      price: 5305,
      description: `назначение: офисное кресло;
      тип базы: ножки;
      материал обивки: текстиль;
      регулировка: отсутствует;
      цвет: черный;
      страна: Казахстан`,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd9/h98/63823130198046.jpg?format=gallery-large',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/ofisnoe-zeta-sm-6-gobelen-chernyi-100024607/?c=750000000',
      inStock: true,
      likes: 0
    },
    {
      id: 4,
      name: 'Уголь активированнный таблетки 250 мг 10 шт',
      categoryId: 4,
      price: 60,
      description: `назначение: энтеросорбенты;
      количество штук в упаковке: 10;
      антибиотик: Нет;
      рецептурный препарат: Нет;
      действующее вещество: активированный уголь;
      способ применения: пероральный;
      лекарственная форма: таблетки;
      возрастные ограничения: с 3 лет;
      дозировка: 250 мг;
      страна производитель: Россия`,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h3d/h1e/64238615855134.jpg?format=gallery-large',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/ugol-aktivirovannnyi-tabletki-250-mg-10-sht-101075552/?c=750000000',
      inStock: true,
      likes: 0
    },
    {
      id: 5,
      name: 'Вафельница JP-555 красный',
      categoryId: 1,
      price: 5500,
      description: `материал корпуса: комбинированный;
      тип: вафельница;
      количество порций: 1;
      антипригарное покрытие: Да;
      цвет: красный`,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h55/h11/85282456109086.png?format=gallery-large',
      rating: 0,
      link: 'https://kaspi.kz/shop/p/vafel-nitsa-jp-555-krasnyi-116993796/?c=750000000',
      inStock: false,
      likes: 0
    },
    {
      id: 6,
      name: 'Wi-Fi роутер ALTEL P28 CPE',
      categoryId: 2,
      price: 29820,
      description: `тип: Wi-Fi роутер;
      максимальная скорость беспроводного соединения: 300.0 Мбит/с;
      стандарты Wi-Fi: Wi-Fi 4 (802.11n);
      количество LAN портов: 3;
      диапазоны частот: 2.4 ГГц`,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h8f/h1b/64219678736414.jpg?format=gallery-large',
      rating: 4,
      link: 'https://kaspi.kz/shop/p/wi-fi-router-altel-p28-cpe-101123550/?c=750000000',
      inStock: true,
      likes: 0
    },
    {
      id: 7,
      name: 'Раскладушка Fox International Раскладушка хаки',
      categoryId: 3,
      price: 12328,
      description: `максимальная нагрузка: 120.0 кг;
      материал: сталь;
      двуспальная: Нет`,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h3f/h7d/64175990603806.jpg?format=gallery-large',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/fox-international-raskladushka-haki-101815360/?c=750000000',
      inStock: true,
      likes: 0
    },
    {
      id: 8,
      name: 'Терафлю порошок 325 мг 10 шт',
      categoryId: 4,
      price: 2093,
      description: `назначение: жаропонижающие;
      антибиотик: Нет;
      рецептурный препарат: Нет;
      действующее вещество: парацетамол;
      условия отпуска: без рецепта;
      способ применения: пероральный;
      лекарственная форма: порошок;
      возрастные ограничения: с 18 лет;
      дозировка: 325 мг;
      страна производитель: Швейцария`,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/heb/hf3/64143706423326.jpg?format=gallery-large',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/teraflju-poroshok-325-mg-10-sht-101114328/?c=750000000',
      inStock: true,
      likes: 0
    },
    {
      id: 9,
      name: 'Кухонные весы Generic SF-400',
      categoryId: 1,
      price: 825,
      description: `тип: электронные;
      предел взвешивания: 10.0 кг;
      точность измерения: 1.0 г;
      счетчик калорий: Да;
      цвет: белый`,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h47/ha1/64094073815070.jpg?format=gallery-large',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/generic-sf-400-102531445/?c=750000000',
      inStock: false,
      likes: 0
    },
    {
      id: 10,
      name: 'Ноутбук Apple MacBook Air 13 MGN63 серый',
      categoryId: 2,
      price: 408737,
      description: `диагональ экрана: 13.3 дюйм;
      процессор: Apple M1;
      видеокарта: Apple M1 7 core;
      размер оперативной памяти: 8.0 Гб;
      тип жесткого диска: SSD;
      общий объем накопителей: 256.0 Гб`,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h73/h87/63947822596126.jpg?format=gallery-large',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000',
      inStock: true,
      likes: 0
    },
    {
      id: 11,
      name: 'Вешалка напольная ЗМИ Радуга 1 ВНП 298, металл, 82 смx150 см см, черный',
      categoryId: 3,
      price: 6100,
      description: `конструкция: напольная;
      материал: металл;
      количество крючков: 1;
      ширина, см: 82.0 см;
      высота, см: 150.0 см;
      цвет: черный;
      страна: Россия`,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h7e/h3a/64070603309086.jpg?format=gallery-large',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/veshalka-napol-naja-zmi-raduga-1-vnp-298-metall-82-smx150-sm-sm-chernyi-101580645/?c=750000000',
      inStock: false,
      likes: 0
    },
    {
      id: 12,
      name: 'Нафазолин-DF капли 0.1% 10 мл',
      categoryId: 4,
      price: 95,
      description: `назначение: вспомогательные средства при простуде;
      антибиотик: Нет;
      рецептурный препарат: Нет;
      действующее вещество: нафазолина нитрат;
      условия отпуска: без рецепта;
      способ применения: назальный;
      лекарственная форма: капли;
      возрастные ограничения: с 14 лет;
      дозировка: 0.1%;
      страна производитель: Казахстан`,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/haa/h36/64233731358750.jpg?format=gallery-large',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/nafazolin-df-kapli-0-1-10-ml-101111610/?c=750000000',
      inStock: true,
      likes: 0
    },
    {
      id: 13,
      name: 'Холодильник BEKO RCSK 270 M20W белый',
      categoryId: 1,
      price: 154070,
      description: `тип: холодильник с морозильником;
      количество камер: 2;
      класс энергопотребления: класс A+;
      размораживание морозильной камеры: ручное;
      цвет: белый`,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc2/hb1/63758761590814.jpg?format=gallery-large',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/beko-rcsk-270-m20w-belyi-2701657/?c=750000000',
      inStock: true,
      likes: 0
    },
    {
      id: 14,
      name: 'Планшет Apple iPad 2021 Wi-Fi 10.2 дюйм 4 Гб/64 Гб серебристый',
      categoryId: 2,
      price: 151990,
      description: `диагональ: 10.2 дюйм;
      разрешение экрана: 2160x1620;
      технология изготовления экрана: TFT IPS;
      объем оперативной памяти: 4 Гб;
      объем встроенной памяти: 64.0 Гб;
      беспроводные интерфейсы: Wi-Fi, ,Bluetooth;
      емкость аккумулятора: 3240.0 мАч;
      цвет: серебристый`,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h7e/h90/64072646492190.jpg?format=gallery-large',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-ipad-2021-wi-fi-10-2-djuim-4-gb-64-gb-serebristyi-102301731/?c=750000000',
      inStock: true,
      likes: 0
    },
    {
      id: 15,
      name: 'MSQ premium 02 диван, обивка текстиль, 80x210x75 см, синий',
      categoryId: 3,
      price: 52295,
      description: `механизм трансформации: еврокнижка;
      обивка: текстиль;
      высота: 80.0 см;
      ширина: 210.0 см;
      глубина: 75.0 см;
      комплектация: диван;
      цвет: синий;
      страна: Казахстан`,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hdf/h51/64448519307294.jpg?format=gallery-large',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/msq-premium-02-divan-obivka-tekstil-80x210x75-sm-sinii-104375942/?c=750000000',
      inStock: true,
      likes: 0
    },
    {
      id: 16,
      name: 'Мезим форте таблетки 3500 ЕД 20 шт',
      categoryId: 4,
      price: 33700,
      description: `назначение: ферменты;
      количество штук в упаковке: 20;
      способ применения: пероральный;
      лекарственная форма: таблетки;
      возрастные ограничения: с 18 лет;
      дозировка: 3500 ЕД;
      страна производитель: Германия`,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h60/hd2/63915846795294.jpg?format=gallery-large',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/mezim-forte-tabletki-3500-ed-20-sht-100968079/?c=750000000',
      inStock: true,
      likes: 0
    },
    {
      id: 17,
      name: 'Кофемашина SOKANY SK-6863 серебристый',
      categoryId: 1,
      price: 33298,
      description: `вид: автоматическая;
      тип: кофемашина;
      приготовление эспрессо: автоматическое;
      используемый кофе: молотый;
      возможность приготовления капучино: Да;
      противокапельная система: Да;
      цвет: серебристый`,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/he4/hf1/79877587238942.jpg?format=gallery-large',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/kofemashina-sokany-sk-6863-serebristyi-109791914/?c=750000000',
      inStock: false,
      likes: 0
    },
    {
      id: 18,
      name: 'Операционная система Microsoft Windows 11 Home 64-bit',
      categoryId: 2,
      price: 99990,
      description: `разрядность системы: 64-bit;
      носитель информации: USB-накопитель;
      количество устройств: 1;
      язык интерфейса: русский;
      модель: Windows 11 Home`,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h7e/he5/79737404817438.jpg?format=gallery-large',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/microsoft-windows-11-home-64-bit-109729250/?c=750000000',
      inStock: true,
      likes: 0
    },
    {
      id: 19,
      name: 'Плюшевая радость Принцесса розовый диван, кресло, обивка текстиль, 50x50x40 см',
      categoryId: 3,
      price: 10769,
      description: `тип: диван, ,кресло;
      материал обивки: текстиль;
      материал рамы: поролон;
      исполнение: бескаркасное, ,тканевое, ,раскладное;
      высота: 50.0 см;
      ширина: 50.0 см;
      цвет: фиолетовый`,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h40/h25/64231518666782.jpg?format=gallery-large',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/pljushevaja-radost-printsessa-rozovyi-divan-kreslo-obivka-tekstil-50x50x40-sm--102692389/?c=750000000',
      inStock: true,
      likes: 0
    },
    {
      id: 20,
      name: 'Цитрамон П таблетки 240 мг 10 шт',
      categoryId: 4,
      price: 147,
      description: `назначение: воспаления;
      антибиотик: Нет;
      рецептурный препарат: Нет;
      действующее вещество: ацетилсалициловая кислота;
      условия отпуска: без рецепта;
      способ применения: пероральный;
      лекарственная форма: таблетки;
      возрастные ограничения: с 18 лет;
      дозировка: 240 мг;
      страна производитель: Россия`,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h46/hc1/63963912962078.jpg?format=gallery-large',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/tsitramon-p-tabletki-240-mg-10-sht-100979731/?c=750000000',
      inStock: true,
      likes: 0
    }
  ];
  
  
  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */