import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddLockerComponent } from './add-locker.component';

const routes: Routes = [
  {
    path:'',
    component:AddLockerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddLockerRoutingModule { }
