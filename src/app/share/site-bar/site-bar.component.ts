import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-site-bar',
  templateUrl: './site-bar.component.html',
  styleUrls: ['./site-bar.component.scss']
})
export class SiteBarComponent implements OnInit {
  user_data;
  constructor(
    private _AuthService: AuthService,
    private router: Router

  ) { }

  ngOnInit() {
    this.user_data = this._AuthService.user_data;
  }

  logout() {
    this._AuthService.user_data.id = '';
    this.router.navigate(['/login']);
  }

}
