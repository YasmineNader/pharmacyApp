import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainFrameService } from '../services/main-frame.service';
import { PharmacistService } from '../services/pharmacist.service';
import { PurchaserService } from '../services/purchaser.service';
declare var $: any

@Component({
  selector: 'app-purchase-invoicing',
  templateUrl: './purchase-invoicing.component.html',
  styleUrls: ['./purchase-invoicing.component.css']
})
export class PurchaseInvoicingComponent {
  orderData:any
  singleData:any
  sData:any;
  orderId:any
  invoiceNumber:any
  msg:any
  constructor(public Main_frame:MainFrameService,private purchaser:PurchaserService,private active:ActivatedRoute,private route:Router){
 
  }


  ngAfterViewInit(): void {

    this.singleOrderData()

    }
  totalSum=0;
  details:any=[]
  updateSingleData(){
    this.details=[]
    this.totalSum=0;
    let maxCount = this.sData.order_drug.length;
    for(let i=0;i<maxCount;i++){
    let price:any = $('#Price_'+i).val();
    let quantity:any = $('#Quantity_'+i).val();
    let id:any = $('#id_'+i).html();
    let sum = parseInt(price) * parseInt(quantity);
    if(!isNaN(sum)){
      let newObj:any = {}
    newObj['invoice_quantity'] = quantity
    newObj['drug_cost'] = price
    newObj['id'] = id
        this.totalSum+=sum;
        this.details.push(newObj)
    }
    }
    $('#amountSum').html(this.totalSum);
  //
  }
 singleOrderData(){

  $('.animation').fadeIn();
  $('.invoiceT').css('display','none')

  this.purchaser.allpurchaseOrder().subscribe(res=>{
    $('.animation').fadeOut(0,function(){

      $('.invoiceT').css('display','block')
    })
  this.orderData = res

  this.orderId =  this.active.snapshot.paramMap.get('orderId')
  this.singleData = this.orderData.filter((order:any)=>order.order_id == this.orderId );
  this.sData = this.singleData[0];

  console.log(this.singleData[0].order_drug)
  })
}


  invoice(){


    this.purchaser.invoices(this.orderId,this.invoiceNumber,this.totalSum,this.details).subscribe(res=>{

      console.log(res)

 this.msg = res

    })



  }

  textareaValue(event:any){

  this.invoiceNumber = event.target.value
  }
  



}
