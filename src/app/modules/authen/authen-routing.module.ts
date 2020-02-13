import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenComponent } from './authen.component';

const routes: Routes = [{
  path: '',
  component: AuthenComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenRoutingModule { }
