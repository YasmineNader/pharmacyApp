import { Component } from '@angular/core';
import { PharmacistService } from '../services/pharmacist.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-drug-details',
  templateUrl: './drug-details.component.html',
  styleUrls: ['./drug-details.component.css']
})
export class DrugDetailsComponent {
 getsession:any
 drugInfo:any
 quantityValue:any
 price:any
constructor(private _pharmacist:PharmacistService,private active:ActivatedRoute){
  this.getsession = JSON.parse(sessionStorage.getItem("User")||'{}');

   this.drugView()
}




// get drug information

  drugView(){
   let drugID =  this.active.snapshot.paramMap.get('drugID')

   this._pharmacist.drugDetails(drugID,this.getsession.StoreID).subscribe(res=>{


     this.drugInfo=res?.drug

     this.price = res.store_stock[0].stock_id.selling_price
  
    console.log(this.price )
  })

  }

//return quantity value
  inputValue(event:any){


    this.quantityValue =  event.target.value


  }


// add dispense in cart in localhost
addDispenseCart(){


let dispense =JSON.parse(localStorage.getItem("dispenseCart")||'[]');
let newObj:any = {}
newObj['drugId'] = this.drugInfo?.id
newObj['drugName'] = this.drugInfo?.en_brand_name
newObj['price'] = this.price
newObj['quantity'] =this.quantityValue ||  1
newObj['total']=parseInt(newObj['price']) * parseInt(newObj['quantity'])
let drugObjectInfo = dispense.find((drug:any) => drug?.drugId === this.drugInfo?.id)

  if(dispense.length>0 && drugObjectInfo ){

    drugObjectInfo.quantity+=parseInt(newObj['quantity'])
    drugObjectInfo.total = parseInt(newObj['price']) * parseInt(drugObjectInfo.quantity)

  }
  else{
  dispense.push(newObj)
    }


localStorage.setItem('dispenseCart',JSON.stringify(dispense))
window.location.reload();


  }



  // add stock in cart in localhost
addStockCart(){


  let stock =JSON.parse(localStorage.getItem("stockCart")||'[]');
  let newObj:any = {}
  newObj['drugId'] = this.drugInfo?.id
  newObj['drugName'] = this.drugInfo?.en_brand_name
  newObj['price'] = this.price
  newObj['quantity'] =this.quantityValue ||  1
  newObj['total']=parseInt(newObj['price']) * parseInt(newObj['quantity'])
  let drugObjectInfo = stock.find((drug:any) => drug?.drugId === this.drugInfo?.id)
  
    if(stock.length>0 && drugObjectInfo ){
  
      drugObjectInfo.quantity+=parseInt(newObj['quantity'])
      drugObjectInfo.total = parseInt(newObj['price']) * parseInt(drugObjectInfo.quantity)
  
    }
    else{
    stock.push(newObj)
      }
  

  localStorage.setItem('stockCart',JSON.stringify(stock))
  
  window.location.reload();

    }
}
