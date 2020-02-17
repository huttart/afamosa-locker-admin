import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserManageComponent } from './user-manage.component';
import { MainComponent } from './components/main/main.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
const routes: Routes = [
  {
    path: '',
    component: UserManageComponent,
    children: [
      {
        path: '',
        component: MainComponent
      },
      {
        path: 'add-user',
        component: AddUserComponent
      },
      {
        path: 'edit-user/:userID',
        component: EditUserComponent
      },
      {
        path: 'change-password/:userID',
        component: ChangePasswordComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManageRoutingModule { }
