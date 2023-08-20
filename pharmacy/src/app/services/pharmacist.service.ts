import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PharmacistService {

  constructor(private _pharmacist:HttpClient) { }
  // drug search 
    drugSearch(searchData:any):Observable<any>
    {
      let jsObj:any={};
      let key =searchData['searchSelect'];
      jsObj[key] = searchData['search'];
      console.log(jsObj);
      // 'key':searchData['searchSelect'],'value':searchData['search']
      return this._pharmacist.post("http://127.0.0.1:8000/api/drug/search/",jsObj)
    }

    // Drug information details
    drugDetails(id:any,storeID:any):Observable<any>
      {
      return this._pharmacist.get(`http://127.0.0.1:8000/api/drug/search?id=${id}&store_id=${storeID}`)
      }


        // drug Names  for search autocomplete
    drugNames():Observable<any>
    {
   
      return this._pharmacist.post("http://127.0.0.1:8000/api/drug/search/",null)
    }
    // total search for pharmacist
    pharmacistSales(userid:any,storeID:any,date:any):Observable<any>
    {
    return this._pharmacist.get(`http://127.0.0.1:8000/api/dispensing/sales?user_id=${userid}&store_id=${storeID}&date=${date}`)
    }
  
    // drug categories
    drugCategories():Observable<any>
    {
    return this._pharmacist.get('http://127.0.0.1:8000/api/drug/classes')
    
    }

  
  // drug search by categories 
  drugCategorySearch(category:any):Observable<any>
  {
   
    return this._pharmacist.post("http://127.0.0.1:8000/api/drug/search/",{"class_id":category})
  }
  

  // pharmacy Dispense list 
  dispenseList():Observable<any>
  {
  return this._pharmacist.get('http://127.0.0.1:8000/api/dispensing/operation/')
  
  }
  
    
  // pharmacy Dispense list 
  dispenseCheckOut(user_id:any,storeId:any,total:any,drugDispData:any):Observable<any>
  {

let newObj:any = {}
let drugData=[]
for (let index = 0; index < drugDispData.length; index++) {
newObj['id'] = drugDispData[index].drugId
newObj['quantity'] =drugDispData[index].quantity
drugData.push(newObj)
}

var data = 
{
'store':storeId,
'total_price':total,
'user_id':user_id,
'drugs':drugData
}


  return this._pharmacist.post('http://127.0.0.1:8000/api/dispensing/operation/',data)
  
  }
 
// pharmacy Stock list 

stockCheckOut(storeId:any,description:any,drugstockData:any):Observable<any>
{

let newObj:any = {}
let drugData=[]
for (let index = 0; index < drugstockData.length; index++) {
newObj['id'] = drugstockData[index].drugId
newObj['quantity'] =drugstockData[index].quantity
drugData.push(newObj)
}


var data = 
{

'store_id':storeId,
'request_desc':description,
'drugs':drugData
}


  return this._pharmacist.post('http://localhost:8000/api/order/request/',data)
  
 }
  
  
  
  // drug shortage 
  drugShortage():Observable<any>
  {
   
    return this._pharmacist.get("http://127.0.0.1:8000/api/stock/shorts/")
    
  }


  //requested drug send to other stock
  
  requestedStockDrug():Observable<any>
  {
   
    return this._pharmacist.get("http://localhost:8000/api/order/drugs?status=REQ")
    
  }




  

  }
