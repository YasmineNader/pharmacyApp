import { Component } from '@angular/core';
import { StockeeperService } from '../services/stockeeper.service';
import { ActivatedRoute } from '@angular/router';
import { MainFrameService } from '../services/main-frame.service';
declare var $: any

@Component({
  selector: 'app-stock-request',
  templateUrl: './stock-request.component.html',
  styleUrls: ['./stock-request.component.css']
})
export class StockRequestComponent {

  requestList:any

  constructor(private _stockKeeper:StockeeperService,public Main_frame:MainFrameService,private active:ActivatedRoute){
  }

  ngAfterViewInit(): void {

    this.allrequests();

  }


//get all stock list

allrequests(){
  $('.animation').fadeIn();
  $('.stockT').css('display','none')
  this._stockKeeper.allStockRequests().subscribe(res=>{
    $('.animation').fadeOut(0,function(){

      $('.stockT').css('display','block')
    })
  this.requestList = res

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



