import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ordine } from './OrdineModel'; 

@Injectable({
  providedIn: 'root'
})
export class OrdiniService {
  private apiUrl = 'http://localhost:5454/api/orders/findAll'; 
  constructor(private http: HttpClient) { }

  getOrdini(): Observable<Ordine[]> {
    return this.http.get<Ordine[]>(this.apiUrl);
  }
}