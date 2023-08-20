import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { MainFrameService } from 'src/app/services/main-frame.service';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css']
})
export class AddClassComponent {
  constructor(public Main_frame:MainFrameService,private admin:AdminService){}
  ngOnInit(): void {
    this.Main_frame.hide()
  }




  isSubmitted:boolean=false
  msg:any=null
  Message:any =null
  category=new FormGroup({
    className:new FormControl('',[Validators.required]),
  
  })

  addCategory(){

    this.isSubmitted=true
    if(this.category.valid){

      this.admin.addClass(this.category.value).subscribe(res=>{
        
    this.Message= res.message
        console.log(res)
      },(error)=>{
        this.msg= {'message':"Already Exist"}


        },()=>{
          this.msg={'message':"Class Added successfully"}
         } )

}

    
  }

   // validation error return 
   get className(){return this.category.get('className')}
  

}
