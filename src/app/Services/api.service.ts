import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  domain:String="http://localhost:5454"

  constructor(private http: HttpClient) { }

  // GET
  public apiGET(url: string): Observable<any> {
    return this.http.get(url);
  }

  // POST
  public apiPOST(url: string, body: any): Observable<any> {
    return this.http.post(url, body);
  }

  public login(username: string, password: string): Observable<any> {
    const endpoint = '/auth/signin'; // L'endpoint per il login

    const body = {
      username: username,
      password: password
    };

    return this.apiPOST(`${this.domain}${endpoint}`, body);
  }


  public registrati(username: string, password: string): Observable<any> {
    const endpoint = '/auth/signup'; // L'endpoint per il login

    const body = {
      username: username,
      password: password
    };

    return this.apiPOST(`${this.domain}${endpoint}`, body);
  }
}