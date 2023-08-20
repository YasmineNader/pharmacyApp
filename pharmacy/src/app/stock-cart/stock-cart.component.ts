import { Component } from '@angular/core';
import { PharmacistService } from '../services/pharmacist.service';
declare var $: any

@Component({
  selector: 'app-stock-cart',
  templateUrl: './stock-cart.component.html',
  styleUrls: ['./stock-cart.component.css']
})
export class StockCartComponent {
  drugStock:any
  getsession:any
  sum:number = 0
  msg:any
  description:any
constructor(private _pharmacist:PharmacistService){
  this.getsession = JSON.parse(sessionStorage.getItem("User")||'{}');
  this.getdrugStock()

}

// get data in the localhost 
getdrugStock(){
 
this.drugStock = JSON.parse(localStorage.getItem("stockCart")||'[]');
this.getTotalSum()

}

// update cart in the localhost 
updateCart(drugId:any,event:any)
{

  let drugObjectInfo = this.drugStock.find((drug:any) => drug.drugId === drugId)
  drugObjectInfo.quantity = event.target.value
  drugObjectInfo.total = parseInt(drugObjectInfo.quantity) * parseInt(drugObjectInfo.price)
  this.getTotalSum()
  localStorage.setItem('stockCart',JSON.stringify(this.drugStock))



}
// delete  cart in the localhost 
deleteCart(drugId:any){

  this.drugStock = this.drugStock.filter((drug:any) => drug.drugId != drugId)
  this.getTotalSum()
  localStorage.setItem('stockCart',JSON.stringify(this.drugStock))

}


// check out operation 
stockOperation(){
  $('#animated-gif').fadeIn();

this._pharmacist.stockCheckOut(this.getsession.StoreID,this.description,this.drugStock).subscribe(res=>
  {
    $('#animated-gif').fadeOut(0,function(){
  
    });
    console.log(res)
  },(error)=>{

     this.msg={"Message":"Some items is not Available"}

    },()=>{
      
      this.msg={"Message":"Your Request Is sent successfully"}
      localStorage.removeItem('stockCart')
    
    })
      
}

textareaValue(event:any){

  this.description = event.target.value
}


//reload page
reload(){

window.location.reload()

}


// get total amount in the localhost 

getTotalSum(){
 
  this.sum = 0

  for (let index = 0; index < this.drugStock.length; index++) 
  {

    this.sum+= parseInt(this.drugStock[index].total)

    
  }

  // console.log(this.sum)

  }

}
