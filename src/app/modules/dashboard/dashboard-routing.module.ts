import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { DashboardComponent } from './dashboard.component';

import {  } from './modules/user/user.module';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path:'',
        component: MainComponent
      },
      {
        path:'user',
        loadChildren: './modules/user/user.module#UserModule'
      },
      {
        path:'locker',
        loadChildren: './modules/locker/locker.module#LockerModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
