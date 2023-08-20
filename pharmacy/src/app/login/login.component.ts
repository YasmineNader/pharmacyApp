import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MainFrameService } from '../services/main-frame.service';
declare var $:any
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  isSubmitted:boolean=false
  msg:any=null
  userToken:any
  userName:any
  store:any
  storeID:any
  storeLocation:any
  storePhone:any
  userID:any
  userType:any
    adminLoginValues=new FormGroup({
    username:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    password:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(15)]),
    // userType:new FormControl('',[Validators.required])
  })
  @Output() newItemEvent = new EventEmitter<boolean>();
  @Output() buttonClickEvent = new EventEmitter<boolean>();
  //will be true of login form is opened
  @Input() isFormOpened: boolean = false;
  @Input() clickedOpen: boolean = false;

  @HostListener('document:click', ['$event'])
  clickout(event:any) {
    //clicked inside form
    if(!this.clickedOpen){
    if(this.eRef.nativeElement.contains(event.target)) {
      // to show the login form with overlay and not to let it disappear
      this.newItemEvent.emit(false);      
    }
    else{

      //clicked outside form       // to hide the login form with overlay 
      if(!this.clickedOpen && this.isFormOpened)
      this.newItemEvent.emit(true);
    } 
  }else{
    // click on start button to show the form 
    this.buttonClickEvent.emit(false);

  }
  //this.clickedOpen = false;
    

  }

  constructor(private eRef:ElementRef,private _auth:AuthService ,public Main_frame:MainFrameService,private _route:Router) { }

  ngOnInit(): void {
    this.Main_frame.hide()
  }

  
  // userLogin


  printValue(){

    $('.animation').fadeIn();
    $('.animation').css("display","inline-block")

    this.isSubmitted=true

    // if(this.adminLoginValues.valid){
    //   this._route.navigateByUrl('/home')
      
    // }
  
    if(this.adminLoginValues.valid){
      // console.log(this.adminLoginValues.value)
      this._auth.userLogin(this.adminLoginValues.value).subscribe(res=>{
        $('.animation').fadeOut(0,function(){

        })
        // $('.animation').css("display","inline-block")
        this.userToken=res.access
        
      },(error)=>{

        $('.animation').fadeOut(0,function(){

        })
      this.msg={"Message":"Please Enter Your credentials Again"}

      },()=>{
        
        let token ="Bearer"+" "+this.userToken;
        localStorage.setItem('token',token)
        this._auth.userData().subscribe(res=>{
          this.userName=res.user.first_name
          this.store=res.store[0].store_id.store_name
          this.storeID=res.store[0].store_id.id
          this.storeLocation=res.store[0].store_id.store_location
          this.storePhone=res.store[0].store_id.store_phone1
          this.userType =res.user.login_type
          // this.userType ="purchaser"
          this.userID=res.user.id
          let User={"Name":this.userName,"Store":this.store,"StoreID":this.storeID,"userID":this.userID,"storeLocation":this.storeLocation,"storePhone":this.storePhone,"userType":this.userType}
          sessionStorage.setItem('User',JSON.stringify(User));
          if(this.userType == "pharmacist"){

            this._route.navigateByUrl('/home').then(()=>window.location.reload())

          }else if(this.userType == "admin"){
            this._route.navigateByUrl('EditUser').then(()=>window.location.reload())

          }else if(this.userType == "stockkeeper"){
            this._route.navigateByUrl('stock/request').then(()=>window.location.reload())

          }else{
            this._route.navigateByUrl('purchase/request').then(()=>window.location.reload())
          }
          

        })
       

 

      })
    }
  }

// validation error return 
  get username(){return this.adminLoginValues.get('username')}
  get password(){return this.adminLoginValues.get('password')}
}

