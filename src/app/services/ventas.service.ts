import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  myAppUrl: string;
  myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/Venta/';
  }

  getListVentasByUser(): Observable<any> {
    return this.http.get(`${this.myAppUrl}${this.myApiUrl}GetListVentasByUser`)
  }

  getListVentas(): Observable<any> {
    return this.http.get(`${this.myAppUrl}${this.myApiUrl}GetListVentas`)
  }
}
