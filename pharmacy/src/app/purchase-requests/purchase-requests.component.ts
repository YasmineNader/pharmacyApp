import { Component } from '@angular/core';
import { MainFrameService } from '../services/main-frame.service';
import { PurchaserService } from '../services/purchaser.service';
declare var $: any

@Component({
  selector: 'app-purchase-requests',
  templateUrl: './purchase-requests.component.html',
  styleUrls: ['./purchase-requests.component.css']
})
export class PurchaseRequestsComponent {
  requestData:any
  constructor(public Main_frame:MainFrameService,private purchaser:PurchaserService){
  }


  ngAfterViewInit(): void {

    this.allRequests()

    }
  allRequests(){
    $('.animation').fadeIn();
    $('.purchaseT').css('display','none')
    this.purchaser.allpurchaseRequest().subscribe(res=>{
      $('.animation').fadeOut(0,function(){

        $('.purchaseT').css('display','block')
      })
    this.requestData=res
    console.log(res)
  
    })
    
    
    }
//add to cart in localhost
    purchaseCart(dataId:any){



      let purchase =JSON.parse(localStorage.getItem("purchaseCart")||'[]');
      let purchaseDrug = this.requestData.find((drug:any) => drug?.id == dataId)
      // console.log(purchaseDrug)
      let newObj:any = {}
      newObj['order_quantity'] = purchaseDrug?.request_drug_quantity
      newObj['drug_id'] = purchaseDrug?.drug_id.id
      newObj['request_drug_num'] = purchaseDrug?.id

      let pIndex = purchase.find((element:any) => element.drug_id == purchaseDrug.drug_id.id);

     
      if(pIndex==undefined){
        purchase.push(newObj)
      }
    
    
    localStorage.setItem('purchaseCart',JSON.stringify(purchase))
    window.location.reload();

    }


    page:number=1
    count:number = 0
    tableSize :number =4
    
   //pagination
   onDataChange(event :any){
     this.page=event
   }
    
}
