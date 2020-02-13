import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LockerRoutingModule } from './locker-routing.module';
import { LockerComponent } from './locker.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmPopupModule } from 'src/app/share/confirm-popup/confirm-popup.module';
import { ConfirmPopupComponent } from 'src/app/share/confirm-popup/confirm-popup.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LockerLogsByUserComponent } from 'src/app/share/locker-logs-by-user/locker-logs-by-user.component';
import { LockerLogsByUserModule } from 'src/app/share/locker-logs-by-user/locker-logs-by-user.module';
@NgModule({
  declarations: [LockerComponent],
  imports: [
    CommonModule,
    LockerRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    ConfirmPopupModule,
    MatDialogModule,
    MatSnackBarModule,
    LockerLogsByUserModule
  ],
  entryComponents: [
    ConfirmPopupComponent,
    LockerLogsByUserComponent
  ]
})
export class LockerModule { }
