import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  navigationSubscription;
  userID;
  user_data;

  cpassword;
  password;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _AdminService: AdminService,
    private _snackBar: MatSnackBar,
  ) {
    this.navigationSubscription = router.events.subscribe( (e:any) => {
      if (e instanceof NavigationEnd) {
        this.userID = route.snapshot.paramMap.get('userID');
        this.getUserData(this.userID);

        setTimeout(() => {
          this.cpassword = '';
          this.password = '';
        }, 700);
      }
    })
  }

  ngOnInit() {
  }

  getUserData (user_id) {
    this._AdminService.getUserByID(user_id).then( (data:any) => {
      this.user_data = data;
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  save () {
    if (this.password == '') {
      this._snackBar.open('Password can not be empty.', '', {
        panelClass: 'error'
      }); 
      return;
    }
    if (this.cpassword !== this.password) {
      this._snackBar.open('Password does not match.', '', {
        panelClass: 'error'
      }); 
      return;
    }
    this._AdminService.changePassword(this.userID, this.password).then( (res:any) => {
      if (res.status) {
        this._snackBar.open('Successfully', '', {}); 
        this.router.navigate(['/','user-manage']);
      }
    });
  }



}
