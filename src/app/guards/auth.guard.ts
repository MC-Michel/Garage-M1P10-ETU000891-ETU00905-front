import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { lastValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router){

  }
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      const allowedRoles: any  = route.data['roleIds'] ? route.data['roleIds'] : [];
      const token = this.userService.getCurrentToken();
      if(!token){
        this.router.navigate(['/users/login']);
        return false;
      }
      const allowed: any = await lastValueFrom(  this.userService.checkIfAllowed(allowedRoles));
      if(allowed)
        return true;
      this.router.navigate(['/forbidden']);
      return false;
  }
  
}
