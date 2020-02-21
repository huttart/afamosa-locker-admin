import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { DashboardComponent } from './dashboard.component';
import { ManagerGuard } from 'src/app/helpers/manager.guard';
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
        loadChildren: './modules/user/user.module#UserModule',
        canActivateChild: [ManagerGuard]
      },
      {
        path:'locker',
        loadChildren: './modules/locker/locker.module#LockerModule',
        canActivateChild: [ManagerGuard]
      },
      {
        path:'add-locker',
        loadChildren: './modules/add-locker/add-locker.module#AddLockerModule'
      },
      {
        path:'add-locker-zone',
        loadChildren: './modules/add-locker-zone/add-locker-zone.module#AddLockerZoneModule'
      },
      {
        path:'locker/:lockerID',
        loadChildren: './modules/locker-detail/locker-detail.module#LockerDetailModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
