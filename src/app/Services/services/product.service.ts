import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:5454';

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/api/products`);
  }

  getProductById(productId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/api/products/${productId}`);
  }

  addProduct(productData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/api/products`, productData);
  }

  updateProduct(productId: number, productData: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/api/products/${productId}`, productData);
  }

  deleteProduct(productId: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/api/products/${productId}`);
  }
}