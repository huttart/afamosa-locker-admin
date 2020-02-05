import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LockerDetailComponent } from './locker-detail.component';

const routes: Routes = [
  {
    path:'',
    component:LockerDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LockerDetailRoutingModule { }
