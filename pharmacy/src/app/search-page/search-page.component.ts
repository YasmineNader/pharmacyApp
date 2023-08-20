import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PharmacistService } from '../services/pharmacist.service';
import { ActivatedRoute } from '@angular/router';
declare var $:any
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit{

// getsession:any
searchData:any
searchResult:any
drugName:string[] = [];
page:number=1
count:number = 0
tableSize :number =5

isSubmitted:boolean=false
searchValues=new FormGroup({
  searchSelect:new FormControl('Commerical Name'),
  search:new FormControl('',[Validators.required]),
})


constructor(private _pharmacist:PharmacistService,private active:ActivatedRoute )
{
  this.autoCompleteDrugs()
  this.foundDrug()
  this.searchValues.controls["searchSelect"].setValue("en_brand_name");


}



  ngOnInit(): void {
    
    $('#SearchForm').submit(() => {

      if(this.searchValues.valid){
      $('#animated-gif').fadeIn();

    }

  });

  $( "#search" ).autocomplete({
    source: this.drugName
  
  });

  }

drugSearch(){

    this.isSubmitted=true
    this.searchData = this.searchValues.value
      console.log(this.searchData)
    if(this.searchValues.valid){

 this._pharmacist.drugSearch(this.searchData).subscribe(res=>
{

   

  $('#animated-gif').fadeOut(0,function(){


    $('.searchContainer').css('display','block')



  });
         this.searchResult = res



})

    }
  }

//pagination
  onDataChange(event :any){
    this.page=event
  }

  //autocomplete search input form 
  autoCompleteDrugs(){

    this._pharmacist.drugNames().subscribe(res=>{
     
    res.forEach((element:any) => {
    
       this.drugName.push(element?.en_brand_name);
      
    });
    
    })
    
    
}



//found the drug
foundDrug()
{
  let searchCategory = this.active.snapshot.paramMap.get('category')
  let search = this.active.snapshot.paramMap.get('searchName')
  let obj = {"searchSelect":searchCategory,"search":search}
      this._pharmacist.drugSearch(obj).subscribe(res=>
    {
    
       
    
      $('#animated-gif').fadeOut(0,function(){
    
    
        $('.searchContainer').css('display','block')
    
    
    
      });
             this.searchResult = res
        
    })

}


// validation error return 
get searchSelect(){return this.searchValues.get('searchSelect')}
get search(){return this.searchValues.get('search')}

}
