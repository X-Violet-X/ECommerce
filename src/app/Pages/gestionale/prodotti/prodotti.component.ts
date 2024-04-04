import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/services/product.service';

interface Prodotto {
  id: string;
  nome: string;
  categoria: string;
  prezzo: number;
  disponibilita: string;
}

@Component({
  selector: 'prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.css']
})
export class ProdottiComponent implements OnInit {

  prodItem: Prodotto[] = [];

  constructor(private prodottiService: ProductService){

  }


  ngOnInit() {
    this.caricaOrdini();
  }

  caricaOrdini(): void {
    this.prodottiService.getAllProducts().subscribe((state: any) => {
      this.prodItem = state.prodotti;
      console.log(this.prodItem);
    });
  }


  editProduct(productId: string): void {
    // La logica di modifica dovrebbe essere gestita diversamente in un'app Angular, possibilmente utilizzando un form
  }

  addProduct(): void {
    // La logica di aggiunta dovrebbe essere gestita attraverso un form e non tramite prompt
  }
}
