import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { MainFrameService } from 'src/app/services/main-frame.service';
declare var $: any

@Component({
  selector: 'app-edit-user-store',
  templateUrl: './edit-user-store.component.html',
  styleUrls: ['./edit-user-store.component.css']
})
export class EditUserStoreComponent {
  userstoreData:any
  constructor(public Main_frame:MainFrameService,private admin:AdminService){
  }


  ngAfterViewInit(): void {

    this.getAlluserstore()

  }
  ngOnInit(): void {
    this.Main_frame.hide()
  }
// get all users
getAlluserstore(){

  $('.animation').fadeIn();
  $('.adminT').css('display','none')
      
    
this.admin.AllUserStore().subscribe(res=>{
  $('.animation').fadeOut(0,function(){
  
    $('.adminT').css('display','block')
  })
this.userstoreData = res
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
