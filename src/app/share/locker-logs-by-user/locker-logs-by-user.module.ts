import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LockerLogsByUserComponent } from './locker-logs-by-user.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DatePipeModule } from 'src/app/pipes/date-pipe/date-pipe.module';
@NgModule({
  declarations: [LockerLogsByUserComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    DatePipeModule
  ],
  exports: [
    LockerLogsByUserComponent
  ]
})
export class LockerLogsByUserModule { }
