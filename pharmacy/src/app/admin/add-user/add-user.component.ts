import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { MainFrameService } from 'src/app/services/main-frame.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  isSubmitted:boolean=false
  msg:any=null
  Message:any =null
  register=new FormGroup({
    first_name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    middle_name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    last_name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    username:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(15)]),
    login_type:new FormControl('',[Validators.required]),
    login_id:new FormControl('',[Validators.required]),
  })
  
  constructor(public Main_frame:MainFrameService,private admin:AdminService){
    this.register.controls["login_type"].setValue("admin");

  }
  ngOnInit(): void {
    this.Main_frame.hide()
  }



  userValue(){
    this.isSubmitted=true
    if(this.register.valid){

      
      this.admin.addUser(this.register.value).subscribe(res=>{
        
    this.Message= res.message
        console.log(res)
      },(error)=>{
        this.msg= {'message':"Arleady Exist"}


        },()=>{
          this.msg={"message":"User Added successfully"}
         } )

}
}
  // validation error return 
  get first_name(){return this.register.get('first_name')}
  get middle_name(){return this.register.get('middle_name')}
  get last_name(){return this.register.get('last_name')}
  
  get username(){return this.register.get('username')}
  get password(){return this.register.get('password')}
  get login_type(){return this.register.get('login_type')}
  get login_id(){return this.register.get('login_id')}
  
  
}
