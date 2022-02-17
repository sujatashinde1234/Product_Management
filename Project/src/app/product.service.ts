import { HttpClient,HttpEvent} from '@angular/common/http';
import { Injectable, Query } from '@angular/core';
import { Observable } from 'rxjs-compat/Observable';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private  baseURL ="http://localhost:8080/products";
  constructor(private httpClient:HttpClient) { }

  getProductList(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseURL}`);
  }

  createProduct(product:Product): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,product);
  }
    
  getProductById(id: number): Observable<Product>{
    return this.httpClient.get<Product>(`${this.baseURL}/${id}`);
  }
  
   updateproduct(id: number,product:Product): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,product);
  }

    deleteproduct(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
   
  search(){
    return this.httpClient.get(`${this.baseURL}/${Query}`);
  }
   
   
  
}