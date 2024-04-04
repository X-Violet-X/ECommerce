import { Component, OnInit } from '@angular/core';
import { Ordine } from './OrdineModel';
import { OrdiniService } from './ordini.service';

@Component({
  selector: 'ordini',
  templateUrl: './ordini.component.html',
  styleUrls: ['./ordini.component.css']
})
export class OrdiniComponent implements OnInit {

  ordini: Ordine[] = [];

  constructor(private ordiniService: OrdiniService) { }

  ngOnInit(): void {
    this.caricaOrdini();
  }

  caricaOrdini(): void {
    this.ordiniService.getOrdini().subscribe((ordini: Ordine[]) => {
      this.ordini = ordini;
    });
  }

}
