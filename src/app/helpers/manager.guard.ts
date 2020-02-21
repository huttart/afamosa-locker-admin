import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ManagerGuard implements CanActivate, CanActivateChild  {

  constructor(
    private router: Router,
    private authenticationService: AuthService,
    private _snackBar: MatSnackBar,
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentUser = this.authenticationService.user_data;
    // console.log(currentUser);
    if (currentUser && currentUser.id && (currentUser.role == 'Admin' || currentUser.role == 'Manager')) {
      return true;
    }
    // not logged in so redirect to login page with the return url
    if (!(currentUser && currentUser.id)) {
      this.router.navigate(['/login']);
    }
    return false;
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentUser = this.authenticationService.user_data;
    // console.log(currentUser);
    if (currentUser && currentUser.id && (currentUser.role == 'Admin' || currentUser.role == 'Manager')) {
      return true;
    }
    // not logged in so redirect to login page with the return url
    this._snackBar.open('Permission denied.', '', {
      panelClass: 'error'
    });
    return false;
  }

}
