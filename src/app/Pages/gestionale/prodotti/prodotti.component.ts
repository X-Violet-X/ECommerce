import { Component, OnInit } from '@angular/core';

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

  prodotti: Prodotto[] = [];

  ngOnInit() {
    this.renderProducts();
  }

  renderProducts(): void {
    const tableBody: HTMLElement | null = document.getElementById('product-table-body');
    if (tableBody) {
      tableBody.innerHTML = '';
      this.prodotti.forEach((prodotto: Prodotto) => {
        const row: string = `
          <tr>
            <td>${prodotto.id}</td>
            <td>${prodotto.nome}</td>
            <td>${prodotto.categoria}</td>
            <td>${prodotto.prezzo}</td>
            <td>${prodotto.disponibilita}</td>
            <td class="action-buttons">
              <button (click)="editProduct('${prodotto.id}')">Modifica</button>
              <button (click)="deleteProduct('${prodotto.id}')">Elimina</button>
              <!-- Il pulsante Aggiungi Prodotto non ha senso in questo contesto -->
            </td>
          </tr>
        `;
        tableBody.innerHTML += row;
      });
    }
  }

  deleteProduct(productId: string): void {
    this.prodotti = this.prodotti.filter((prodotto: Prodotto) => prodotto.id !== productId);
    this.renderProducts();
  }

  editProduct(productId: string): void {
    // La logica di modifica dovrebbe essere gestita diversamente in un'app Angular, possibilmente utilizzando un form
  }

  addProduct(): void {
    // La logica di aggiunta dovrebbe essere gestita attraverso un form e non tramite prompt
  }
}
