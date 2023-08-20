import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MainFrameService } from '../services/main-frame.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare var $: any
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  isSubmitted: boolean = false
  msg: any = null
  isFormOpened=false;
  userToken: any
  userName: any
  adminLoginValues = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
    // userType:new FormControl('',[Validators.required])
  })
  @ViewChild('loginForm') loginForm: any;
  clickedOpen = false;
  constructor(private renderer: Renderer2, private _auth: AuthService, public Main_frame: MainFrameService, private _route: Router) { }

  startButtonClick(clickedOpen:boolean){
    this.clickedOpen = clickedOpen;
  }

  HideOverlay(clickedOutside:boolean){
    if(clickedOutside){//&& !this.isFormOpened){
    this.renderer.removeClass(this.loginForm.nativeElement, 'formToggle');
    this.isFormOpened  = false;
  }
  }

  openLoginPage() {
    this.renderer.addClass(this.loginForm.nativeElement, 'formToggle');
    this.isFormOpened  = true;
    this.clickedOpen = true;
  }

  ngOnInit(): void {
    this.Main_frame.hide()
  }


  printValue() {
    this.isSubmitted = true
    if (this.adminLoginValues.valid) {
      console.log(this.adminLoginValues.value)
      this._auth.userLogin(this.adminLoginValues.value).subscribe(res => {

        this.userToken = res.access

      }, (error) => {

        this.msg = { "Message": "Please Enter Your credentials Again" }

      }, () => {

        let token = "Bearer" + " " + this.userToken;
        localStorage.setItem('token', token)
        this._auth.userData().subscribe(res => {
          // console.log(res.user.first_name)
          this.userName = res.user.first_name
          let User = { "Name": this.userName }
          sessionStorage.setItem('User', JSON.stringify(User));
          this._route.navigateByUrl('/home')

        })




      })
    }
  }

  // validation error return 
  get username() { return this.adminLoginValues.get('username') }
  get password() { return this.adminLoginValues.get('password') }

}
