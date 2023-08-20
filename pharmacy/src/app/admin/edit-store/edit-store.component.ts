import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { MainFrameService } from 'src/app/services/main-frame.service';
declare var $: any

@Component({
  selector: 'app-edit-store',
  templateUrl: './edit-store.component.html',
  styleUrls: ['./edit-store.component.css']
})
export class EditStoreComponent {
  storesData:any
  constructor(public Main_frame:MainFrameService,private admin:AdminService){
  }
  ngOnInit(): void {
    this.Main_frame.hide()
  }

  ngAfterViewInit(): void {

    this. getAllStores()

  }
//get all stores
  getAllStores(){

    $('.animation').fadeIn();
    $('.adminT').css('display','none')
    this.admin.AllStores().subscribe(res=>{
      $('.animation').fadeOut(0,function(){

      $('.adminT').css('display','block')
      })
     console.log(res)
    
    this.storesData = res
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
