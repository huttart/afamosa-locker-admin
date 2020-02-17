import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  f_name;
  l_name;
  username;
  password;
  role;
  cpassword;
  constructor(
    private _AdminService: AdminService,
    private _snackBar: MatSnackBar,
    private router: Router

  ) { }

  ngOnInit() {
  }

  save () {
    if (this.cpassword !== this.password) {
      this._snackBar.open('Password does not match.', '', {
        panelClass: 'error'
      }); 
      return;
    }
    this._AdminService.addUser(this.username, this.password, this.role, this.f_name, this.l_name).then( (res:any) => {
      if (res.status) {
        this._snackBar.open('Successfully', '', {}); 
        this.router.navigate(['/','user-manage']);
      }
    });
  }

}
