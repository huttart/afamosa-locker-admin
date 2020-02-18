import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/helpers/auth.guard';
import { AdminGuard } from './helpers/admin.guard';
import { ManagerGuard } from './helpers/manager.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/home/home.module#HomeModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    loadChildren: './modules/home/home.module#HomeModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    loadChildren: './modules/dashboard/dashboard.module#DashboardModule',
    canActivate: [ManagerGuard]
  },
  {
    path: 'user-manage',
    loadChildren: './modules/user-manage/user-manage.module#UserManageModule',
    canActivate: [AdminGuard]
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
