import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainFrameService } from '../services/main-frame.service';
import { StockeeperService } from '../services/stockeeper.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare var $: any

@Component({
  selector: 'app-all-drug-stock-request',
  templateUrl: './all-drug-stock-request.component.html',
  styleUrls: ['./all-drug-stock-request.component.css']
})
export class AllDrugStockRequestComponent {

  requestList:any
  msg:any
  request: any;
  requestData:any
  requestedDrug:any
  getsession:any
  availabilityData:any
  requestedId:any
  requestStore:any
  drugID:any
  reqQuantity:any
  isSubmitted = false
  stockQuantity=new FormGroup({

    quantity:new FormControl('',[Validators.required])
  })
  constructor(private _stockKeeper:StockeeperService,public Main_frame:MainFrameService,private active:ActivatedRoute){
    this.getsession = JSON.parse(sessionStorage.getItem("User")||'{}');

  }


    ngAfterViewInit(): void {

      this.allrequestedDrug();
  
      }

drugStockAvailability(drugId:any,requestid:any,requestedStoreID:any,requestedquantity:any)
{ this.reqQuantity = requestedquantity
  this.requestedId=requestid
  this.requestStore = requestedStoreID
  this.drugID = drugId
 

this._stockKeeper.stockAvailability(drugId,this.getsession.StoreID).subscribe((res:any)=>{
// console.log('res')
console.log(res)
if(res.length >0){


this.availabilityData =res

let branchSection:any = document.getElementById('branchSection')

$('#branchSection').css('display','block')
$('#purchaseBTN').css('display','none')
branchSection.scrollIntoView({behavior: 'smooth'});

}else{
  
  let purchaeSection:any = document.getElementById('purchaseBTN')

  $('#purchaseBTN').css('display','block')
  $('#branchSection').css('display','none')
  purchaeSection.scrollIntoView({behavior: 'smooth'});
  
  
}

})


}
//toggle in the card stores 
toggleCard(event:any){
  if(event.target.closest('.purchaseForm')){
    return
    
    }else{
    
      $(event.currentTarget).toggleClass('branch')
    
    }
}

//transfer drug from store to store
transferDrug(transferbranchId:any){

  this.isSubmitted =true
if(this.stockQuantity.valid){
  let val:number = this.stockQuantity.value.quantity?parseInt(this.stockQuantity.value.quantity.toString()):0;
if(val<= this.reqQuantity)
{
this._stockKeeper.Transfer(this.requestedId,this.requestStore,this.drugID,transferbranchId,this.stockQuantity.value.quantity).subscribe(res=>{

// console.log(res)

window.location.reload()

 })

}else{
 this.msg = {"message":"This Quantity is More than the required"}
  console.log(this.msg)
}
}
 } // validation error return 
  get quantity(){return this.stockQuantity.get('quantity')}





//get all requested dru

allrequestedDrug(){

  $('.animation').fadeIn();
  $('.stockT').css('display','none')
 this._stockKeeper.allRequested().subscribe(res=>{
    $('.animation').fadeOut(0,function(){

      $('.stockT').css('display','block')
    })

  this.requestList = res

  console.log(res)

})

  

 }
 //transfer drug to purchase if no stock available
 purchaseTransfer(){
 this._stockKeeper.transferToPurchase(this.requestedId).subscribe(res=>{

  console.log(res)


 })
 }

 page:number=1
 count:number = 0
 tableSize :number =4
 
//pagination
onDataChange(event :any){
  this.page=event
}

}




