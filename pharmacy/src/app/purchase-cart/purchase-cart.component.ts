import { Component } from '@angular/core';
import { PurchaserService } from '../services/purchaser.service';
declare var $: any

@Component({
  selector: 'app-purchase-cart',
  templateUrl: './purchase-cart.component.html',
  styleUrls: ['./purchase-cart.component.css']
})
export class PurchaseCartComponent {

  supplier:any
  purchaseData:any
  description:any
  // checkbox:any=[]
  radioValue:any
  msg:any
  constructor(private _purchaser:PurchaserService){
    this.suppliers()
    this.getPurcahseinfo()

  }



//all Supplier
    suppliers()
    {


      this._purchaser.allSuppliers().subscribe(res=>{

        this.supplier = res
          // console.log(res)
      })

    }
 
    checked(event:any,data:any){
      // if(event.target.checked) {

      //   this.checkbox.push(data)

      // }
      // else{

      //   let check = this.checkbox.findIndex((x:any) => x == data )
      //   this.checkbox.splice(check,1);
      // }
        //  console.log(this.checkbox)
        if(event.target.checked) 
        {
          this.radioValue = data
          console.log(this.radioValue)
        }

    }
    textareaValue(event:any){

      this.description = event.target.value
    }

//get data from localhost
    getPurcahseinfo(){
 
      this.purchaseData = JSON.parse(localStorage.getItem("purchaseCart")||'[]');
      
   
  }


//add purchase order

addpurchaseOrder(){
  $('#animated-gif').fadeIn();


this._purchaser.purchaserOrder(this.description,this.radioValue,this.purchaseData).subscribe(res=>{
  $('#animated-gif').fadeOut(0,function(){
  
  });
      console.log(res)



},(error)=>{

  this.msg={"Message":"Some items is not Available"}

 },()=>{
   
   this.msg={"Message":"Your Request Is sent successfully"}
   localStorage.removeItem('purchaseCart')
 
 })




}

}
