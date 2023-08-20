import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { MainFrameService } from 'src/app/services/main-frame.service';

@Component({
  selector: 'app-add-user-store',
  templateUrl: './add-user-store.component.html',
  styleUrls: ['./add-user-store.component.css']
})
export class AddUserStoreComponent {
  constructor(public Main_frame:MainFrameService,private admin:AdminService){
    this.getAllStores()
    this.getAllUser()
  }
  ngOnInit(): void {
    this.Main_frame.hide()
  }




  isSubmitted:boolean=false
  msg:any=null
  Message:any =null
  storesData:any
  userData:any

  userstore=new FormGroup({
    user_id:new FormControl('',[Validators.required]),
    store_id:new FormControl('',[Validators.required]),
   


  })



//get all stores
getAllStores(){

  this.admin.AllStores().subscribe(res=>{
   console.log(res)
  
  this.storesData = res
  

  
  })
  
  }
// get all users
getAllUser(){

  this.admin.AllUser().subscribe(res=>{
   
  
  this.userData = res
  

  })
  
  }
 //add user store 
  adduserstore(){

    this.isSubmitted=true
    console.log(this.userstore.value)
    if(this.userstore.valid){

      this.admin.addUserStore(this.userstore.value).subscribe(res=>{
        
    this.Message= res.message
        console.log(res)
      },(error)=>{
        this.msg={"message":"Already Exist"}

        },()=>{
          this.msg={"message":"user Store Added successfully"}
         } )

}

    
  }

   // validation error return 
   get user_id(){return this.userstore.get('user_id')}
   get store_id(){return this.userstore.get('store_id')}

}
