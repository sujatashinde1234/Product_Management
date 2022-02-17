import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs-compat/observable';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private  baseURL ="http://localhost:8080/customer";
  constructor(private httpClient:HttpClient) { }

  getCustomerList(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.baseURL}`);
  }

  createCustomer(customer:Customer): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,customer);
  }
    
  getCustomerById(id: number): Observable<Customer>{
    return this.httpClient.get<Customer>(`${this.baseURL}/${id}`);
  }
  
   updatecustomer(id: number,customer:Customer): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,customer);
  }

    deletecustomer(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
