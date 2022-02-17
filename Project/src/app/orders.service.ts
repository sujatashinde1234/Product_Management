import { Injectable } from '@angular/core';
import { Orders } from './orders';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs-compat/observable';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private  baseURL ="http://localhost:8080/order";
  constructor(private httpClient:HttpClient) { }

  getOrdersList(): Observable<Orders[]>{
    return this.httpClient.get<Orders[]>(`${this.baseURL}`);
  }

  createOrders(orders:Orders): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,orders);
  }
    
  getOrdersById(id: number): Observable<Orders>{
    return this.httpClient.get<Orders>(`${this.baseURL}/${id}`);
  }
  
   updateorders(id: number,orders:Orders): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,orders);
  }

    deleteorders(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
