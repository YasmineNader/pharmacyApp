import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $:any
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {



  getsession:any
  count:any 
  countstock:any
  purchaseCount:any
  purchaseData:any
constructor(private _route:Router){


this.getsession = JSON.parse(sessionStorage.getItem("User")||'{}');

this.countCart()
this.countStock()
this.countPurchaseCart()
}

  ngOnInit(): void {

//  $('.cartLi').hover((event:any)=>{
  // console.log($(event.currentTarget).children("ul.dropdown-menu.subMenu"));
//   $(event.currentTarget).children("ul.dropdown-menu.subMenu").slideToggle()
//  })

    
  }


  logOut(){
    
    localStorage.removeItem('token')
    localStorage.clear()

  
    sessionStorage.removeItem("User")
    sessionStorage.clear()
    this._route.navigateByUrl('/')


}

//counter for dispense cart
countCart(){
  this.count= 0
let data
 data  = JSON.parse(localStorage.getItem("dispenseCart")||'[]');
if(data.length>0){
for (let index = 0; index < data.length; index++) {
  
   this.count++

}

}


}
//counter for stock cart

countStock(){
this.countstock= 0
let stockdata
stockdata  = JSON.parse(localStorage.getItem("stockCart")||'[]');
if(stockdata.length>0){
for (let index = 0; index < stockdata.length; index++) {
  
   this.countstock++

}

}


}


//counter for purchase cart

countPurchaseCart(){
  this.purchaseCount= 0
  let purchaseData
  purchaseData  = JSON.parse(localStorage.getItem("purchaseCart")||'[]');
  if(purchaseData.length>0){
  for (let index = 0; index < purchaseData.length; index++) {
    
     this.purchaseCount++
  
  }
  
  }
  
  
  }
}

