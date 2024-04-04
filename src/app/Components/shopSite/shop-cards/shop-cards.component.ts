import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'shop-cards',
  templateUrl: './shop-cards.component.html',
  styleUrls: ['./shop-cards.component.css']
})

export class ShopCardsComponent implements OnInit  {
  
  //SORTING 
  products: any[] = []; // Array per contenere i dati dei prodotti
  originalProducts: any[] = []; // Array per contenere tutti i dati dei prodotti
  colorDictionary: { [key: string]: string } = {
    'Verde': '#008000', // Esempio di mappatura colore-verde
  };

  constructor(private http: HttpClient, private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchProducts(); // Chiamata per ottenere i dati dei prodotti all'inizializzazione del componente
  }

  fetchProducts(): void {
    const url = 'http://localhost:5454/products/findByGenere/F'; // Url per ottenere i dati dei prodotti
    this.apiService.apiGET(url).subscribe(
      (response: any) => {
        this.originalProducts = response; // Popola l'array originale di prodotti con i dati ricevuti dalla chiamata API
        this.filterProducts(); // Chiama la funzione per filtrare i prodotti
      },
      (error: any) => {
        console.log('Errore durante il recupero dei prodotti:', error);
      }
    );
  }

  filterProducts(): void {
    const uniqueProductCodes = new Set(); // Utilizza un Set per memorizzare i codici prodotto unici
    this.products = this.originalProducts.filter((product) => {
      const firstFourLetters = product.codice_articolo.slice(0, 4); // Prendi solo le prime 4 lettere del codice prodotto
      if (!uniqueProductCodes.has(firstFourLetters)) {
        uniqueProductCodes.add(firstFourLetters);
        return true; // Restituisci true se le prime 4 lettere del codice prodotto sono uniche
      }
      return false; // Restituisci false se le prime 4 lettere del codice prodotto sono duplicate
    });
  }

  // products: any[] = []; // Array per contenere i dati dei prodotti

  // constructor(private apiService: ApiService) { }

  // ngOnInit(): void {
  //   this.fetchProducts(); // Chiamata per ottenere i dati dei prodotti all'inizializzazione del componente
  // }

  // fetchProducts(): void {
  //   const url = 'http://localhost:5454/products/getAllFe'; // Url per ottenere i dati dei prodotti
  //   this.apiService.apiGET(url).subscribe(
  //     (response: any) => {
  //       this.products = response; // Popola l'array di prodotti con i dati ricevuti dalla chiamata API
  //     },
  //     (error: any) => {
  //       console.log('Errore durante il recupero dei prodotti:', error);
  //     }
  //   );
  // }
}
