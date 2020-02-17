import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManageRoutingModule } from './user-manage-routing.module';
import { UserManageComponent } from './user-manage.component';
import { MainComponent } from './components/main/main.component';
import { SiteBarModule } from 'src/app/share/site-bar/site-bar.module';


import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmPopupModule } from 'src/app/share/confirm-popup/confirm-popup.module';
import { ConfirmPopupComponent } from 'src/app/share/confirm-popup/confirm-popup.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UserTableComponent } from './components/user-table/user-table.component';


import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [UserManageComponent, MainComponent, UserTableComponent, AddUserComponent, EditUserComponent, ChangePasswordComponent],
  imports: [
    CommonModule,
    UserManageRoutingModule,
    SiteBarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    ConfirmPopupModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule
  ],
  entryComponents: [
    ConfirmPopupComponent
  ]
})
export class UserManageModule { }
