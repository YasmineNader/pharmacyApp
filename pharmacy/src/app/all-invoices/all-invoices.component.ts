import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainFrameService } from '../services/main-frame.service';
import { PurchaserService } from '../services/purchaser.service';
declare var $: any
@Component({
  selector: 'app-all-invoices',
  templateUrl: './all-invoices.component.html',
  styleUrls: ['./all-invoices.component.css']
})
export class AllInvoicesComponent  {
  orderData:any
  constructor(private purchaser:PurchaserService,public Main_frame:MainFrameService,private active:ActivatedRoute){
  }

  ngAfterViewInit(): void {

    this.allpurchasesOrder()

    }

    
 allpurchasesOrder(){
  $('.animation').fadeIn();
  $('.purchaseT').css('display','none')

  this.purchaser.allpurchaseOrder().subscribe(res=>{
    $('.animation').fadeOut(0,function(){

      $('.purchaseT').css('display','block')
    })
  this.orderData = res
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

 



