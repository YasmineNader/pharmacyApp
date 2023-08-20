import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { MainFrameService } from 'src/app/services/main-frame.service';
import { PharmacistService } from 'src/app/services/pharmacist.service';
declare var $: any

@Component({
  selector: 'app-edit-form-class',
  templateUrl: './edit-form-class.component.html',
  styleUrls: ['./edit-form-class.component.css']
})
export class EditFormClassComponent {
  categoryId = this.active.snapshot.paramMap.get('categoryId')
  
  constructor(public Main_frame:MainFrameService,private admin:AdminService,private active:ActivatedRoute){
   }

   ngAfterViewInit(): void {

    this.oneClass()

  }

isSubmitted:boolean=false
msg:any=null
Message:any =null
singelData:any
editcategory=new FormGroup({
  className:new FormControl('',[Validators.required]),

})

  ngOnInit(): void {
    this.Main_frame.hide()
  }

  formValues(){
    this.editcategory.get('className')?.setValue(this.singelData.class_name);
  
  }
  // get one class for edit

oneClass(){
  
$('.animation').fadeIn();
$('.adminT').css('display','none')
    
  this.isSubmitted=true
  this.admin.getOneClass(this.categoryId).subscribe(res=>{
    $('.animation').fadeOut(0,function(){

      $('.adminT').css('display','block')
    })
    this.singelData = res
    this.formValues()

  })
}


editCategory(){
  if(this.editcategory.valid){

this.admin.editCategory(this.editcategory.value,this.categoryId).subscribe(res=>{

  console.log(res)
},(error)=>{


  },()=>{
    this.msg={'message':"change done"}
   } )
  }
}
 // validation error return 
 get className(){return this.editcategory.get('className')}
}













