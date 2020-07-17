import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import{ApiService} from '../api.service';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router : Router, public auth: ApiService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):Promise<boolean> | boolean {
      if (localStorage.getItem('tokenstore') != null)
      return true;
      this.router.navigate(['/login']);
      return false;
  }
}