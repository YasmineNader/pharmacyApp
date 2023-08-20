import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

declare var jQuery: any

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _user:HttpClient) { 

  }
  // User Authentication 
    userLogin(Userdata:any):Observable<any>{
      return this._user.post("http://127.0.0.1:8000/api/auth/token/",Userdata)
  }
  // User Data and permissions
  userData():Observable<any>{
    return this._user.get("http://127.0.0.1:8000/api/user/getUser")
  }
  
}
