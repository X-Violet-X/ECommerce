import { Component } from '@angular/core';

@Component({
  selector: 'shop-cards',
  templateUrl: './shop-cards.component.html',
  styleUrls: ['./shop-cards.component.css']
})
export class ShopCardsComponent {
  products: any[] = [
    { 
      name: "Prodotto 1",
      price: 100,
      image: "assets/1.jpg"
    },
    { 
      name: "Prodotto 2",
      price: 200,
      image: "assets/2.jpg",
      colors: ["#FB9AD1", "#BC7FCD","#86469C"]
    },
    { 
      name: "Prodotto 2",
      price: 200,
      image: "assets/3.jpg",
      colors: ["red", "blue"]
    },
    { 
      name: "Prodotto 2",
      price: 200,
      image: "assets/3.jpg"
    },
    { 
      name: "Prodotto 2",
      price: 200,
      image: "assets/3.jpg"
    },
    { 
      name: "Prodotto 2",
      price: 200,
      image: "assets/3.jpg"
    },
    { 
      name: "Prodotto 2",
      price: 200,
      image: "assets/3.jpg"
    },
    { 
      name: "Prodotto 2",
      price: 200,
      image: "assets/3.jpg"
    },
    { 
      name: "Prodotto 2",
      price: 200,
      image: "assets/3.jpg"
    },
    { 
      name: "Prodotto 2",
      price: 200,
      image: "assets/3.jpg"
    },
    { 
      name: "Prodotto 2",
      price: 200,
      image: "assets/3.jpg"
    },
    { 
      name: "Prodotto 2",
      price: 200,
      image: "assets/3.jpg"
    },
    { 
      name: "Prodotto 2",
      price: 200,
      image: "assets/3.jpg"
    },
    { 
      name: "Prodotto 2",
      price: 200,
      image: "assets/3.jpg"
    },
    { 
      name: "Prodotto 2",
      price: 200,
      image: "assets/3.jpg"
    },

  ];

  constructor() { }

  ngOnInit(): void {

  }
}
