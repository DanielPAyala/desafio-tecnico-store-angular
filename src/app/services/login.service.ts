import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  myAppUrl: string;
  myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/Login';
  }

  login(usuario: Usuario): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`, usuario);
  }

  setNombreUsuario(data: string) {
    localStorage.setItem('token', data);
  }

  getTokenDecoded(): any {
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(localStorage.getItem('token')!);
    return decodedToken;
  }

  getNombreUsuario(): string {
    return this.getTokenDecoded().sub;
  }

  removeLocalStorage(): void {
    localStorage.removeItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
