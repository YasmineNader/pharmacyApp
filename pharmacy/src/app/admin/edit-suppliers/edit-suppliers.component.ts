import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { MainFrameService } from 'src/app/services/main-frame.service';
declare var $: any

@Component({
  selector: 'app-edit-suppliers',
  templateUrl: './edit-suppliers.component.html',
  styleUrls: ['./edit-suppliers.component.css']
})
export class EditSuppliersComponent {
  supplierData:any
  constructor(public Main_frame:MainFrameService,private admin:AdminService){
  }
  ngOnInit(): void {
    this.Main_frame.hide()
  }

  ngAfterViewInit(): void {

    this. getAllSupplier()

  }
//get all supplier
  getAllSupplier(){

    $('.animation').fadeIn();
    $('.adminT').css('display','none')
        
    this.admin.AllSupplier().subscribe(res=>{
      $('.animation').fadeOut(0,function(){
    
        $('.adminT').css('display','block')
      })
     console.log(res)
    
    this.supplierData = res
    

    
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
