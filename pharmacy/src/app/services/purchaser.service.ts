import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurchaserService {

  constructor(private _purchaser:HttpClient) { }



  
// Get all suppliers
allSuppliers():Observable<any>
{
 
  return this._purchaser.get("http://localhost:8000/api/supplier/data")
  
}




//get all purchase request  with status PUR

allpurchaseRequest():Observable<any>
{
  
  return this._purchaser.get("http://localhost:8000/api/order/drugs?status=PUR")
  
}

// add purchase order
purchaserOrder(description:any,supplier:any,orderDetails:any):Observable<any>

{
  let data = {
    "order_desc": description,
    "store": "order_desc",
    "invoice_status": 0,
    "supplier_id": supplier,
    "details": orderDetails
}
console.log(data)
  return this._purchaser.post("http://localhost:8000/api/purchaseorder/data/",data)
  
}

//get all purchase orders

allpurchaseOrder():Observable<any>
{
  
  return this._purchaser.get("http://localhost:8000/api/purchaseorder/data/")
  
}

//update invoice with product transfer by purchaser
invoices(orderID:any,invoiceNum:any,sum:any,details:any):Observable<any>
{
 let data = {
  "invoice_number": invoiceNum,
  "invoice_atm": sum,
  "details": details
}
console.log(data)
  
 return this._purchaser.put(`http://localhost:8000/api/purchaseorder/data/${orderID}/`,data)
  
}


}




