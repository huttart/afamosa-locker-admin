import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {

  constructor(
    private router: Router,
    private authenticationService: AuthService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentUser = this.authenticationService.user_data;
    console.log(currentUser);
    if (currentUser && currentUser.id) {
      return true;
    }
    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login']);
    return false;
  }
  
}
