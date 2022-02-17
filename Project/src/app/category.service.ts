import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './category';
import { Observable } from 'rxjs-compat/observable';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }

  private  baseURL ="http://localhost:8080/category";
  

  getCategoryList(): Observable<Category[]>{
    return this.httpClient.get<Category[]>(`${this.baseURL}`);
  }

  createCategory(category:Category): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,category);
  }
    
  getCategoryById(id: number): Observable<Category>{
    return this.httpClient.get<Category>(`${this.baseURL}/${id}`);
  }
  
   updatecategory(id: number,category:Category): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,category);
  }

    deletecategory(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
