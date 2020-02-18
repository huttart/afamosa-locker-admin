import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const currentUser = this.authenticationService.user_data;
    console.log(currentUser);
    if (currentUser && currentUser.id && ( currentUser.role == 'Admin')) {
      return true;
    }
    // not logged in so redirect to login page with the return url
    if (!(currentUser && currentUser.id)) {
      this.router.navigate(['/login']);
    }
    return false;
  }

}
