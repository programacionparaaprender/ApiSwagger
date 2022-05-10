import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TarjetaCredito } from '../models/tarjetacredito';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
  myAppUrl = "https://localhost:44372/";
  myApiUrl = "/api/tarjeta/";
  constructor(private http: HttpClient) {
    
  }

  getListTarjetas(): Observable<TarjetaCredito[]>{
    return this.http.get<TarjetaCredito[]>(this.myApiUrl);
  }

  deleteTarjeta(id: number): Observable<TarjetaCredito> {
    return this.http.delete<any>(this.myApiUrl + String(id));
  }
  
  saveTarjeta(tarjeta: any): Observable<TarjetaCredito> {
      return this.http.post<TarjetaCredito>(this.myApiUrl, tarjeta);
  }

  updateTarjeta(tarjeta: TarjetaCredito, id: number): Observable<any> {
    return this.http.put<any>(this.myApiUrl + `${id}`, tarjeta);
  }
}
