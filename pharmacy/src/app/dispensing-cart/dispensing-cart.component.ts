import { Component } from '@angular/core';
import { PharmacistService } from '../services/pharmacist.service';
declare var $: any

@Component({
  selector: 'app-dispensing-cart',
  templateUrl: './dispensing-cart.component.html',
  styleUrls: ['./dispensing-cart.component.css']
})
export class DispensingCartComponent {
  drugDispense:any
  getsession:any
  sum:number = 0
  msg:any
constructor(private _pharmacist:PharmacistService){
  this.getsession = JSON.parse(sessionStorage.getItem("User")||'{}');
  this.getdrugDispense()

}

// get data in the localhost 
getdrugDispense(){
 
this.drugDispense = JSON.parse(localStorage.getItem("dispenseCart")||'[]');
this.getTotalSum()

}

// update cart in the localhost 
updateCart(drugId:any,event:any)
{

  let drugObjectInfo = this.drugDispense.find((drug:any) => drug.drugId === drugId)
  drugObjectInfo.quantity = event.target.value
  drugObjectInfo.total = parseInt(drugObjectInfo.quantity) * parseInt(drugObjectInfo.price)
  this.getTotalSum()
  localStorage.setItem('dispenseCart',JSON.stringify(this.drugDispense))



}
// delete  cart in the localhost 
deleteCart(drugId:any){

  this.drugDispense = this.drugDispense.filter((drug:any) => drug.drugId != drugId)
  this.getTotalSum()
  localStorage.setItem('dispenseCart',JSON.stringify(this.drugDispense))

}


// check out operation 
dispenseOperation(){
  $('#animated-gif').fadeIn();

this._pharmacist.dispenseCheckOut(this.getsession.userID,this.getsession.StoreID,this.sum,this.drugDispense).subscribe(res=>
  {

    $('#animated-gif').fadeOut(0,function(){
  
     });
    console.log(res)
  },(error)=>{

     this.msg={"Message":"Some items is not Available"}

    },()=>{
      
      this.msg={"Message":"Your Request Is sent successfully"}
      localStorage.removeItem('dispenseCart')
    
    })
      
}

//reload page
reload(){

window.location.reload()

}


// get total amount in the localhost 
getTotalSum(){
 
  this.sum = 0

  for (let index = 0; index < this.drugDispense.length; index++) {

    this.sum+= parseInt(this.drugDispense[index].total) 

  }

   console.log(this.sum)

  }

}
