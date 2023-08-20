import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor( private _admin:HttpClient ) { }

// add user
addUser(data:any):Observable<any>
{
 
  return this._admin.post("http://localhost:8000/api/user/createUser/",data)
  
}
//get all users
AllUser():Observable<any>
{
 
  return this._admin.get("http://localhost:8000/api/user/getall")
  
}
//add supplier
addSupplier(data:any):Observable<any>
{
 
  return this._admin.post("http://localhost:8000/api/supplier/data/",data)
  
}
 

//get all supplier
AllSupplier():Observable<any>
{
 
  return this._admin.get("http://localhost:8000/api/supplier/data")
  
}


//add stores
addStore(data:any):Observable<any>
{
 
  return this._admin.post("http://localhost:8000/api/store/data/",data)
  
}


//get all stores
AllStores():Observable<any>
{
 
  return this._admin.get("http://localhost:8000/api/store/data")
  
}

//add user store 
addUserStore(data:any):Observable<any>
{
 
  return this._admin.post("http://localhost:8000/api/userstore/data/",data)
  
}

//get all user store
AllUserStore():Observable<any>
{
 
  return this._admin.get("http://localhost:8000/api/userstore/data")
  
}

//add drug
addDrug(data:any):Observable<any>
{
 
  return this._admin.post("http://localhost:8000/api/drug/drug/operation/",data)
  
}

//get one drug
getOneDrug(drugId:any):Observable<any>
{
 
  return this._admin.get(`http://localhost:8000/api/drug/drug/operation/${drugId}`)
  
}

//edit drug 

editDrug(data:any,drugId:any):Observable<any>
{
 
  return this._admin.put(`http://localhost:8000/api/drug/drug/operation/${drugId}/`,data)
  
}

//add class
addClass(data:any):Observable<any>
{
 
  return this._admin.post("http://localhost:8000/api/drug/classes/operation/",data)
  
}

//get data of one class for edit 
getOneClass(classId:any):Observable<any>
{
 
  return this._admin.get(`http://localhost:8000/api/drug/classes/operation/${classId}`)
  
}
//edit Category

editCategory(data:any,classId:any):Observable<any>
{
 
  return this._admin.put(`http://localhost:8000/api/drug/classes/operation/${classId}/`,data)
  
}

}
