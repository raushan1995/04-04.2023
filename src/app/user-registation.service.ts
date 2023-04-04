import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserRegistationService {

  constructor(private http:HttpClient) { }


  public doRegistration(user: User){
    return this.http.post("http://localhost:8092/api/v1/adduser",user,{responseType:'text' as 'json'});
  }

}
