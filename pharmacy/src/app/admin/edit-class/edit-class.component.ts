import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { MainFrameService } from 'src/app/services/main-frame.service';
import { PharmacistService } from 'src/app/services/pharmacist.service';
declare var $: any

@Component({
  selector: 'app-edit-class',
  templateUrl: './edit-class.component.html',
  styleUrls: ['./edit-class.component.css']
})
export class EditClassComponent {
  category:any
  categoryInfo:any
  constructor(public Main_frame:MainFrameService,private admin:AdminService,private _pharmacist:PharmacistService){
  }

  ngAfterViewInit(): void {

    this. drugcategory()

  }

  ngOnInit(): void {
    this.Main_frame.hide()
  }


  
//category info 
  drugcategory(){

$('.animation').fadeIn();
$('.adminT').css('display','none')
    this._pharmacist.drugCategories().subscribe(res=>{
      $('.animation').fadeOut(0,function(){

        $('.adminT').css('display','block')
      })
    this.categoryInfo = res
    
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



 