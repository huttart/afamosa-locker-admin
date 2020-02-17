import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  navigationSubscription;
  f_name;
  l_name;
  username;
  role;
  userID;
  user_data;
  constructor(
    private _AdminService: AdminService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute,
  ) { 
    this.navigationSubscription = router.events.subscribe( (e: any) => {
      if (e instanceof NavigationEnd) {
        this.userID = this.route.snapshot.paramMap.get('userID');
        this.getUserData(this.userID);
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  getUserData (user_id) {
    this._AdminService.getUserByID(user_id).then( (data:any) => {
      this.f_name = data.f_name;
      this.l_name = data.l_name;
      this.username = data.username;
      this.role = data.role;
      this.user_data = data;
    });
  }

  save() {
    this._AdminService.updateUserByID(this.role, this.f_name, this.l_name, this.userID).then((res: any) => {
      if (res.status) {
        this._snackBar.open('Successfully', '', {});
        this.router.navigate(['/', 'user-manage']);
      }
    });
  }

}
