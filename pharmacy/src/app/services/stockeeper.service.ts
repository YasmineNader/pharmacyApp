import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockeeperService {

  constructor(private _stockeeper:HttpClient) { }


// Get all stock list  for stock Keeper
  allStockRequests():Observable<any>
  {
   
    return this._stockeeper.get("http://localhost:8000/api/order/request/")
    
  }


  // check availability
 stockAvailability(drugId:any,stockId:any):Observable<any>
  {
    let data = {"drug_id":drugId,"store_id":stockId}
    console.log("data")
   console.log(data)
    return this._stockeeper.post("http://localhost:8000/api/stock/availability/",data)
    
  }


  Transfer(stockrequest:any,requestedStore:any,drugId:any,fromStore:any,quantity:any):Observable<any>
  {
    let data = {"transferArray": [
      {
          "drug_id": drugId,
          "from_stock": fromStore,
          "to_stock": requestedStore,
          "quantity": quantity
      }
  ]}
  // console.log(data)
    
     return this._stockeeper.post(`http://localhost:8000/api/storetransfer/data/${stockrequest}/`,data)
    
  }

  getAllTransfer():Observable<any>
  {
    return this._stockeeper.get("http://localhost:8000/api/storetransfer/get/data")

  }



//get all requested drug
allRequested():Observable<any>
{
  return this._stockeeper.get("http://localhost:8000/api/order/drugs?status=REQ")

}

//transfer drug to purchase order
transferToPurchase(requestId:any):Observable<any>
{
  return this._stockeeper.put(`http://localhost:8000/api/order/request/${requestId}/`,{"request_status": "PUR"})

}




}

