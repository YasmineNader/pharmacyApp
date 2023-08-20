import { Component } from '@angular/core';
import { StockeeperService } from '../services/stockeeper.service';
import { ActivatedRoute } from '@angular/router';
import { MainFrameService } from '../services/main-frame.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare var $: any
@Component({
  selector: 'app-stock-request-details',
  templateUrl: './stock-request-details.component.html',
  styleUrls: ['./stock-request-details.component.css']
})
export class StockRequestDetailsComponent {
  request: any;
  requestData:any
  requestedDrug:any
  getsession:any
  availabilityData:any
  requestedId:any
  requestStore:any
  drugID:any

  stockQuantity=new FormGroup({

    quantity:new FormControl('')
  })
  constructor(private _stockKeeper:StockeeperService,public Main_frame:MainFrameService,private active:ActivatedRoute){
    this.getsession = JSON.parse(sessionStorage.getItem("User")||'{}');

  }

  ngAfterViewInit(): void {

    this.stockRequestDetails()

  }


// stock drug details
stockRequestDetails(){
  $('.animation').fadeIn();
  $('.stockT').css('display','none')
 
  
this.request= this.active.snapshot.paramMap.get('RequestID')
this._stockKeeper.allStockRequests().subscribe(res=>{
  $('.animation').fadeOut(0,function(){

    $('.stockT').css('display','block')
  })
this.requestData = res.find((request:any) => request.id == this.request)

this.requestedDrug=this.requestData.store_requested
 console.log("datadaaaa")
 console.log(this.requestedDrug)

})
}

//check drug availability in stock
drugStockAvailability(drugId:any,requestid:any,requestedStoreID:any)
{
  this.requestedId=requestid
  this.requestStore = requestedStoreID
  this.drugID = drugId

  //  console.log('requestid')

  //  console.log(requestedStoreID)

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
  // console.log('this.requestStore')
  //  console.log(transferbranchId)
if(this.stockQuantity.valid){

this._stockKeeper.Transfer(this.requestedId,this.requestStore,this.drugID,transferbranchId,this.stockQuantity.value.quantity).subscribe(res=>{

console.log(res)

 })

}

}

page:number=1
count:number = 0
tableSize :number =4

//pagination
onDataChange(event :any){
 this.page=event
}

  // validation error return 
  get quantity(){return this.stockQuantity.get('quantity')}
}
    