import { Injectable } from '@angular/core';
import { Supplier } from './supplier';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs-compat/Observable';
@Injectable({
  providedIn: 'root'
})
export class SupplierService {

 
  private  baseURL ="http://localhost:8080/supplier";
  constructor(private httpClient:HttpClient) { }

  getSupplierList(): Observable<Supplier[]>{
    return this.httpClient.get<Supplier[]>(`${this.baseURL}`);
  }

  createSupplier(supplier:Supplier): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,supplier);
  }
    
  getSupplierById(id: number): Observable<Supplier>{
    return this.httpClient.get<Supplier>(`${this.baseURL}/${id}`);
  }
  
   updatesupplier(id: number,supplier:Supplier): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,supplier);
  }

    deletesupplier(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
   
  
}
