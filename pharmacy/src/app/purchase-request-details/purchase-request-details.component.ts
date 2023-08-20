import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { MainFrameService } from '../services/main-frame.service';
import { PharmacistService } from '../services/pharmacist.service';
import { PurchaserService } from '../services/purchaser.service';
declare var $: any
@Component({
  selector: 'app-purchase-request-details',
  templateUrl: './purchase-request-details.component.html',
  styleUrls: ['./purchase-request-details.component.css']
})
export class PurchaseRequestDetailsComponent implements OnInit {
  constructor(public Main_frame:MainFrameService,private purchaser:PurchaserService){
    this.allRequests()
  }

  ngOnInit(): void {


// $('.branchCard').click(function(){

//   $('.branchCard').toggleClass('branch')

// })

let branchSection:any = document.getElementById('branchSection')
$('.branchCard').click(function(event:any){
  
if(event.target.closest('.purchaseForm')){
return

}else{

  $(event.currentTarget).toggleClass('branch')

}

})


$('.btnCheckAvail').click(function(){


  $('#branchSection').css('display','block')

  branchSection.scrollIntoView({behavior: 'smooth'});


})


}


allRequests(){
this.purchaser.allpurchaseRequest().subscribe(res=>{


  console.log(res)
})


}


}
