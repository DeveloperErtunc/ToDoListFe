import {  CanActivate,  ActivatedRouteSnapshot,  RouterStateSnapshot,  Router} from "@angular/router";
import { Injectable } from "@angular/core";
import { AlertifyService } from "../alertify/alertify.service";
import { UserService } from "../userservice/user.service";

@Injectable()
export class LoginGuard implements CanActivate {
  logged!:string;
  
  constructor(
    private router: Router, 
    private alertify:AlertifyService,
    private UserService:UserService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    this.UserService.tokenSubject.subscribe(data => {
      this.logged = data;
   });
    if (this.logged != null) {
      return true;
    }
    this.router.navigate([""]);
    this.alertify.error("Sayfaya erişim için sisteme giriş yapmalısınız!");
    return false;
  }
}