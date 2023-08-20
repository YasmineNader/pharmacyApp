import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainFrameService } from '../services/main-frame.service';
import { PharmacistService } from '../services/pharmacist.service';
declare var $: any

@Component({
  selector: 'app-drug-categories',
  templateUrl: './drug-categories.component.html',
  styleUrls: ['./drug-categories.component.css']
})
export class DrugCategoriesComponent {
  page:number=1
  count:number = 0
  tableSize :number =5
  drugData:any
  category:any
  categoryName:any
  constructor(public Main_frame:MainFrameService,private _pharmacist:PharmacistService,private active:ActivatedRoute){

  
  }


  ngAfterViewInit(): void {

    this.drugCategories()

  }

  drugCategories(){
    $('.animation').fadeIn();
  $('.searchContainer').css('display','none')
    this.category = this.active.snapshot.paramMap.get('category')
    this.categoryName = this.active.snapshot.paramMap.get('categoryName')
    
    this._pharmacist.drugCategorySearch(this.category).subscribe(res=>{
      $('.animation').fadeOut(0,function(){

        $('.searchContainer').css('display','block')
      })
      
     this.drugData = res
    console.log(res)

      
    })
  }



  //pagination
  onDataChange(event :any){
    this.page=event
  }
}
