import { Component } from '@angular/core';
import { StockeeperService } from '../services/stockeeper.service';
declare var $: any
@Component({
  selector: 'app-all-transfer',
  templateUrl: './all-transfer.component.html',
  styleUrls: ['./all-transfer.component.css']
})
export class AllTransferComponent {

tansferData:any
constructor(private _stockKeeper:StockeeperService){

this.Alltransfer()
}

ngAfterViewInit(): void {

  this.Alltransfer()


}


Alltransfer(){
  $('.animation').fadeIn();
  $('.stockT').css('display','none')
 

  this._stockKeeper.getAllTransfer().subscribe(res=>{
    $('.animation').fadeOut(0,function(){

      $('.stockT').css('display','block')
    })
    
    this.tansferData = res[0].stock_transfer_transfer_drug

    console.log(res[0].stock_transfer_transfer_drug )


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
