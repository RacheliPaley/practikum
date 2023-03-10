import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { getMatInputUnsupportedTypeError } from '@angular/material/input';
import User from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
         
  currentUser=new BehaviorSubject<{ Id:number, Tz:string, Fname:string, Lname:string,
    DateOfBirdth:Date, Min:string, Hmo:string}>(null);
  constructor(public http:HttpClient) { }
  personSer=new User(0,"","","",null,null,null)
  baseRouteUrl=`https://localhost:7291/api/User`
  saveInStorage(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }
  getFromStorage() {
   
    let u = localStorage.getItem("user");
    if (u ==null)
    {
    let  res = new User( null, null, null, null,
        null,null, null);
       
        return res;

    }
    
    return JSON.parse(u);
  }
  removeFromStorage() {
    localStorage.removeItem("user");
  }
  addPerson(person:User){
    // return this.http.post<object>(`${this.baseRouteUrl}/AddUser/?u=${person}`, person)
    return this.http.post<object>(`${this.baseRouteUrl}`, person)

  }
 
  getAllPerson(){
    return this.http.get<User[]>(this.baseRouteUrl)
    
  }
}
