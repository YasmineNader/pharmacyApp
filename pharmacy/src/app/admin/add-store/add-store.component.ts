import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { MainFrameService } from 'src/app/services/main-frame.service';

@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.css']
})
export class AddStoreComponent {
  constructor(public Main_frame:MainFrameService,private admin:AdminService){}
  ngOnInit(): void {
    this.Main_frame.hide()
  }




  isSubmitted:boolean=false
  msg:any=null
  Message:any =null
  stores=new FormGroup({
    store_name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    store_reg_no:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    store_phone1:new FormControl('',[Validators.required,Validators.pattern('^01[0125][0-9]{8}$')]),
    store_location:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)])


  })

  addStore(){

    this.isSubmitted=true
    if(this.stores.valid){

      this.admin.addStore(this.stores.value).subscribe(res=>{
        
    this.Message= res.message
        console.log(res)
      },(error)=>{
        this.msg= {'message':"Already Exist"}


        },()=>{
          this.msg={'message':"Store Added successfully"}
         } )

}

    
  }

   // validation error return 
   get store_name(){return this.stores.get('store_name')}
   get store_reg_no(){return this.stores.get('store_reg_no')}
   get store_location(){return this.stores.get('store_location')}
   get store_phone1(){return this.stores.get('store_phone1')}
}
