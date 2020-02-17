import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
@Component({
  selector: 'app-authen',
  templateUrl: './authen.component.html',
  styleUrls: ['./authen.component.scss']
})
export class AuthenComponent implements OnInit {
  username;
  password;
  constructor(
    private _AuthService: AuthService,
    private _snackBar: MatSnackBar,
    private router: Router

  ) { }

  ngOnInit() {

    setTimeout(() => {
      this.username = '';
      this.password = '';
    }, 700);
  }

  login() {

    console.log(this.username);
    console.log(this.password);



    if (this.username && this.password) {
      this._AuthService.login(this.username, this.password).then((res:any) => {
        if (res.status) {
          this._snackBar.open('Successfully logged in', '', {
          });
          console.log(res);
          this._AuthService.user_data.id = res.data.id;
          this._AuthService.user_data.role = res.data.role;
          this._AuthService.user_data['username'] = res.data.username;
          this._AuthService.user_data['f_name'] = res.data.f_name;
          this._AuthService.user_data['l_name'] = res.data.l_name;

          this.router.navigate(['/dashboard']);

        } else {
          this._snackBar.open('No match user.', '', {
            panelClass: 'error'
          });

        }
      })
    }
   

  }

}
