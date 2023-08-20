import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StokkeeperGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      let token = localStorage.getItem('token')
      let data  = JSON.parse(sessionStorage.getItem('User')||'[]')
      if(!token || data.userType !='stockkeeper'){
      this.router.navigateByUrl("/")

      }
    return true;
  }
  
}
