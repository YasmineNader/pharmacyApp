import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MainFrameService } from 'src/app/services/main-frame.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent  {
//   isSubmitted:boolean=false
//   msg:any=null
//   register=new FormGroup({
//     firstName:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
//     lastName:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
//     email:new FormControl('',[Validators.required,Validators.email]),
//     password:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(15)]),
//     userType:new FormControl('',[Validators.required]),
//   })
  
//   constructor(public Main_frame:MainFrameService){}

//   ngOnInit(): void {
//     this.Main_frame.hide()
//   }



//   userValue(){
//     this.isSubmitted=true
//     if(this.register.valid){
//       console.log("hi")

//     console.log(this.register.value)

//   }

// }

//   // validation error return 
//   get firstName(){return this.register.get('firstName')}
//   get lastName(){return this.register.get('lastName')}
//   get email(){return this.register.get('email')}
//   get password(){return this.register.get('password')}
//   get userType(){return this.register.get('userType')}
  
}
