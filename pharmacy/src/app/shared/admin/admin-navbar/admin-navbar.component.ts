import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent {


  getsession:any

  constructor(private _route:Router){


  this.getsession = JSON.parse(sessionStorage.getItem("User")||'{}');

  }


  logOut(){
    
    localStorage.removeItem('token')
    localStorage.clear()

  
    sessionStorage.removeItem("User")
    sessionStorage.clear()
    this._route.navigateByUrl('/')


}



}
