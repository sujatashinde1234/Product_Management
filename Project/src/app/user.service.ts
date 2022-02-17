import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user:User;
  constructor(private httpClient:HttpClient) { }

 
loginUser(user:User): Observable<any>{
    return this.httpClient.post<any>("http://localhost:8080/users/login",user);
  }
}
