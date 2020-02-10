import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddLockerZoneComponent } from './add-locker-zone.component';

const routes: Routes = [{
  path:'',
  component: AddLockerZoneComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddLockerZoneRoutingModule { }
