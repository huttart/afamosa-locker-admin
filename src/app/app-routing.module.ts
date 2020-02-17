import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/helpers/auth.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/home/home.module#HomeModule'
  },
  {
    path: 'home',
    loadChildren: './modules/home/home.module#HomeModule'
  },
  {
    path: 'dashboard',
    loadChildren: './modules/dashboard/dashboard.module#DashboardModule',
    // canActivate: [AuthGuard]
  },
  {
    path: 'user-manage',
    loadChildren: './modules/user-manage/user-manage.module#UserManageModule',
    // canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: './modules/authen/authen.module#AuthenModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
