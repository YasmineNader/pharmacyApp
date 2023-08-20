import { Component, OnInit,AfterViewInit } from '@angular/core';
import { MainFrameService } from '../services/main-frame.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Chart } from 'chart.js';
import { ActivatedRoute, Router } from '@angular/router';
import { PharmacistService } from '../services/pharmacist.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare var $: any




 
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit,AfterViewInit {
  getsession:any
  categoryInfo:any
  dispenseList:any
  DispenseData:any
  drugShorts:any
  pharmacistSales:any
  searchData:any
  drugName:string[] = [];
  requestedDrugs:any
  isSubmitted:boolean=false
  searchValues=new FormGroup({
    searchSelect:new FormControl('Commerical Name'),
    search:new FormControl('',[Validators.required]),
  })


  // pagination
page:number=1
count:number = 0
tableSize:any = 5;
tableSizes :any =[5,10,15,20]
ngAfterViewInit(){

  var myChart = new Chart("myChart", {
    type: 'line',
    data: {
      labels: ['march','april','may'],
      datasets: [{
        label: 'Monthly sales',
        data: [65, 59, 80],
        fill: false,
        borderColor: 'blue',
      
      }]
    },
    options: {
        scales: {
          
        }
    }
  });


}

  constructor(public Main_frame:MainFrameService,private _pharmacist:PharmacistService,private active:ActivatedRoute,private route:Router){
    this.getsession = JSON.parse(sessionStorage.getItem("User")||'{}');
    this.autoCompleteDrugs()
    this.drugShort ()
    this.drugcategory()
    this.pharamacistSalesInfo()
    this.dispenseOperation()
    this.stockRequests()
    this.searchValues.controls["searchSelect"].setValue("en_brand_name");
  
  }
start =false
salesCount:any=0 ;
salesAmount:any =0;
private startCount(number:any,final:any){
  if(final!=0){
  let timer = setInterval(()=>{
    number.innerHTML++
    if(number.innerHTML == final){
      clearInterval(timer)
    }
  },2000 / final)
}
} 

  public customOptions: OwlOptions =  {
    loop: true,
    margin:10,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0:{
        items:1
    },
    600:{
        items:3
    },
    1000:{
        items:5,
        nav:true

    }
      },
    nav: true
  }
  

  ngOnInit(): void {
    this.Main_frame.show()

    this.salesCount = document.getElementById('salesCount');
    this.salesAmount = document.getElementById('salesAmount');
 
  


  
  let section:any= document.getElementById('counterSection')
  let categorysection:any= document.getElementById('categorySection')
  let whySection:any= document.getElementById('whySection')
  let searchSeaction:any= document.getElementById('searchSeaction')
  let whyParagraph:any = document.getElementById('whyParagraph')
  let serviceSection:any = document.getElementById('serviceSection')
  
 
  


var i = 0;
var txt = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima repellendus blanditiis, earumvel vero inventore, voluptates totam neque aut necessitatibus deserunt beatae! Officia, nemo veniam! Facere,quis inventore! Ullam, voluptas?'
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    whyParagraph.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}




  let categoryStart =false
  let whyStart = false
  let searchStart = false
  let serviceStart = false

  
    window.onscroll = ()=>{



      if(window.scrollY+600 >= categorysection.offsetTop){
        
        if(!categoryStart)
       {
        $('#categorySection').css('visibility','visible')
        $('#categorySection').addClass('animate__animated animate__fadeIn animate__slower')
        
        
       }
       categoryStart=true

     }





   if(window.scrollY +500>= searchSeaction.offsetTop){
        
    if(!searchStart)
   {
    $('#searchInputs').css('visibility','visible')
    $('#searchSelect').addClass('animate__animated animate__fadeInLeft animate__slower');
    $('#SearchInput').addClass('animate__animated animate__fadeInRight animate__slower');
    
    
   }
   searchStart=true

 }


 }









$( "#search" ).autocomplete({
  source: this.drugName

});
















}

getCurrentDate(){
  const d = new Date();
  let day :any = (d.getDate()-1);
  let year:any  = d.getFullYear();
  let month:any = (d.getMonth()+1);
  if (day < 10) {
      day = '0' + day;
  }
  
  if (month < 10) {
      month = `0${month}`;
  }
  return year+"-"+month+"-"+day
  } 

//info about sales for pharmacist
pharamacistSalesInfo(){

this._pharmacist.pharmacistSales(this.getsession.userID,this.getsession.StoreID,this.getCurrentDate()).subscribe(res=>{

  this.pharmacistSales = res
  if(!this.start)
  {   
      this.startCount(this.salesAmount, this.pharmacistSales.total_amount)
      this.startCount(this.salesCount,this.pharmacistSales.total_operation)    
  }
  this.start=true
// console.log(res)
})




}

//info about categories
drugcategory(){

  this._pharmacist.drugCategories().subscribe(res=>{
  
  this.categoryInfo = res
  
  })
  
  
  
  
  }



  //dispense list for pharmacist
dispenseOperation()
{

  this._pharmacist.dispenseList().subscribe(res=>{
    $('#animated').fadeIn();
    $('#animated').fadeOut(0,function(){

      $('.dispenseTable').css('display','block')
  
     });
  this.dispenseList = res;//.filter((s:any,i:number)=>i<=5)
  console.log(res)
  
  })
  
 }


 findDispense(DispenseID:any){
  this.DispenseData={}

  $('#animated-gif').fadeIn();
  $('.dispenseModel').css('display','none')


  this._pharmacist.dispenseList().subscribe(res=>{
 
   $('#animated-gif').fadeOut(0,function(){

    $('.dispenseModel').css('display','block')

   });

   this.DispenseData = res.find((drug:any) => drug.id == DispenseID)

    console.log(this.DispenseData)
  
  
  })

 }

 
//pagination
onDataChange(event :any){
  this.tableSize = event.target.value
  this.page=1
}


  // pagination
  pages:number=1
  counts:number = 0
  tableSiz:any =5;
  table:any =[5,10,15,20]


onrequestChange(event :any){
  this.tableSiz = event.target.value
  this.pages=1
}


drugShort (){

this._pharmacist.drugShortage().subscribe(res=>{
this.drugShorts = res
console.log(res)

})

}




autoCompleteDrugs(){

this._pharmacist.drugNames().subscribe(res=>{
 
res.forEach((element:any) => {

   this.drugName.push(element?.en_brand_name);
  
});

})


  
}

//search for drug 
drugSearch(){

  this.isSubmitted=true
  this.searchData = this.searchValues.value
  console.log(this.searchData)
  if(this.searchValues.valid)
{

    this.route.navigateByUrl(`/search/${this.searchData.searchSelect}/${this.searchData.search}`)
}
  
}

//requested drug from other stock 

stockRequests(){

  this._pharmacist.requestedStockDrug().subscribe(res=>{
    $('#animate').fadeIn();
    $('#animate').fadeOut(0,function(){

      $('.stockTable').css('display','block')
  
     });

  this.requestedDrugs =res
    console.log('requested stock')
    console.log(res)
  })
}
// validation error return 
get searchSelect(){return this.searchValues.get('searchSelect')}
get search(){return this.searchValues.get('search')}



}










