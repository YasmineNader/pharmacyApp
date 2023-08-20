import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { MainFrameService } from 'src/app/services/main-frame.service';
declare var $: any

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
userData:any
  constructor(public Main_frame:MainFrameService,private admin:AdminService){
  }

  ngAfterViewInit(): void {

    this.getAllUser()

  }

  ngOnInit(): void {
    this.Main_frame.hide()
  }
// get all users
getAllUser(){
  $('.animation').fadeIn();
  $('.adminT').css('display','none')
       
this.admin.AllUser().subscribe(res=>{
  $('.animation').fadeOut(0,function(){
  
    $('.adminT').css('display','block')
  })
this.userData = res


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
